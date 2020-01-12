// @ts-check

/**
 *
 * @param {string} baseURL
 * @param {string} url
 * @returns {string}
 */
function resolveURL(baseURL, url) {
  if (url.startsWith('./') || url.startsWith('../')) {
    return baseURL + url;
  }
  return url;
}

class ElemContext {
  /**
   *
   * @param {Component} component
   * @param {Element} elem
   */
  constructor(component, elem) {
    this.component = component;
    this.elem = elem;
  }

  /**
   * @returns {string}
   */
  get content() {
    return this.elem.innerHTML;
  }

  /**
   * @param {string} content
   */
  set content(content) {
    this.elem.innerHTML = content;
  }
}

class StyleContext extends ElemContext {
  scopeStyles(sheet, scopeName) {
    const rules = sheet.cssRules;

    for (let i = 0; i < rules.length; ++i) {
      const rule = rules[i];
      if (rule.type !== 1) continue;

      const scopedSelectors = [];

      rule.selectorText.split(/\s*,\s*/).forEach(function(sel) {
        scopedSelectors.push(scopeName + ' ' + sel);
        const segments = sel.match(/([^ :]+)(.+)?/);
        scopedSelectors.push(segments[1] + scopeName + (segments[2] || ''));
      });

      const scopedRule =
        scopedSelectors.join(',') +
        rule.cssText.substr(rule.selectorText.length);

      sheet.deleteRule(i);
      sheet.insertRule(scopedRule, i);
    }
  }

  compile() {
    const scoped = this.elem.hasAttribute('scoped');

    if (scoped) {
      // no template, no scopable style needed
      if (this.template === null) return;

      // firefox does not tolerate this attribute
      this.elem.removeAttribute('scoped');
    }

    document.head.appendChild(this.elem);

    if (scoped) debugger;
    this.scopeStyles(this.elem.sheet, '[' + this.component.getScopeId() + ']');

    return Promise.resolve();
  }
}

class ScriptContext extends ElemContext {
  /**
   *
   * @param {Component} component
   * @param {Element} elem
   */
  constructor(component, elem) {
    super(component, elem);
    this.module = {
      exports: {}
    };
  }

  compile() {
    const childModuleRequire = function(childURL) {
      return vueLoader.require(resolveURL(this.component.baseURI, childURL));
    }.bind(this);

    const childLoader = function(childURL, childName) {
      return vueLoader(resolveURL(this.component.baseURI, childURL), childName);
    }.bind(this);

    try {
      Function('exports', 'require', 'vueLoader', 'module', this.content).call(
        this.module.exports,
        this.module.exports,
        childModuleRequire,
        childLoader,
        this.module
      );
    } catch (ex) {
      //if (!('lineNumber' in ex)) {
      return Promise.reject(ex);
      //}

      /*
      const vueFileData = responseText.replace(/\r?\n/g, '\n');
      const lineNumber =
        vueFileData.substr(0, vueFileData.indexOf(script)).split('\n').length +
        ex.lineNumber -
        1;
      throw new ex.constructor(ex.message, url, lineNumber);
      */
    }

    return Promise.resolve(this.module.exports)
      .then(vueLoader.scriptExportsHandler.bind(this))
      .then(
        function(exports) {
          this.module.exports = exports;
        }.bind(this)
      );
  }
}

class TemplateContext extends ElemContext {
  getRootElt() {
    const tplElt1 = this.elem.content || this.elem;

    if ('firstElementChild' in tplElt1) return tplElt1.firstElementChild;

    for (
      let tplElt2 = tplElt1.firstChild;
      tplElt2 !== null;
      tplElt2 = tplElt2.nextSibling
    )
      if (tplElt2.nodeType === Node.ELEMENT_NODE) return tplElt2;

    return null;
  }

  /**
   * @returns {Promise<void>}
   */
  compile() {
    return Promise.resolve();
  }
}

class Component {
  /**
   *
   * @param {string=} name
   */
  constructor(name) {
    this.name = name;
    this.template = null;
    this.script = null;
    this.styles = [];
    this._scopeId = '';
  }

  getScopeId() {
    if (this._scopeId === '') {
      this._scopeId = 'data-s-' + (Component.scopeIndex++).toString(36);
      this.template.getRootElt().setAttribute(this._scopeId, '');
    }
    return this._scopeId;
  }

  /**
   *
   * @param {string} url
   */
  load(url) {
    return vueLoader.httpRequest(url).then(responseText => {
      this.baseURI = url.substr(0, url.lastIndexOf('/') + 1);
      const doc = document.implementation.createHTMLDocument('');

      doc.body.innerHTML = responseText;

      for (const elem of doc.body.children) {
        switch (elem.nodeName) {
          case 'TEMPLATE':
            this.template = new TemplateContext(this, elem);
            break;
          case 'SCRIPT':
            this.script = new ScriptContext(this, elem);
            break;
          case 'STYLE':
            this.styles.push(new StyleContext(this, elem));
            break;
        }
      }

      return this;
    });
  }

  _normalizeSection(elemContext) {
    let p;

    if (elemContext === null || !elemContext.elem.hasAttribute('src')) {
      p = Promise.resolve(null);
    } else {
      p = vueLoader
        .httpRequest(elemContext.elem.getAttribute('src'))
        .then(function(content) {
          elemContext.elem.removeAttribute('src');
          return content;
        });
    }

    return p
      .then(
        function(content) {
          if (elemContext !== null && elemContext.elem.hasAttribute('lang')) {
            const lang = elemContext.elem.getAttribute('lang');
            elemContext.elem.removeAttribute('lang');
            return vueLoader.langProcessor[lang.toLowerCase()].call(
              this,
              content === null ? elemContext.content : content
            );
          }
          return content;
        }.bind(this)
      )
      .then(function(content) {
        if (content !== null) {
          elemContext.content = content;
        }
      });
  }

  /**
   * @returns {Promise<Component>}
   */
  normalize() {
    return Promise.all(
      Array.prototype.concat(
        this._normalizeSection(this.template),
        this._normalizeSection(this.script),
        this.styles.map(this._normalizeSection)
      )
    ).then(
      function() {
        return this;
      }.bind(this)
    );
  }

  /**
   * @returns {Promise<Component>}
   */
  compile() {
    return Promise.all(
      Array.prototype.concat(
        this.template && this.template.compile(),
        this.script && this.script.compile(),
        this.styles.map(function(style) {
          return style.compile();
        })
      )
    ).then(
      function() {
        return this;
      }.bind(this)
    );
  }
}
Component.scopeIndex = 0;

function identity(value) {
  return value;
}

function parseComponentURL(url) {
  const comp = url.match(/(.*?)([^/]+?)\/?(\.vue)?(\?.*|#.*|$)/);
  return {
    name: comp[2],
    url:
      comp[1] +
      comp[2] +
      (comp[3] === undefined ? '/index.vue' : comp[3]) +
      comp[4]
  };
}

/**
 *
 * @param {string} url
 * @param {string=} name
 */
vueLoader.load = function(url, name) {
  return function() {
    return new Component(name)
      .load(url)
      .then(component => component.normalize())
      .then(component => component.compile())
      .then(component => {
        const exports =
          component.script !== null ? component.script.module.exports : {};

        if (component.template !== null)
          exports.template = component.template.content;

        if (exports.name === undefined)
          if (component.name !== undefined) exports.name = component.name;

        exports._baseURI = component.baseURI;

        return exports;
      });
  };
};

vueLoader.register = function(Vue, url) {
  const comp = parseComponentURL(url);
  Vue.component(comp.name, vueLoader.load(comp.url));
};

vueLoader.install = function(Vue) {
  Vue.mixin({
    beforeCreate: function() {
      const urlPrefix = 'url:';
      const components = this.$options.components;

      for (const componentName in components) {
        if (
          typeof components[componentName] === 'string' &&
          components[componentName].startsWith(urlPrefix)
        ) {
          const comp = parseComponentURL(
            components[componentName].substr(urlPrefix.length)
          );

          const componentURL =
            '_baseURI' in this.$options
              ? resolveURL(this.$options._baseURI, comp.url)
              : comp.url;

          if (isNaN(componentName))
            components[componentName] = vueLoader.load(
              componentURL,
              componentName
            );
          else
            components[componentName] = Vue.component(
              comp.name,
              vueLoader.load(componentURL, comp.name)
            );
        }
      }
    }
  });
};

vueLoader.require = function(moduleName) {
  return window[moduleName];
};

vueLoader.httpRequest = function(url) {
  return fetch(url).then(response => {
    if (!response.ok) {
      throw Error(`${response.status} (${response.statusText})`);
    }
    return response.text();
  });
};

vueLoader.langProcessor = {
  html: identity,
  js: identity,
  css: identity
};

vueLoader.scriptExportsHandler = identity;

function vueLoader(url, name) {
  const comp = parseComponentURL(url);
  return vueLoader.load(comp.url, name);
}

export default vueLoader;

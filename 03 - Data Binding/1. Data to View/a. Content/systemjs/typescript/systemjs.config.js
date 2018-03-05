/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* global SystemJS */

SystemJS.config({
  meta: {
    '*.js': {
      babelOptions: {
        es2015: true
      }
    }
  },
  paths: {
    // paths serve as alias
    'npm:': '../../../../../node_modules/'
  },
  map: {
    'ts': 'npm:plugin-typescript',
    'typescript': 'npm:typescript',
    'vue': 'npm:vue/dist/vue.js'
  },
  packages: {
    '.': {
      defaultExtension: 'ts'
    },
    'ts': {
      'main': 'lib/plugin.js'
    },
    'typescript': {
      'main': 'lib/typescript.js',
      'meta': {
        'lib/typescript.js': {
          'exports': 'ts'
        }
      }
    }
  },
  transpiler: 'ts',
  typescriptOptions: {
    tsconfig: true
  }
});

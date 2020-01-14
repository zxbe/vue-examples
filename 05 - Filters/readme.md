# Filters

## Filter without Parameter

Template:

```html
<!-- HELLO UPPERCASE -->
{{ 'Hello Uppercase' | uppercase }}
```

Script:

```js
new Vue({
  ...
  filters: {
    uppercase: function(value) {
      if (!value) {
        return '';
      }

      return value.toUpperCase();
    }
  }
});
```

## Filter with Parameter

Template:

```html
<!-- 14/01/2020 -->
{{ new Date() | date() }}

<!-- 14-1-2020 -->
{{ new Date() | date('nl-NL') }}

<!-- 14/01/2020 -->
{{ new Date() | date('us-EN') }}
```

Script:

```js
new Vue({
  ...
  filters: {
    date: function(value, locales) {
      if (!value) {
        return '';
      }

      return value.toLocaleDateString(locales);
    }
  }
});
```

## Chaining

Filters can be chained.

Template:

```html
<!-- Gniniahc Olleh -->
{{ 'hello CHAINING' | reverse | titlecase}}
```

## Other frameworks

- **Angular** calls them _Pipes_
- **React** uses plain JavaScript.

## Licence

European Union Public Licence version 1.2

## Copyright

Copyright © 2019-2020 Rick Beerendonk

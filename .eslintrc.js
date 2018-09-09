/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

module.exports = {
  root: true,
  env: {
    browser: true
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 7,
    sourceType: 'module'
  },
  plugins: ['vue'],
  extends: ['plugin:vue/recommended'],
  rules: {
    'no-debugger': 'warn',
    semi: [2, 'always']
  }
};

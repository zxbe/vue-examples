# Component Lifecycle

## Warning

All lifecycle hooks automatically have their this context bound to the instance, so that you can access data, computed properties, and methods. This means you should not use an arrow function to define a lifecycle method (e.g. created: () => this.fetchTodos()). The reason is arrow functions bind the parent context, so this will not be the Vue instance as you expect and this.fetchTodos will be undefined.

## Licence

European Union Public Licence version 1.2

## Copyright

Copyright © 2018-2020 Rick Beerendonk

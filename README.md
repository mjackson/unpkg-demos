This repository contains demos of using [unpkg.com](https://unpkg.com) to load and run various libraries in different ways. Each demo contains a README that explains a little bit more about how to use it and why it's interesting.

The following demos are currently available:

- [global-react](global-react) - Loads React as a global with JSX support
- [webpack-react](webpack-react) - Uses webpack to automatically detect and load React as a global, with JSX compilation at build time
- [systemjs-react](systemjs-react) - Uses SystemJS to load React as modules, with JSX support
- [systemjs-angular](systemjs-angular) - Uses SystemJS to load Angular as modules, with TypeScript support
- [module-d3](module-d3) - Uses `<script type=module>` to load D3 and all of its dependencies from the CDN. Only works in Chrome 61+ and other browsers that have support for `<script type=module>`

If you're using a technique you don't see listed here, please contribute! There are lots of different ways to use unpkg, and we're just scratching the surface.

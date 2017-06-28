This repository contains demos of using [unpkg.com](https://unpkg.com) to load and run various libraries in different ways. Each demo contains a README that explains a little bit more about how to use it and why it's interesting.

The following demos are currently available:

- [basic-react](basic-react) - Loads React as a global with JSX support
- [systemjs-react-bundle](systemjs-react-bundle) - Uses SystemJS to load React as a global, with JSX support
- [systemjs-react](systemjs-react) - Uses SystemJS to load React as modules, with JSX support
- [systemjs-angular](systemjs-angular) - Uses SystemJS to load Angular as modules, with TypeScript support
- [getlibs-react](getlibs-react) - Uses [getlibs](https://github.com/activewidgets/getlibs) as a convenience layer to easily load React as a global, with support for JSX
- [webpack-react](webpack-react) - Uses webpack to automatically detect and load React as a global, with JSX compilation at build time

If you're using a technique you don't see listed here, please contribute! There are lots of different ways to use unpkg, and we're just scratching the surface.

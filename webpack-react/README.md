This demo uses [webpack](https://webpack.github.io/) with the [modules-cdn-webpack-plugin](https://www.npmjs.com/package/modules-cdn-webpack-plugin) to load dependencies from unpkg.

The `modules-cdn-webpack-plugin` automatically detects dependencies and pulls their version numbers from the ones you've installed locally in `node_modules`. Then, it inserts the appropriate `<script>` tags in the output.

To run it:

```
$ npm install
$ npm start
```

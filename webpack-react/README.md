This demo uses [webpack](https://webpack.github.io/) with the [dynamic-cdn-webpack-plugin](https://www.npmjs.com/package/dynamic-cdn-webpack-plugin) to load dependencies from unpkg.

The `dynamic-cdn-webpack-plugin` automatically detects dependencies and pulls their version numbers from the ones you've installed locally in `node_modules`. Then, it inserts the appropriate `<script>` tags in the output.

To run it:

```
$ npm install
$ npm start
```

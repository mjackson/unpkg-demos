System.config({
  transpiler: 'babel',
  paths: {
    'npm:': 'https://unpkg.com/'
  },
  map: {
    'babel': 'npm:babel-core@5.8.38/browser.min.js',
    'react': 'npm:react@15.5.4/dist/react.min.js',
    'react-dom': 'npm:react-dom@15.5.4/dist/react-dom.min.js'
  }
})

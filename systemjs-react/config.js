System.config({
  transpiler: 'babel',
  meta: {
    '*': {
      globals: {
        process: 'process.js'
      }
    }
  },
  paths: {
    'npm:': 'https://unpkg.com/'
  },
  map: {
    'babel': 'npm:babel-core@5.8.38',
    'react': 'npm:react@15.5.4',
    'react-dom': 'npm:react-dom@15.5.4',
    'fbjs': 'npm:fbjs@0.8.12',
    'prop-types': 'npm:prop-types@15.5.4',
    'object-assign': 'npm:object-assign@4.1.1'
  },
  packages: {
    'babel': {
      main: 'browser.min.js'
    },
    'react': {
      main: 'react.js'
    },
    'react-dom': {
      main: 'index.js'
    }
  }
})

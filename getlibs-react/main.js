import React from 'react'
import ReactDOM from 'react-dom'

class MyApp extends React.Component {
  render() {
    return <h1>Hello from React {React.version}</h1>
  }
}

ReactDOM.render(
  <MyApp/>,
  document.getElementById('app')
)

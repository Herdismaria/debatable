import React, { Component } from 'react';
import './App.css';
import getRoutes from './config/routes';
import restricted from './helpers/restricted';

function checkAuth(component) {
  return restricted(component);
}

class App extends Component {
  render() {
    return <div className="App">{getRoutes(checkAuth)}</div>;
  }
}

export default App;

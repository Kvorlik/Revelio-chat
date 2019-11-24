import React, { Component } from 'react';
import Router from './router';
import {AppBackground} from './components';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <AppBackground/>
        <Router/>
      </div>
    );
  }
}

export default App;

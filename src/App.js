import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import NavApp from './Router/NavPannel'; 

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavApp/>
      </div>
    );
  }
}

export default App;

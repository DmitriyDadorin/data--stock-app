import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import NavPannel from './Router/NavPannel'; 

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavPannel/>
      </div>
    );
  }
}

export default App;

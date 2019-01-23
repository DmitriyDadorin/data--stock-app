import React, { Component } from 'react';
import './App.css';
import ButtonAdd from './Components/button_add/index';
import ButtonWriteOff from './Components/button_write_off/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ButtonAdd />
        <ButtonWriteOff />
      </div>
    );
  }
}

export default App;

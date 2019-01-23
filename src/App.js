import React, { Component } from 'react';
import './App.css';
import ButtonAdd from './Components/button_add';
import ButtonWriteOff from './Components/button_write_off';
import InputSearch from './Components/input_search';
import ButtonInDb from './Components/button_in_db';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="ButtonSection">
          <ButtonInDb />
          <ButtonAdd />
          <ButtonWriteOff />
          <InputSearch />
        </div>
      </div>
    );
  }
}

export default App;

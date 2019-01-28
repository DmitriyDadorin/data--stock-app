import React, { Component } from 'react';
import './App.css';
import ButtonAdd from './Components/button_add';
import ButtonWriteOff from './Components/button_write_off';
import axios from 'axios';
import firebase from './firebase.js'; 

class App extends Component {

  state = {
    goods: []
  }

  componentDidMount() {
    axios.get(`https://data-stock-app.firebaseio.com/1`)
      .then(res => {
        const goods = res.data;
        this.setState({ goods });
        console.log(this.state.goods)
      })
      
  }
 
  fun = () => {
    console.log('hi');
  }
  
  
  render() {
    return (
      <div className="App">
        <ButtonAdd 
        goods={this.fun}
        />
        <ButtonWriteOff />
      </div>
    );
  }
}

export default App;

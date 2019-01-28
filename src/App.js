import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import NavApp from './Router/NavPannel'; 

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
        <NavApp/>
      </div>
    );
  }
}

export default App;

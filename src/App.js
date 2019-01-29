import React, { Component } from 'react';
import './App.css';
import { database } from './firebase';
import { BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import ButtonAdd from './Components/button_add';
import ButtonWriteOff from './Components/button_write_off';
import InputSearch from './Components/input_search';
import ButtonInDb from './Components/button_in_db';
import AddToBasePannel from './Components/add_to_base_pannel';
import DataBasePannel from './Components/data_base_panel';
import RemoveDataBasePannel from './Components/remove_data_base_pannel';
import 'bootstrap/dist/css/bootstrap.css';



class App extends Component {

  state = {
    data: null
  }

  componentDidMount() {
    database.ref().on('value', (snapshot)=>{
      this.setState({data: snapshot.val()})
    });
  }

  render() {
    const Header = () => {
      return (
          <header className="ButtonSection">
            <Link to='/'><ButtonInDb /></Link>
            <Link to='/addtobasepannel'><ButtonAdd /></Link>
            <Link to='/removedatabasepannel'><ButtonWriteOff /></Link>
            <InputSearch />
          </header>
      )
  }
  
  const Main = () => {
      return (
          <main className="main">
              <Switch>
                  <Route exact path='/' component={DataBasePannel}/> 
                  <Route exact path='/addtobasepannel' component={AddToBasePannel}/>
                  <Route exact path='/removedatabasepannel' component={RemoveDataBasePannel}/>
              </Switch>
          </main>   
      )
  }
  
const NavPannel = () => {
    return(
        <div>
            <Header />
            <Main />
        </div>
    )
}

    return (
      <div className="App">
        <BrowserRouter>
                <NavPannel />
                
            </BrowserRouter>
      </div>
    );
  }
}

export default App;

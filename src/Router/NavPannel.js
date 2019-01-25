import React from 'react';
import { HashRouter, Switch, Route, Link} from 'react-router-dom';
import ButtonAdd from '../Components/button_add';
import ButtonWriteOff from '../Components/button_write_off';
import InputSearch from '../Components/input_search';
import ButtonInDb from '../Components/button_in_db';

const Header = () => {
    return (
        <div className="ButtonSection">
          <Link to='/databasepannel'><ButtonInDb /></Link>
          <Link to='/addtobasepannel'><ButtonAdd /></Link>
          <Link to='/removedatabasepannel'><ButtonWriteOff /></Link>
          <InputSearch />
        </div>
    )
}

const Main = () => {
    return (
        <div className="App">
            <Switch>
                <Route exact path='/databasepannel' component={DataBasePannel}/> 
                <Route exact path='/addtobasepannel' component={AddToBasePannel}/>
                <Route exact path='/removedatabasepannel' component={RemoveDataBasePannel}/>
            </Switch>
        </div>
    )
}

const DataBasePannel = () => {
    return(
        <div>
            <h1>Page1</h1>
        </div>
    )
}

const AddToBasePannel = () => {
    return(
        <div>
            <h1>Page2</h1>
        </div>
    )
}

const RemoveDataBasePannel = () => {
    return(
        <div>
            <h1>Page3</h1>
        </div>
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

const NavApp = () => {
    return(
        <div>
            <HashRouter>
                <NavPannel />
            </HashRouter>
        </div>
    )
}

export default NavApp;
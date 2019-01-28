import React from 'react';
import { BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import ButtonAdd from '../Components/button_add';
import ButtonWriteOff from '../Components/button_write_off';
import InputSearch from '../Components/input_search';
import ButtonInDb from '../Components/button_in_db';
import AddToBasePannel from '../Components/add_to_database';
import DataBasePannel from '../Components/data_base_panel';
import RemoveDataBasePannel from '../Components/remove_from_database';

const Header = () => {
    return (
        <header className="ButtonSection">
          <Link to='/databasepannel'><ButtonInDb /></Link>
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
                <Route exact path='/databasepannel' component={DataBasePannel}/> 
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

const NavApp = () => {
    return(
        <div>
            <BrowserRouter>
                <NavPannel />
            </BrowserRouter>
        </div>
    )
}

export default NavApp;
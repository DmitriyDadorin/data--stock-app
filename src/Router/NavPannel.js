import React from 'react';
import { BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import ButtonAdd from '../Components/button_add';
import ButtonWriteOff from '../Components/button_write_off';
import InputSearch from '../Components/input_search';
import ButtonInDb from '../Components/button_in_db';

import 'bootstrap/dist/css/bootstrap.css';
import './NavPanel.css';


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

const DataBasePannel = () => {
    return(
        <div>
            <h1>Page1</h1>
        </div>
    )
}

const AddToBasePannel = () => {
    return(
        <div className='add-base-panel'>
            <h3 className='add-base-title'>Добавить товар</h3>
            <div className='add-base-input-group'>
                <label className='add-base-label' htmlFor='add-base-name'>Нименование товара:</label>
                <input className='add-base-input' id='add-base-name' type='text' placeholder='Нименование товара'/>
            </div>
            <div className='add-base-input-group'>
                <label className='add-base-label' htmlFor='add-base-manufacturer'>Производитель:</label>
                <input className='add-base-input' id='add-base-manufacturer' type='text' placeholder='Производитель товара'/>
            </div>
            <div className='add-base-input-group'>
                <label className='add-base-label' htmlFor='add-base-type'>Тип товара:</label>
                <input className='add-base-input' id='add-base-type' type='text' placeholder='Тип товара'/>
            </div>
            <div className='add-base-input-group'>
                <label className='add-base-label' htmlFor='add-base-price'>Стоимость товара:</label>
                <input className='add-base-input' id='add-base-price' type='text' placeholder='Стоимость товара'/>
            </div>
            <div className='add-base-input-group'>
                <label className='add-base-label' htmlFor='add-base-count'>Количество товара:</label>
                <input className='add-base-input' id='add-base-count' type='text' placeholder='Количество товара'/>
            </div>
            <button type="button" class="btn btn-success">Добавить</button>
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
            <BrowserRouter>
                <NavPannel />
            </BrowserRouter>
        </div>
    )
}

export default NavApp;
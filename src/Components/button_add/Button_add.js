import React from 'react';
import './Button_add.css';
import 'bootstrap/dist/css/bootstrap.css';

const ButtonAdd = ({fun}) => {
    return(
        <div>
            <button className='btn btn-outline-success'>Добавить товар</button>
        </div>
    )
}

export default ButtonAdd;
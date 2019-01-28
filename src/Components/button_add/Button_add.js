import React from 'react';

const ButtonAdd = ({fun}) => {
    return(
        <div>
        <button onClick={fun}>Добавить товар</button>
        </div>
    )
}

export default ButtonAdd;
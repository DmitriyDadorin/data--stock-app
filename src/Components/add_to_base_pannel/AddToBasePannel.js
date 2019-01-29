import React from 'react';

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
            <button type="button" className="btn btn-success">Добавить</button>
        </div>
    )
}

export default AddToBasePannel;
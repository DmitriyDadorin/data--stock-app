import React from 'react';
import './Input_search.css';
import 'bootstrap/dist/css/bootstrap.css';

const InputSearch = () => {
    return(
        <div>
            <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Поиск" aria-label="Search"/>
            </form>
        </div>
    )
}

export default InputSearch;
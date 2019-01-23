import React from 'react';

import ButtonAdd from '../../Components/button_add';
import ButtonWriteOff from '../../Components/button_write_off';
import InputSearch from '../../Components/input_search';
import ButtonInDb from '../../Components/button_in_db';

const Header = () => {
    return (
        <div className="ButtonSection">
          <ButtonInDb />
          <ButtonAdd />
          <ButtonWriteOff />
          <InputSearch />
        </div>
    )
}

export default Header;
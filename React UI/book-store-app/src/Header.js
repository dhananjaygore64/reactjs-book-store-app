import React from 'react';
import Button from "./Button"

const Header = ({headerName, onAdd, showAdd}) => {
    return (
        <header className='header'>
            <h1>{headerName}</h1>
            <Button text={showAdd ? "close" : "Add"} color={showAdd ? "red" : "green"} onClick={onAdd}/>
        </header>
    );
}

export default Header;

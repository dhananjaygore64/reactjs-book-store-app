import React from 'react';

const Button = ({text, color, onClick, icon}) => {
    return (
        <div>
            <button onClick={onClick} style={{backgroundColor:color}} className='btn'>{icon}{text}</button>
        </div>
    );
}

export default Button;

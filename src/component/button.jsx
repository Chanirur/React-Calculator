import React from 'react';

function Button({ value, onClick, width = '100px', height = '100px'}) {

    const handleClick = () => {
        onClick(value)
    }

    return(
        <button
            className={'btn'}
            onClick={ handleClick }
            style={{width, height}}
        >
            {value}
        </button>
    );
}

export default Button;
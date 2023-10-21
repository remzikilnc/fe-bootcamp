import React from 'react';

const SecondaryButton = ({disabled, onClick, className, children}) => {
    return (
        <button disabled={disabled} className={`button button-secondary ${className}`} onClick={onClick}>
            {children}
        </button>
    );
};

export default SecondaryButton;
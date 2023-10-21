import React from 'react';

const PrimaryButton = ({disabled, onClick, className, children}) => {
    return (
        <button disabled={disabled} className={`button button-primary ${className}`} onClick={onClick}>
            {children}
        </button>
    );
};

export default PrimaryButton;
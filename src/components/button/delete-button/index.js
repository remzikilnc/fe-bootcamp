import React from 'react';

const DeleteButton = ({onClick}) => {
    return (
        <button onClick={onClick} className="text-xs bg-red-600 rounded px-2 py-1">Delete</button>
    );
};

export default DeleteButton;
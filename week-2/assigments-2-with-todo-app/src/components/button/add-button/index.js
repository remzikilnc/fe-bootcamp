import React from 'react';

const AddButton = ({onClick}) => {
    return (
        <button onClick={onClick} className="text-xs bg-blue-600 rounded px-2 py-1 font-semibold">Add Todo</button>
    );
};

export default AddButton;
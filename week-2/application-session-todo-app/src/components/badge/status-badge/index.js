import React from 'react';

const StatusBadge = ({status, className}) => {
    return (
    <span className={`inline-flex items-center rounded px-2.5 py-0.5 text-xs font-semibold ${status ? 'text-green-800 ring-green-400 ring-1 ring-inset bg-green-300' : 'text-gray-600 ring-gray-400 ring-1 ring-inset bg-gray-300'} ${className}`}>
        {status ? 'Complete' : 'In progress'}
    </span>
    );
};

export default StatusBadge;
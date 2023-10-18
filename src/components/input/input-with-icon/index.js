import React from 'react';
import {RiTodoFill} from "@/icons/Ri/RiTodoFill";

const InputWithIcon = ({value, onChange}) => {
    return (
        <div className="relative rounded shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <RiTodoFill/>
            </div>
            <input
                type="text"
                id="todo"
                value={value}
                onChange={onChange}
                className="block w-full rounded pl-10 py-1 bg-gray-800 sm:text-sm focus:ring-gray-100 focus:outline-none focus:border-gray-200"
                placeholder="A todo.."
            />
        </div>
    );
};

export default InputWithIcon;
import React from 'react';
import {NavLink} from "react-router-dom";

const ComponentList = ({href,img, title, desc}) => {
    return (
        <>
            <NavLink to={href} className="w-1/3 h-80 rounded-lg cursor-pointer p-4 m-2 relative overflow-hidden flex justify-center items-center hover:border-4 hover:border-red-600/40 shadow-red-600/10 shadow-xl group transition-transform  duration-300 hover:-translate-y-3">
                <img src={img} className="object-none -z-10 blur-xl absolute w-full group-hover:blur-md"/>
                <div className="flex justify-center items-center flex-col relative overflow-hidden p-4 backdrop-blur-xl shadow-white/10 shadow-xl bg-red-600/30 rounded-md">
                    <h2 className="text-sm md:text-xl font-bold">{title}</h2>
                    <p className="text-xs md:text-base text-gray-400">{desc}</p>
                </div>
            </NavLink>
        </>
    );
};

export default ComponentList;
import React from 'react';
import {NavLink} from "react-router-dom";

const ComponentList = ({href, img, number = null, title, desc}) => {
    return (
        <>
            <NavLink to={href} className="h-80 rounded-lg cursor-pointer p-4 m-2 relative overflow-hidden flex justify-center items-center hover:border-4 hover:border-red-600/40 shadow-red-600/10 shadow-xl group transition-transform  duration-300 hover:scale-105">
                <img src={img} className="object-none -z-10 blur-xl absolute w-full group-hover:blur-none duration-500"/>
                <div className="flex justify-center items-center flex-col relative overflow-hidden p-4 backdrop-blur-xl shadow-white/10 bg-red-600/30 rounded-md group-hover:translate-y-full duration-500">
                    <h2 className="text-sm md:text-xl font-bold ">{number && `#${number} `}{title}</h2>
                    <p className="text-xs md:text-base text-white/60">{desc}</p>
                </div>
            </NavLink>
        </>
    );
};

export default ComponentList;
import React from 'react';
import Image from 'next/image'
import AddButton from "@/components/button/add-button";
import Input from "@/components/input/input-with-icon";

const TodoNavbar = ({todo, setTodo, handleClick}) => {
    return (
        <header className="w-full px-4 py-4 sm:px-6">
            <div className="absolute top-[-20px] left-1">
                <Image
                    src="/next.svg"
                    alt="Vercel Logo"
                    className="dark:invert"
                    width={68}
                    height={24}
                    priority
                />
            </div>
            <div className="flex justify-between my-4">
                <Input value={todo} onChange={(e) => setTodo(e.target.value)}/>
                <AddButton onClick={handleClick}/>
            </div>
        </header>
    );
};

export default TodoNavbar;
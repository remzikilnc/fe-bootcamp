import React from 'react';
import Image from 'next/image'
import AddButton from "@/components/button/add-button";

const TodoNavbar = () => {
    return (
        <header className="w-full px-4 py-4 sm:px-6">
            <div className="flex justify-between">
                <div className="items-center justify-center flex">
                    <Image
                        src="/next.svg"
                        alt="Vercel Logo"
                        className="dark:invert"
                        width={68}
                        height={24}
                        priority
                    />
                </div>
                <div>
                    <AddButton/>
                </div>
            </div>
        </header>
    );
};

export default TodoNavbar;
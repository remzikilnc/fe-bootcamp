import React from 'react';
import {NavLink} from "react-router-dom";
import ComponentList from "../component-list/index.jsx";

const ChooseComponent = () => {
    return (
        <section className="flex flex-col justify-center items-center w-full h-[100vh]">
            <div className="mb-8">
                <h1 className="text-3xl font-bold">Choose a component</h1>
            </div>
            {/* Week 3 */}
            <div className="flex flex-nowrap w-full h-auto px-2 max-w-7xl">
                <ComponentList img={'../../../component-img/counter.png'} title={'Counter'} desc={'Counter component'} href={'/counter'}/>
                <ComponentList img={'../../../component-img/coin-flip.png'} title={'Coin Flip'} desc={'Coin Flip component'} href={'/coin-flip'}/>
                <ComponentList img={'../../../component-img/use-state-text-component.png'} title={'Text'} desc={'Text component'} href={'/use-state-text'}/>
            </div>
            {/* Week 4 */}
            <div className="flex flex-nowrap w-full h-auto px-2 max-w-7xl">
                <ComponentList img={'../../../component-img/counter.png'} title={'Counter'} desc={'Counter component'} href={'/counter'}/>
                <ComponentList img={'../../../component-img/coin-flip.png'} title={'Coin Flip'} desc={'Coin Flip component'} href={'/coin-flip'}/>
                <ComponentList img={'../../../component-img/use-state-text-component.png'} title={'Text'} desc={'Text component'} href={'/use-state-text'}/>
            </div>
        </section>
    );
};

export default ChooseComponent;
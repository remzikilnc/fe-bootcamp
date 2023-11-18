import ComponentList from "../component-list/index.jsx";
import {WeekContainer} from "../week-container/index.jsx";

const weeks = [
    {
        weekNumber: 3,
        components: [
            {
                img: '../../../component-img/counter.png',
                number: "1",
                title: 'Counter',
                desc: 'Counter component',
                href: '/counter',
            },
            {
                img: '../../../component-img/use-state-text-component.png',
                number: "2",
                title: 'Text',
                desc: 'Text component',
                href: '/use-state-text',
            },
            {
                img: '../../../component-img/coin-flip.png',
                number: "3",
                title: 'Coin Flip',
                desc: 'Coin Flip component',
                href: '/coin-flip',
            },
            {
                img: '../../../component-img/coin-flip.png',
                number: "4",
                title: 'Burger Application',
                desc: 'Burger Application',
                href: '/burger-application',
            },
        ],
    },
];

const ComponentSelector = () => {
    return (
        <section className="flex flex-col justify-center items-center w-full my-12">
            <div className="mb-8">
                <h1 className="text-3xl font-bold">Choose a component</h1>
            </div>
           <div className="w-full h-full flex flex-col justify-center items-center divide-y divide-white/5">
               {weeks.map((week) => (
                   <WeekContainer key={week.weekNumber} weekNumber={week.weekNumber}>
                       <div className="grid grid-cols-3 flex-nowrap w-full h-auto px-2 max-w-7xl">
                           {week.components.map((component, index) => (
                               <ComponentList
                                   key={index}
                                   img={component.img}
                                   number={component.number}
                                   title={component.title}
                                   desc={component.desc}
                                   href={component.href}
                               />
                           ))}
                       </div>
                   </WeekContainer>
               ))}
           </div>
        </section>);
};

export default ComponentSelector;
import React from 'react';
import { Tab } from '@headlessui/react'

function RenderTabContent({ item }) {
    switch (true) {
        case 'number' in item:
            return <div>{item.number}</div>;

        case 'string' in item:
            return <div>{item.string}</div>;

        case 'object' in item:
            return (
                <div>
                    Name: {item.object.name}, Age: {item.object.age}
                </div>
            );

        case 'component' in item:
            return <item.component />;
        default:
            return null;
    }
}

const Tabs = ({ tabs }) => {
    return (
        <div className="w-full max-w-md px-2 py-16 sm:px-0">
            <Tab.Group>
                <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
                    {tabs.map((tab) => (
                        <Tab
                            key={tab.id}
                            className={({ selected }) =>
                                'ring-white ring-opacity-60 ring-offset-2 ring-offset-yellow-400 focus:outline-none focus:ring-2 w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-yellow-700' +
                                (selected ? ' bg-white shadow' : ' text-yellow-100 hover:bg-white/[0.12] hover:text-white')
                            }
                        >
                            {tab.name}
                        </Tab>
                    ))}
                </Tab.List>
                <Tab.Panels className="mt-2">
                    {tabs.map((tab) => (
                        <Tab.Panel
                            key={tab.id}
                            className={'rounded-xl bg-white p-3 ring-white ring-opacity-60 ring-offset-2 ring-offset-yellow-400 focus:outline-none focus:ring-2'}
                        >
                            <RenderTabContent item={tab} />
                        </Tab.Panel>
                    ))}
                </Tab.Panels>
            </Tab.Group>
        </div>
    )
}

export default Tabs;

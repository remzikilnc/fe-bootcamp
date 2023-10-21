import React from 'react';
import Tabs from "./components/tabs/index";
import ExampleComponent from "./components/example-component/index.jsx";

const App = () => {
    const navigations = [
        {
            id: 1,
            name: 'Sending Number',
            number: 15
        },
        {
            id: 2,
            name: 'Sending String',
            string: 'test'
        },
        {
            id: 3,
            name: 'Sending Object',
            object: {
                name: 'John Doe',
                age: 20
            }
        },
        {
            id: 4,
            name: 'Sending Component',
            component: ExampleComponent
        }
    ];

  return (
      <main className="h-[100vh] flex justify-center items-center bg-yellow-200">
        <Tabs tabs={navigations}></Tabs>
      </main>
  );
};

export default App;

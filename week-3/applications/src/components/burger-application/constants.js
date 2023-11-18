import BurgerLettuce from "../burger-application/burger-lettuce";
import Index from "../burger-application/burger-cheese";
import BurgerMeat from "./burger-meat/index.jsx";
import BurgerTomato from "./burger-tomato/index.jsx";

const ingredientsToAdd = [
    {
        id: 1,
        name: 'Marul',
        color: 'green',
        price: 1,
        count: 0,
        component: BurgerLettuce, // Referencing the BurgerLettuce component
    },
    {
        id: 2,
        name: 'Peynir',
        color: '#ffa600',
        price: 4,
        count: 0,
        component: Index, // Referencing the Index component
    },
    {
        id: 3,
        name: 'Köfte',
        color: 'brown',
        price: 6,
        count: 0,
        component: BurgerMeat, // Referencing the BurgerMeat component
    },
    {
        id: 4,
        name: 'Domates',
        color: 'red',
        price: 2,
        count: 0,
        component: BurgerTomato, // Referencing the BurgerTomato component
    },
];

export default ingredientsToAdd;

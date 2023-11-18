import React, {useState} from 'react';
import BurgerBunTop from './burger-bun/top';
import BurgerBunBottom from './burger-bun/bottom';
import burgerStyles from "./burger.module.css";
import ingredientsToAdd from "./constants.js";

const BurgerApplication = () => {
    const [selectedIngredients, setSelectedIngredients] = useState([]);

    const addIngredient = (ingredientToAdd) => {
        setSelectedIngredients(prevSelectedIngredients => {
            const existingIngredient = prevSelectedIngredients.find(ingredient => ingredient.id === ingredientToAdd.id);
            if (existingIngredient) {
                return prevSelectedIngredients.map(ingredient => ingredient.id === ingredientToAdd.id ? {
                    ...ingredient, count: ingredient.count + 1
                } : ingredient);
            } else {
                return [...prevSelectedIngredients, {...ingredientToAdd, count: 1}];
            }
        });
    };
    console.log(selectedIngredients)
    const removeIngredient = (ingredientToRemove) => {
        setSelectedIngredients(prevSelectedIngredients => prevSelectedIngredients.reduce((acc, ingredient) => {
            if (ingredient.id === ingredientToRemove.id) {
                const newCount = ingredient.count - 1;
                return newCount > 0 ? [...acc, {...ingredient, count: newCount}] : acc;
            } else {
                return [...acc, ingredient];
            }
        }, []));
    };

    return (
        <section className="section">
            <div className="card !w-full !max-w-7xl">
                <div className="relative w-full justify-center flex my-4">
                <div className="section-title block max-w-xl bg-[#1c1a27] z-10 px-4">Burger Builder</div>
                <div className="w-full bg-white/10 h-[1px] absolute top-1/3 "></div>
            </div>
            <div className={burgerStyles.burger}>
                <BurgerBunTop/>
                {selectedIngredients.map((ingredient) => (<React.Fragment key={ingredient.id}>
                    {[...Array(ingredient.count)].map((_, index) => {
                        const IngredientComponent = ingredientsToAdd.find(i => i.name === ingredient.name)?.component;
                        return IngredientComponent ? (
                            <button key={index} onClick={() => removeIngredient(ingredient)}>
                                <IngredientComponent/>
                            </button>) : null;
                    })}
                </React.Fragment>))}
                <BurgerBunBottom/>
            </div>
            <div className="relative w-full justify-center flex my-4">
                <div className="section-title block max-w-xl bg-[#1c1a27] z-10 px-4">Add Ingredients</div>
                <div className="w-full bg-white/10 h-[1px] absolute top-1/3 "></div>
            </div>
            <div className="flex gap-x-3">
                {ingredientsToAdd.map((ingredient) => (
                    <button key={ingredient.id} onClick={() => addIngredient(ingredient)}
                            style={{background: ingredient.color}} className="p-2 rounded">
                        {ingredient.name}
                    </button>))}
            </div>
            <div className="bg-gray-950 p-4 mt-8 rounded">
                <span className="text-md text-white">Total Price: </span>
                <span className="text-yellow-400">${selectedIngredients.reduce((total, ingredient) => total + (ingredient.price * ingredient.count), 0)}</span>
            </div>
        </div>
    </section>
    );
};

export default BurgerApplication;

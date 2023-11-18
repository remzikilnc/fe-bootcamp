import React, { useState } from 'react';
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
                return prevSelectedIngredients.map(ingredient =>
                    ingredient.id === ingredientToAdd.id ? { ...ingredient, count: ingredient.count + 1 } : ingredient
                );
            } else {
                return [...prevSelectedIngredients, { ...ingredientToAdd, count: 1 }];
            }
        });
    };
console.log(selectedIngredients)
    const removeIngredient = (ingredientToRemove) => {
        setSelectedIngredients(prevSelectedIngredients =>
            prevSelectedIngredients.reduce((acc, ingredient) => {
                if (ingredient.id === ingredientToRemove.id) {
                    const newCount = ingredient.count - 1;
                    return newCount > 0 ? [...acc, { ...ingredient, count: newCount }] : acc;
                } else {
                    return [...acc, ingredient];
                }
            }, [])
        );
    };

    return (
        <div>
            <h1>Burger Builder</h1>
            <div className={burgerStyles.burger}>
                <BurgerBunTop />
                {selectedIngredients.map((ingredient) => (
                    <React.Fragment key={ingredient.id}>
                        {[...Array(ingredient.count)].map((_, index) => {
                            const IngredientComponent = ingredientsToAdd.find(i => i.name === ingredient.name)?.component;
                            return IngredientComponent ? <IngredientComponent key={index} /> : null;
                        })}
                    </React.Fragment>
                ))}
                <BurgerBunBottom />
            </div>
            <h2>Add Ingredients</h2>
            {ingredientsToAdd.map((ingredient) => (
                <button key={ingredient.id} onClick={() => addIngredient(ingredient)}>
                    Add {ingredient.name}
                </button>
            ))}
            <div>
                Total Price: ${selectedIngredients.reduce((total, ingredient) => total + (ingredient.price * ingredient.count), 0)}
            </div>
        </div>
    );
};

export default BurgerApplication;

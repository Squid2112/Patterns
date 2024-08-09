// js/main.js
import { BurgerMealBuilder } from './BurgerMealBuilder.js';
import { ChickenMealBuilder } from './ChickenMealBuilder.js';
import { MealDirector } from './MealDirector.js';

const output = document.getElementById('output');

const displayMeal = (meal) => {
    const p = document.createElement('p');
    p.textContent = meal.describe();
    output.appendChild(p);
};

const burgerMealBuilder = new BurgerMealBuilder();
const chickenMealBuilder = new ChickenMealBuilder();

const director1 = new MealDirector(burgerMealBuilder);
const burgerMeal = director1.constructMeal();
displayMeal(burgerMeal);  // Output: Meal [Main Item: Burger, Side Item: Fries, Drink: Coke, Toy: Toy Car]

const director2 = new MealDirector(chickenMealBuilder);
const chickenMeal = director2.constructMeal();
displayMeal(chickenMeal);  // Output: Meal [Main Item: Chicken Sandwich, Side Item: Nuggets, Drink: Sprite, Toy: Toy Dinosaur]

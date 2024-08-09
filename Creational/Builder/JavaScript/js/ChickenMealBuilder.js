// js/ChickenMealBuilder.js
import { MealBuilder } from './MealBuilder.js';
import { Meal } from './Meal.js';

export class ChickenMealBuilder extends MealBuilder {
    constructor() {
        super();
        this.meal = new Meal();
    }

    buildMainItem() {
        this.meal.setMainItem('Chicken Sandwich');
    }

    buildSideItem() {
        this.meal.setSideItem('Nuggets');
    }

    buildDrink() {
        this.meal.setDrink('Sprite');
    }

    buildToy() {
        this.meal.setToy('Toy Dinosaur');
    }

    getMeal() {
        return this.meal;
    }
}

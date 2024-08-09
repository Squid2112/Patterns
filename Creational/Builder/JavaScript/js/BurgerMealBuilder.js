// js/BurgerMealBuilder.js
import { MealBuilder } from './MealBuilder.js';
import { Meal } from './Meal.js';

export class BurgerMealBuilder extends MealBuilder {
    constructor() {
        super();
        this.meal = new Meal();
    }

    buildMainItem() {
        this.meal.setMainItem('Burger');
    }

    buildSideItem() {
        this.meal.setSideItem('Fries');
    }

    buildDrink() {
        this.meal.setDrink('Coke');
    }

    buildToy() {
        this.meal.setToy('Toy Car');
    }

    getMeal() {
        return this.meal;
    }
}

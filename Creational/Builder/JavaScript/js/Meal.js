// js/Meal.js
export class Meal {
    constructor() {
        this.mainItem = '';
        this.sideItem = '';
        this.drink = '';
        this.toy = '';
    }

    setMainItem(mainItem) {
        this.mainItem = mainItem;
    }

    setSideItem(sideItem) {
        this.sideItem = sideItem;
    }

    setDrink(drink) {
        this.drink = drink;
    }

    setToy(toy) {
        this.toy = toy;
    }

    describe() {
        return `Meal [Main Item: ${this.mainItem}, Side Item: ${this.sideItem}, Drink: ${this.drink}, Toy: ${this.toy}]`;
    }
}

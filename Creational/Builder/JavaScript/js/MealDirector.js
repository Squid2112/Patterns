// js/MealDirector.js
export class MealDirector {
    constructor(builder) {
        this.builder = builder;
    }

    constructMeal() {
        this.builder.buildMainItem();
        this.builder.buildSideItem();
        this.builder.buildDrink();
        this.builder.buildToy();
        return this.builder.getMeal();
    }
}

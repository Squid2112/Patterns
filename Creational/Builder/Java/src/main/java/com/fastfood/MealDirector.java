package main.java.com.fastfood;

public class MealDirector {
    private MealBuilder mealBuilder;

    public MealDirector(MealBuilder mealBuilder) {
        this.mealBuilder = mealBuilder;
    }

    public Meal constructMeal() {
        mealBuilder.buildMainItem();
        mealBuilder.buildSideItem();
        mealBuilder.buildDrink();
        mealBuilder.buildToy();
        return mealBuilder.getMeal();
    }
}

package main.java.com.fastfood;

public class ChickenMealBuilder implements MealBuilder {
    private Meal meal;

    public ChickenMealBuilder() {
        this.meal = new Meal();
    }

    @Override
    public void buildMainItem() {
        meal.setMainItem("Chicken Sandwich");
    }

    @Override
    public void buildSideItem() {
        meal.setSideItem("Nuggets");
    }

    @Override
    public void buildDrink() {
        meal.setDrink("Sprite");
    }

    @Override
    public void buildToy() {
        meal.setToy("Toy Dinosaur");
    }

    @Override
    public Meal getMeal() {
        return this.meal;
    }
}

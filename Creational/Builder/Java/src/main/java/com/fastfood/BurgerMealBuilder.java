package main.java.com.fastfood;

public class BurgerMealBuilder implements MealBuilder {
    private Meal meal;

    public BurgerMealBuilder() {
        this.meal = new Meal();
    }

    @Override
    public void buildMainItem() {
        meal.setMainItem("Burger");
    }

    @Override
    public void buildSideItem() {
        meal.setSideItem("Fries");
    }

    @Override
    public void buildDrink() {
        meal.setDrink("Coke");
    }

    @Override
    public void buildToy() {
        meal.setToy("Toy Car");
    }

    @Override
    public Meal getMeal() {
        return this.meal;
    }
}

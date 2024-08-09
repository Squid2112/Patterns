package main.java.com.fastfood;

public interface MealBuilder {
    void buildMainItem();
    void buildSideItem();
    void buildDrink();
    void buildToy();
    Meal getMeal();
}

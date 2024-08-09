package main.java.com.fastfood;

public class Main {
    public static void main(String[] args) {
        MealBuilder burgerMealBuilder = new BurgerMealBuilder();
        MealDirector director1 = new MealDirector(burgerMealBuilder);
        Meal burgerMeal = director1.constructMeal();
        System.out.println(burgerMeal);

        MealBuilder chickenMealBuilder = new ChickenMealBuilder();
        MealDirector director2 = new MealDirector(chickenMealBuilder);
        Meal chickenMeal = director2.constructMeal();
        System.out.println(chickenMeal);
    }
}

using System;

namespace FastFoodBuilder {
    class Program {
        static void Main(string[] args)
        {
            IMealBuilder burgerMealBuilder = new BurgerMealBuilder();
            MealDirector director1 = new MealDirector(burgerMealBuilder);
            Meal burgerMeal = director1.ConstructMeal();
            Console.WriteLine(burgerMeal);

            IMealBuilder chickenMealBuilder = new ChickenMealBuilder();
            MealDirector director2 = new MealDirector(chickenMealBuilder);
            Meal chickenMeal = director2.ConstructMeal();
            Console.WriteLine(chickenMeal);
        }
    }
}

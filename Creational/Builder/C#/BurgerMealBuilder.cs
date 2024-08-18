namespace FastFoodBuilder {
    public class BurgerMealBuilder : IMealBuilder {
        private Meal _meal = new Meal();

        public void BuildMainItem() {
            _meal.MainItem = "Burger";
        }

        public void BuildSideItem() {
            _meal.SideItem = "Fries";
        }

        public void BuildDrink() {
            _meal.Drink = "Coke";
        }

        public void BuildToy() {
            _meal.Toy = "Toy Car";
        }

        public Meal GetMeal() {
            return _meal;
        }
    }
}

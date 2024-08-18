namespace FastFoodBuilder {
    public class ChickenMealBuilder : IMealBuilder {
        private Meal _meal = new Meal();

        public void BuildMainItem() {
            _meal.MainItem = "Chicken Sandwich";
        }

        public void BuildSideItem() {
            _meal.SideItem = "Nuggets";
        }

        public void BuildDrink() {
            _meal.Drink = "Sprite";
        }

        public void BuildToy() {
            _meal.Toy = "Toy Dinosaur";
        }

        public Meal GetMeal() {
            return _meal;
        }
    }
}

namespace FastFoodBuilder {
    public class MealDirector {
        private readonly IMealBuilder _mealBuilder;

        public MealDirector(IMealBuilder mealBuilder) {
            _mealBuilder = mealBuilder;
        }

        public Meal ConstructMeal() {
            _mealBuilder.BuildMainItem();
            _mealBuilder.BuildSideItem();
            _mealBuilder.BuildDrink();
            _mealBuilder.BuildToy();
            return _mealBuilder.GetMeal();
        }
    }
}

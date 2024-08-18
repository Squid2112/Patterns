namespace FastFoodBuilder {
    public interface IMealBuilder {
        void BuildMainItem();
        void BuildSideItem();
        void BuildDrink();
        void BuildToy();
        Meal GetMeal();
    }
}

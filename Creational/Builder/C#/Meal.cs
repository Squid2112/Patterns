using System;

namespace FastFoodBuilder {
    public class Meal {
        public string MainItem { get; set; }
        public string SideItem { get; set; }
        public string Drink { get; set; }
        public string Toy { get; set; }

        public override string ToString() {
            return $"Meal [Main Item: {MainItem}, Side Item: {SideItem}, Drink: {Drink}, Toy: {Toy}]";
        }
    }
}

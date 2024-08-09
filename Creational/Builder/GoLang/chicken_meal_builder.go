package main

type ChickenMealBuilder struct {
	meal *Meal
}

func NewChickenMealBuilder() *ChickenMealBuilder {
	return &ChickenMealBuilder{meal: &Meal{}}
}

func (c *ChickenMealBuilder) BuildMainItem() {
	c.meal.MainItem = "Chicken Sandwich"
}

func (c *ChickenMealBuilder) BuildSideItem() {
	c.meal.SideItem = "Nuggets"
}

func (c *ChickenMealBuilder) BuildDrink() {
	c.meal.Drink = "Sprite"
}

func (c *ChickenMealBuilder) BuildToy() {
	c.meal.Toy = "Toy Dinosaur"
}

func (c *ChickenMealBuilder) GetMeal() *Meal {
	return c.meal
}

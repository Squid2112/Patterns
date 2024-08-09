package main

type BurgerMealBuilder struct {
	meal *Meal
}

func NewBurgerMealBuilder() *BurgerMealBuilder {
	return &BurgerMealBuilder{meal: &Meal{}}
}

func (b *BurgerMealBuilder) BuildMainItem() {
	b.meal.MainItem = "Burger"
}

func (b *BurgerMealBuilder) BuildSideItem() {
	b.meal.SideItem = "Fries"
}

func (b *BurgerMealBuilder) BuildDrink() {
	b.meal.Drink = "Coke"
}

func (b *BurgerMealBuilder) BuildToy() {
	b.meal.Toy = "Toy Car"
}

func (b *BurgerMealBuilder) GetMeal() *Meal {
	return b.meal
}

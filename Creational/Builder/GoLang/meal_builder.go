package main

type MealBuilder interface {
	BuildMainItem()
	BuildSideItem()
	BuildDrink()
	BuildToy()
	GetMeal() *Meal
}

package main

import "fmt"

func main() {
	burgerMealBuilder := NewBurgerMealBuilder()
	director1 := NewMealDirector(burgerMealBuilder)
	burgerMeal := director1.ConstructMeal()
	fmt.Println(burgerMeal.Describe())

	chickenMealBuilder := NewChickenMealBuilder()
	director2 := NewMealDirector(chickenMealBuilder)
	chickenMeal := director2.ConstructMeal()
	fmt.Println(chickenMeal.Describe())
}

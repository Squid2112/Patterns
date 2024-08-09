package main

type MealDirector struct {
	builder MealBuilder
}

func NewMealDirector(builder MealBuilder) *MealDirector {
	return &MealDirector{builder: builder}
}

func (d *MealDirector) ConstructMeal() *Meal {
	d.builder.BuildMainItem()
	d.builder.BuildSideItem()
	d.builder.BuildDrink()
	d.builder.BuildToy()
	return d.builder.GetMeal()
}

package main

import "fmt"

type Meal struct {
	MainItem string
	SideItem string
	Drink    string
	Toy      string
}

func (m *Meal) Describe() string {
	return fmt.Sprintf("Meal [Main Item: %s, Side Item: %s, Drink: %s, Toy: %s]", m.MainItem, m.SideItem, m.Drink, m.Toy)
}

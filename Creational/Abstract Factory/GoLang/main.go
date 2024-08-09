package main

import (
    "fmt"
    "AbstractFactory/factory"
)

func main() {
    var sedanFactory factory.IAutoBodyFactory = &factory.SedanFactory{}
    var suvFactory factory.IAutoBodyFactory = &factory.SUVFactory{}

    fmt.Println(sedanFactory.CreateLeftDoor().Type())  // Output: Sedan Left Door
    fmt.Println(sedanFactory.CreateRightDoor().Type()) // Output: Sedan Right Door
    fmt.Println(sedanFactory.CreateHood().Type())      // Output: Sedan Hood

    fmt.Println(suvFactory.CreateLeftDoor().Type())    // Output: SUV Left Door
    fmt.Println(suvFactory.CreateRightDoor().Type())   // Output: SUV Right Door
    fmt.Println(suvFactory.CreateHood().Type())        // Output: SUV Hood
}

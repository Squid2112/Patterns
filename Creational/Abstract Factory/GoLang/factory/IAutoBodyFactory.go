package factory

// IAutoBodyFactory is the abstract factory interface
type IAutoBodyFactory interface {
    CreateLeftDoor() IDoor
    CreateRightDoor() IDoor
    CreateHood() IHood
}

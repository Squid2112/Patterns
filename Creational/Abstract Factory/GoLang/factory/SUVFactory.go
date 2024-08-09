package factory

// SUVFactory is a concrete factory for creating SUV parts
type SUVFactory struct{}

func (f *SUVFactory) CreateLeftDoor() IDoor {
    return &SUVLeftDoor{}
}

func (f *SUVFactory) CreateRightDoor() IDoor {
    return &SUVRightDoor{}
}

func (f *SUVFactory) CreateHood() IHood {
    return &SUVHood{}
}

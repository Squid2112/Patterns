package factory

// SUVLeftDoor is a concrete product for SUV Left Door
type SUVLeftDoor struct{}

func (d *SUVLeftDoor) Type() string {
    return "SUV Left Door"
}

// SUVRightDoor is a concrete product for SUV Right Door
type SUVRightDoor struct{}

func (d *SUVRightDoor) Type() string {
    return "SUV Right Door"
}

// SUVHood is a concrete product for SUV Hood
type SUVHood struct{}

func (h *SUVHood) Type() string {
    return "SUV Hood"
}

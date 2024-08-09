package factory

// SedanLeftDoor is a concrete product for Sedan Left Door
type SedanLeftDoor struct{}

func (d *SedanLeftDoor) Type() string {
    return "Sedan Left Door"
}

// SedanRightDoor is a concrete product for Sedan Right Door
type SedanRightDoor struct{}

func (d *SedanRightDoor) Type() string {
    return "Sedan Right Door"
}

// SedanHood is a concrete product for Sedan Hood
type SedanHood struct{}

func (h *SedanHood) Type() string {
    return "Sedan Hood"
}
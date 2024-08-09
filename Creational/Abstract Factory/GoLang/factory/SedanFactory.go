package factory

// SedanFactory is a concrete factory for creating Sedan parts
type SedanFactory struct{}

func (f *SedanFactory) CreateLeftDoor() IDoor {
    return &SedanLeftDoor{}
}

func (f *SedanFactory) CreateRightDoor() IDoor {
    return &SedanRightDoor{}
}

func (f *SedanFactory) CreateHood() IHood {
    return &SedanHood{}
}
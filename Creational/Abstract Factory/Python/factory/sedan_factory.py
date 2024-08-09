# factory/sedan_factory.py
from factory import IAutoBodyFactory
from product.sedan_parts import SedanLeftDoor, SedanRightDoor, SedanHood

class SedanFactory(IAutoBodyFactory):
    def create_left_door(self) -> SedanLeftDoor:
        return SedanLeftDoor()

    def create_right_door(self) -> SedanRightDoor:
        return SedanRightDoor()

    def create_hood(self) -> SedanHood:
        return SedanHood()

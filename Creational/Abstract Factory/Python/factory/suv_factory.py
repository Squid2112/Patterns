# factory/suv_factory.py
from factory import IAutoBodyFactory
from product.suv_parts import SUVLeftDoor, SUVRightDoor, SUVHood

class SUVFactory(IAutoBodyFactory):
    def create_left_door(self) -> SUVLeftDoor:
        return SUVLeftDoor()

    def create_right_door(self) -> SUVRightDoor:
        return SUVRightDoor()

    def create_hood(self) -> SUVHood:
        return SUVHood()

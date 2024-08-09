# product/suv_parts.py
from .auto_body_part import AutoBodyPart

class SUVLeftDoor(AutoBodyPart):
    def get_type(self) -> str:
        return "SUV Left Door"

class SUVRightDoor(AutoBodyPart):
    def get_type(self) -> str:
        return "SUV Right Door"

class SUVHood(AutoBodyPart):
    def get_type(self) -> str:
        return "SUV Hood"

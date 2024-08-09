# product/sedan_parts.py
from .auto_body_part import AutoBodyPart

class SedanLeftDoor(AutoBodyPart):
    def get_type(self) -> str:
        return "Sedan Left Door"

class SedanRightDoor(AutoBodyPart):
    def get_type(self) -> str:
        return "Sedan Right Door"

class SedanHood(AutoBodyPart):
    def get_type(self) -> str:
        return "Sedan Hood"

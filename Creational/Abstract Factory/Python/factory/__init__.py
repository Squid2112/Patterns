# factory/__init__.py
from abc import ABC, abstractmethod
from product.auto_body_part import AutoBodyPart

class IAutoBodyFactory(ABC):
    @abstractmethod
    def create_left_door(self) -> AutoBodyPart:
        pass

    @abstractmethod
    def create_right_door(self) -> AutoBodyPart:
        pass

    @abstractmethod
    def create_hood(self) -> AutoBodyPart:
        pass

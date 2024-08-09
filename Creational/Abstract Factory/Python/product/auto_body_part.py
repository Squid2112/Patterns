# product/auto_body_part.py
from abc import ABC, abstractmethod

class AutoBodyPart(ABC):
    @abstractmethod
    def get_type(self) -> str:
        pass

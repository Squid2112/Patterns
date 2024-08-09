# main.py
from factory.sedan_factory import SedanFactory
from factory.suv_factory import SUVFactory

def display_part(part):
    print(part.get_type())

if __name__ == "__main__":
    sedan_factory = SedanFactory()
    suv_factory = SUVFactory()

    display_part(sedan_factory.create_left_door())  # Output: Sedan Left Door
    display_part(sedan_factory.create_right_door()) # Output: Sedan Right Door
    display_part(sedan_factory.create_hood())       # Output: Sedan Hood

    display_part(suv_factory.create_left_door())    # Output: SUV Left Door
    display_part(suv_factory.create_right_door())   # Output: SUV Right Door
    display_part(suv_factory.create_hood())         # Output: SUV Hood

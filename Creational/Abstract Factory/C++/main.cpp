#include <iostream>
#include "factory/SedanFactory.hpp"
#include "factory/SUVFactory.hpp"

void displayPart(const AutoBodyPart* part) {
    std::cout << part->getType() << std::endl;
}

int main() {
    IAutoBodyFactory* sedanFactory = new SedanFactory();
    IAutoBodyFactory* suvFactory = new SUVFactory();

    displayPart(sedanFactory->createLeftDoor());  // Output: Sedan Left Door
    displayPart(sedanFactory->createRightDoor()); // Output: Sedan Right Door
    displayPart(sedanFactory->createHood());      // Output: Sedan Hood

    displayPart(suvFactory->createLeftDoor());    // Output: SUV Left Door
    displayPart(suvFactory->createRightDoor());   // Output: SUV Right Door
    displayPart(suvFactory->createHood());        // Output: SUV Hood

    delete sedanFactory;
    delete suvFactory;

    return 0;
}

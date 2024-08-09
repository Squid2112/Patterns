// src/main.ts
import { SedanFactory } from './factory/SedanFactory';
import { SUVFactory } from './factory/SUVFactory';
import { AutoBodyPart } from './product/AutoBodyPart';

function displayPart(part: AutoBodyPart) {
    console.log(part.getType());
}

const sedanFactory = new SedanFactory();
const suvFactory = new SUVFactory();

displayPart(sedanFactory.createLeftDoor());  // Output: Sedan Left Door
displayPart(sedanFactory.createRightDoor()); // Output: Sedan Right Door
displayPart(sedanFactory.createHood());      // Output: Sedan Hood

displayPart(suvFactory.createLeftDoor());    // Output: SUV Left Door
displayPart(suvFactory.createRightDoor());   // Output: SUV Right Door
displayPart(suvFactory.createHood());        // Output: SUV Hood

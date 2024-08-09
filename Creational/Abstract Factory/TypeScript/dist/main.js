"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/main.ts
const SedanFactory_1 = require("./factory/SedanFactory");
const SUVFactory_1 = require("./factory/SUVFactory");
function displayPart(part) {
    console.log(part.getType());
}
const sedanFactory = new SedanFactory_1.SedanFactory();
const suvFactory = new SUVFactory_1.SUVFactory();
displayPart(sedanFactory.createLeftDoor()); // Output: Sedan Left Door
displayPart(sedanFactory.createRightDoor()); // Output: Sedan Right Door
displayPart(sedanFactory.createHood()); // Output: Sedan Hood
displayPart(suvFactory.createLeftDoor()); // Output: SUV Left Door
displayPart(suvFactory.createRightDoor()); // Output: SUV Right Door
displayPart(suvFactory.createHood()); // Output: SUV Hood

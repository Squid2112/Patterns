"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SUVFactory = void 0;
const SUVParts_1 = require("../product/SUVParts");
class SUVFactory {
    createLeftDoor() {
        return new SUVParts_1.SUVLeftDoor();
    }
    createRightDoor() {
        return new SUVParts_1.SUVRightDoor();
    }
    createHood() {
        return new SUVParts_1.SUVHood();
    }
}
exports.SUVFactory = SUVFactory;

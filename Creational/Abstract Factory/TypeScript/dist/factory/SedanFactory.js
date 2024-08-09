"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SedanFactory = void 0;
const SedanParts_1 = require("../product/SedanParts");
class SedanFactory {
    createLeftDoor() {
        return new SedanParts_1.SedanLeftDoor();
    }
    createRightDoor() {
        return new SedanParts_1.SedanRightDoor();
    }
    createHood() {
        return new SedanParts_1.SedanHood();
    }
}
exports.SedanFactory = SedanFactory;

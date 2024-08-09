import IAutoBodyFactory from './factory.js';
import { SedanLeftDoor, SedanRightDoor, SedanHood } from './product.js';

// Concrete Factory for Sedan
class SedanFactory extends IAutoBodyFactory {
    createLeftDoor() {
        return new SedanLeftDoor();
    }

    createRightDoor() {
        return new SedanRightDoor();
    }

    createHood() {
        return new SedanHood();
    }
}

export default SedanFactory;

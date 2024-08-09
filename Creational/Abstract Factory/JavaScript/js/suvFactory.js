import IAutoBodyFactory from './factory.js';
import { SUVLeftDoor, SUVRightDoor, SUVHood } from './product.js';

// Concrete Factory for SUV
class SUVFactory extends IAutoBodyFactory {
    createLeftDoor() {
        return new SUVLeftDoor();
    }

    createRightDoor() {
        return new SUVRightDoor();
    }

    createHood() {
        return new SUVHood();
    }
}

// Exporting the class as a default export
export default SUVFactory;

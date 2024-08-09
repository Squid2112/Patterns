// src/factory/SUVFactory.ts
import { IAutoBodyFactory } from './IAutoBodyFactory';
import { AutoBodyPart } from '../product/AutoBodyPart';
import { SUVLeftDoor, SUVRightDoor, SUVHood } from '../product/SUVParts';

export class SUVFactory implements IAutoBodyFactory {
    createLeftDoor(): AutoBodyPart {
        return new SUVLeftDoor();
    }

    createRightDoor(): AutoBodyPart {
        return new SUVRightDoor();
    }

    createHood(): AutoBodyPart {
        return new SUVHood();
    }
}

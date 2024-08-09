// src/factory/SedanFactory.ts
import { IAutoBodyFactory } from './IAutoBodyFactory';
import { AutoBodyPart } from '../product/AutoBodyPart';
import { SedanLeftDoor, SedanRightDoor, SedanHood } from '../product/SedanParts';

export class SedanFactory implements IAutoBodyFactory {
    createLeftDoor(): AutoBodyPart {
        return new SedanLeftDoor();
    }

    createRightDoor(): AutoBodyPart {
        return new SedanRightDoor();
    }

    createHood(): AutoBodyPart {
        return new SedanHood();
    }
}

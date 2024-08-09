// src/factory/IAutoBodyFactory.ts
import { AutoBodyPart } from "../product/AutoBodyPart";

export interface IAutoBodyFactory {
    createLeftDoor(): AutoBodyPart;
    createRightDoor(): AutoBodyPart;
    createHood(): AutoBodyPart;
}

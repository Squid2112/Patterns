// src/product/SUVParts.ts
import { AutoBodyPart } from './AutoBodyPart';

export class SUVLeftDoor implements AutoBodyPart {
    getType(): string {
        return "SUV Left Door";
    }
}

export class SUVRightDoor implements AutoBodyPart {
    getType(): string {
        return "SUV Right Door";
    }
}

export class SUVHood implements AutoBodyPart {
    getType(): string {
        return "SUV Hood";
    }
}

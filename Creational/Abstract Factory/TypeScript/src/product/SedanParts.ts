// src/product/SedanParts.ts
import { AutoBodyPart } from './AutoBodyPart';

export class SedanLeftDoor implements AutoBodyPart {
    getType(): string {
        return "Sedan Left Door";
    }
}

export class SedanRightDoor implements AutoBodyPart {
    getType(): string {
        return "Sedan Right Door";
    }
}

export class SedanHood implements AutoBodyPart {
    getType(): string {
        return "Sedan Hood";
    }
}

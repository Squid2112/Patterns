export class Document {
    constructor() {
        if (new.target === Document) {
            throw new TypeError("Cannot construct Abstract instances directly");
        }
    }

    print() {
        throw new Error("Method 'print()' must be implemented.");
    }
}

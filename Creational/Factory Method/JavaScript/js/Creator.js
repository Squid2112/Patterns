export class Creator {
    // Factory Method
    createDocument() {
        throw new Error("Method 'createDocument()' must be implemented.");
    }

    // Method that relies on the Factory Method
    printDocument() {
        const doc = this.createDocument();
        doc.print();
    }
}

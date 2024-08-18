import { Document } from './Document.js';

export class Resume extends Document {
    print() {
        this.log("Printing a Resume...");
    }

    log(message) {
        const output = document.getElementById('output');
        const p = document.createElement('p');
        p.textContent = message;
        output.appendChild(p);
    }
}

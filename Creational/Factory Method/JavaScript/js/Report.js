import { Document } from './Document.js';

export class Report extends Document {
    print() {
        this.log("Printing a Report...");
    }

    log(message) {
        const output = document.getElementById('output');
        const p = document.createElement('p');
        p.textContent = message;
        output.appendChild(p);
    }
}

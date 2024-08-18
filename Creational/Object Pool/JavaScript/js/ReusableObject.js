export class ReusableObject {
    static counter = 0;

    constructor() {
        this.id = ++ReusableObject.counter;
        this.log(`ReusableObject ${this.id} created.`);
    }

    doWork() {
        this.log(`ReusableObject ${this.id} is working.`);
    }

    log(message) {
        const output = document.getElementById('output');
        const p = document.createElement('p');
        p.textContent = message;
        output.appendChild(p);
    }
}

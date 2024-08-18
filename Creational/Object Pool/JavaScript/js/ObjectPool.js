import { ReusableObject } from './ReusableObject.js';

export class ObjectPool {
    constructor(maxPoolSize = 10) {
        this.availableObjects = [];
        this.usedObjects = [];
        this.maxPoolSize = maxPoolSize;
    }

    getObject() {
        let reusableObject;
        if (this.availableObjects.length > 0) {
            reusableObject = this.availableObjects.pop();
            this.log(`ReusableObject ${reusableObject.id} checked out from pool.`);
        } else if (this.usedObjects.length < this.maxPoolSize) {
            reusableObject = new ReusableObject();
        } else {
            throw new Error("No more objects available in the pool.");
        }

        this.usedObjects.push(reusableObject);
        return reusableObject;
    }

    releaseObject(reusableObject) {
        this.usedObjects = this.usedObjects.filter(obj => obj !== reusableObject);
        this.availableObjects.push(reusableObject);
        this.log(`ReusableObject ${reusableObject.id} returned to pool.`);
    }

    cleanUp() {
        this.log("Cleaning up unused objects.");
        this.availableObjects = [];
    }

    log(message) {
        const output = document.getElementById('output');
        const p = document.createElement('p');
        p.textContent = message;
        output.appendChild(p);
    }
}

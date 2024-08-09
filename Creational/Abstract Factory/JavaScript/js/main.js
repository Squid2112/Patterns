import SedanFactory from './sedanFactory.js';
import SUVFactory from './suvFactory.js';

const output = document.getElementById('output');

const sedanFactory = new SedanFactory();
const suvFactory = new SUVFactory();

const displayPart = (part) => {
    const p = document.createElement('p');
    p.textContent = part.getType();
    output.appendChild(p);
};

// Using the Sedan Factory
displayPart(sedanFactory.createLeftDoor());  // Output: Sedan Left Door
displayPart(sedanFactory.createRightDoor()); // Output: Sedan Right Door
displayPart(sedanFactory.createHood());      // Output: Sedan Hood

// Using the SUV Factory
displayPart(suvFactory.createLeftDoor());    // Output: SUV Left Door
displayPart(suvFactory.createRightDoor());   // Output: SUV Right Door
displayPart(suvFactory.createHood());        // Output: SUV Hood

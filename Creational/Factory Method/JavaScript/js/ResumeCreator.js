import { Creator } from './Creator.js';
import { Resume } from './Resume.js';

export class ResumeCreator extends Creator {
    createDocument() {
        return new Resume();
    }
}

import { Creator } from './Creator.js';
import { Report } from './Report.js';

export class ReportCreator extends Creator {
    createDocument() {
        return new Report();
    }
}

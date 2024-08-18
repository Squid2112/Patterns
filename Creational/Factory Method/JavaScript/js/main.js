import { ReportCreator } from './ReportCreator.js';
import { ResumeCreator } from './ResumeCreator.js';

const reportCreator = new ReportCreator();
const resumeCreator = new ResumeCreator();

reportCreator.printDocument();  // Output: Printing a Report...
resumeCreator.printDocument();  // Output: Printing a Resume...

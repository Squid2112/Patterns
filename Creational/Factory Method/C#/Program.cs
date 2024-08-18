using System;

namespace DocumentFactory {
    class Program {
        static void Main(string[] args) {
            Creator reportCreator = new ReportCreator();
            Creator resumeCreator = new ResumeCreator();

            reportCreator.PrintDocument();  // Output: Printing a Report...
            resumeCreator.PrintDocument();  // Output: Printing a Resume...
        }
    }
}

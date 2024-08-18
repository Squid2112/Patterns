using System;

namespace DocumentFactory {
    public class Report : Document {
        public override void Print() {
            Console.WriteLine("Printing a Report...");
        }
    }
}

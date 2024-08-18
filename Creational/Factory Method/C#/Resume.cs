using System;

namespace DocumentFactory {
    public class Resume : Document {
        public override void Print() {
            Console.WriteLine("Printing a Resume...");
        }
    }
}

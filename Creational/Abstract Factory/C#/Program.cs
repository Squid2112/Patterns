using System;

namespace AutoBodyFactory {
    class Program {
        static void Main(string[] args)
        {
            IAutoBodyFactory sedanFactory = new SedanFactory();
            IAutoBodyFactory suvFactory = new SUVFactory();

            Console.WriteLine(sedanFactory.CreateLeftDoor().GetPartType());  // Output: Sedan Left Door
            Console.WriteLine(sedanFactory.CreateRightDoor().GetPartType()); // Output: Sedan Right Door
            Console.WriteLine(sedanFactory.CreateHood().GetPartType());      // Output: Sedan Hood

            Console.WriteLine(suvFactory.CreateLeftDoor().GetPartType());    // Output: SUV Left Door
            Console.WriteLine(suvFactory.CreateRightDoor().GetPartType());   // Output: SUV Right Door
            Console.WriteLine(suvFactory.CreateHood().GetPartType());        // Output: SUV Hood
        }
    }
}

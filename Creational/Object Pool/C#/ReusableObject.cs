namespace ObjectPoolExample {
    public class ReusableObject {
        private static int _counter = 0;
        public int ID { get; private set; }

        public ReusableObject() {
            ID = ++_counter;
            Console.WriteLine($"ReusableObject {ID} created.");
        }

        public void DoWork() {
            Console.WriteLine($"ReusableObject {ID} is working.");
        }
    }
}

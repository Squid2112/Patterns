namespace DocumentFactory {
    public abstract class Creator {
        // Factory Method
        public abstract Document CreateDocument();

        // This method relies on the factory method
        public void PrintDocument() {
            Document doc = CreateDocument();
            doc.Print();
        }
    }
}

namespace DocumentFactory {
    public class ResumeCreator : Creator {
        public override Document CreateDocument() {
            return new Resume();
        }
    }
}

namespace DocumentFactory {
    public class ReportCreator : Creator {
        public override Document CreateDocument() {
            return new Report();
        }
    }
}

namespace AutoBodyFactory {
    public class SedanFactory : IAutoBodyFactory {
        public IAutoBodyPart CreateLeftDoor() {
            return new SedanLeftDoor();
        }

        public IAutoBodyPart CreateRightDoor() {
            return new SedanRightDoor();
        }

        public IAutoBodyPart CreateHood() {
            return new SedanHood();
        }
    }
}

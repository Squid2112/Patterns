namespace AutoBodyFactory {
    public class SUVFactory : IAutoBodyFactory {
        public IAutoBodyPart CreateLeftDoor() {
            return new SUVLeftDoor();
        }

        public IAutoBodyPart CreateRightDoor() {
            return new SUVRightDoor();
        }

        public IAutoBodyPart CreateHood() {
            return new SUVHood();
        }
    }
}

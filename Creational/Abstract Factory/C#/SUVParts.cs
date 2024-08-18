namespace AutoBodyFactory {
    public class SUVLeftDoor : IAutoBodyPart {
        public string GetPartType() {
            return "SUV Left Door";
        }
    }

    public class SUVRightDoor : IAutoBodyPart {
        public string GetPartType() {
            return "SUV Right Door";
        }
    }

    public class SUVHood : IAutoBodyPart {
        public string GetPartType() {
            return "SUV Hood";
        }
    }
}

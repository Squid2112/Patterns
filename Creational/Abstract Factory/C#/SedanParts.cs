namespace AutoBodyFactory {
    public class SedanLeftDoor : IAutoBodyPart {
        public string GetPartType()
        {
            return "Sedan Left Door";
        }
    }

    public class SedanRightDoor : IAutoBodyPart{
        public string GetPartType() {
            return "Sedan Right Door";
        }
    }

    public class SedanHood : IAutoBodyPart {
        public string GetPartType() {
            return "Sedan Hood";
        }
    }
}

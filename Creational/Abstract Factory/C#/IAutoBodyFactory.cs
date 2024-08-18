namespace AutoBodyFactory {
    public interface IAutoBodyFactory {
        IAutoBodyPart CreateLeftDoor();
        IAutoBodyPart CreateRightDoor();
        IAutoBodyPart CreateHood();
    }
}

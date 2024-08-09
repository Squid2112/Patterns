// Main.java
public class Main {
    public static void main(String[] args) {
        CarPartsFactory modelXFactory = new ModelXFactory();
        CarPartsFactory modelYFactory = new ModelYFactory();

        Door modelXDoor = modelXFactory.createDoor();
        Hood modelXHood = modelXFactory.createHood();

        Door modelYDoor = modelYFactory.createDoor();
        Hood modelYHood = modelYFactory.createHood();

        modelXDoor.create();
        modelXHood.create();
        modelYDoor.create();
        modelYHood.create();
    }
}

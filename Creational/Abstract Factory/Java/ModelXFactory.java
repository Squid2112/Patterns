// ModelXFactory.java
public class ModelXFactory implements CarPartsFactory {
    @Override
    public Door createDoor() {
        return new ModelXDoor();
    }

    @Override
    public Hood createHood() {
        return new ModelXHood();
    }
}
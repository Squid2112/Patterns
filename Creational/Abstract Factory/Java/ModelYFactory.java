// ModelYFactory.java
public class ModelYFactory implements CarPartsFactory {
    @Override
    public Door createDoor() {
        return new ModelYDoor();
    }

    @Override
    public Hood createHood() {
        return new ModelYHood();
    }
}

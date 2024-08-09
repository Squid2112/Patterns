// Abstract Factory Interface
class IAutoBodyFactory {
    createLeftDoor() {
        throw new Error("This method should be overridden!");
    }

    createRightDoor() {
        throw new Error("This method should be overridden!");
    }

    createHood() {
        throw new Error("This method should be overridden!");
    }
}

export default IAutoBodyFactory;

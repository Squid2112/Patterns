// Abstract Product Interface
class AutoBodyPart {
    getType() {
        throw new Error("This method should be overridden!");
    }
}

// Concrete Product Classes
class SedanLeftDoor extends AutoBodyPart {
    getType() {
        return "Sedan Left Door";
    }
}

class SedanRightDoor extends AutoBodyPart {
    getType() {
        return "Sedan Right Door";
    }
}

class SedanHood extends AutoBodyPart {
    getType() {
        return "Sedan Hood";
    }
}

class SUVLeftDoor extends AutoBodyPart {
    getType() {
        return "SUV Left Door";
    }
}

class SUVRightDoor extends AutoBodyPart {
    getType() {
        return "SUV Right Door";
    }
}

class SUVHood extends AutoBodyPart {
    getType() {
        return "SUV Hood";
    }
}

// Exporting the classes
export { SedanLeftDoor, SedanRightDoor, SedanHood, SUVLeftDoor, SUVRightDoor, SUVHood };

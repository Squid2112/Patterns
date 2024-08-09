// product/SUVParts.hpp
#ifndef SUVPARTS_HPP
#define SUVPARTS_HPP

#include "AutoBodyPart.hpp"

class SUVLeftDoor : public AutoBodyPart {
public:
    std::string getType() const override {
        return "SUV Left Door";
    }
};

class SUVRightDoor : public AutoBodyPart {
public:
    std::string getType() const override {
        return "SUV Right Door";
    }
};

class SUVHood : public AutoBodyPart {
public:
    std::string getType() const override {
        return "SUV Hood";
    }
};

#endif // SUVPARTS_HPP

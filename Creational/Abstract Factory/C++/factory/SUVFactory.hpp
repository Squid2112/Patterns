// factory/SUVFactory.hpp
#ifndef SUVFACTORY_HPP
#define SUVFACTORY_HPP

#include "IAutoBodyFactory.hpp"
#include "../product/SUVParts.hpp"

class SUVFactory : public IAutoBodyFactory {
public:
    AutoBodyPart* createLeftDoor() const override {
        return new SUVLeftDoor();
    }

    AutoBodyPart* createRightDoor() const override {
        return new SUVRightDoor();
    }

    AutoBodyPart* createHood() const override {
        return new SUVHood();
    }
};

#endif // SUVFACTORY_HPP

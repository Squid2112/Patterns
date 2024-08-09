// factory/SedanFactory.hpp
#ifndef SEDANFACTORY_HPP
#define SEDANFACTORY_HPP

#include "IAutoBodyFactory.hpp"
#include "../product/SedanParts.hpp"

class SedanFactory : public IAutoBodyFactory {
public:
    AutoBodyPart* createLeftDoor() const override {
        return new SedanLeftDoor();
    }

    AutoBodyPart* createRightDoor() const override {
        return new SedanRightDoor();
    }

    AutoBodyPart* createHood() const override {
        return new SedanHood();
    }
};

#endif // SEDANFACTORY_HPP

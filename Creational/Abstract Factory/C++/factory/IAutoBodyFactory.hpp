// factory/IAutoBodyFactory.hpp
#ifndef IAUTOBODYFACTORY_HPP
#define IAUTOBODYFACTORY_HPP

#include "../product/AutoBodyPart.hpp"

class IAutoBodyFactory {
public:
    virtual ~IAutoBodyFactory() = default;
    virtual AutoBodyPart* createLeftDoor() const = 0;
    virtual AutoBodyPart* createRightDoor() const = 0;
    virtual AutoBodyPart* createHood() const = 0;
};

#endif // IAUTOBODYFACTORY_HPP

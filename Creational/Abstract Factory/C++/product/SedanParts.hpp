// product/SedanParts.hpp
#ifndef SEDANPARTS_HPP
#define SEDANPARTS_HPP

#include "AutoBodyPart.hpp"

class SedanLeftDoor : public AutoBodyPart {
public:
    std::string getType() const override {
        return "Sedan Left Door";
    }
};

class SedanRightDoor : public AutoBodyPart {
public:
    std::string getType() const override {
        return "Sedan Right Door";
    }
};

class SedanHood : public AutoBodyPart {
public:
    std::string getType() const override {
        return "Sedan Hood";
    }
};

#endif // SEDANPARTS_HPP

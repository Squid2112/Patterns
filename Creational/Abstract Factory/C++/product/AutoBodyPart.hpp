// Abstract Product Interface
#ifndef AUTOBODYPART_HPP
#define AUTOBODYPART_HPP

#include <string>

class AutoBodyPart {
public:
    virtual ~AutoBodyPart() = default;
    virtual std::string getType() const = 0;
};

#endif // AUTOBODYPART_HPP

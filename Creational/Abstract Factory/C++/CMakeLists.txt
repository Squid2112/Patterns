cmake_minimum_required(VERSION 3.10)

project(AutoBodyStamping)

set(CMAKE_CXX_STANDARD 17)

include_directories(${PROJECT_SOURCE_DIR}/factory)
include_directories(${PROJECT_SOURCE_DIR}/product)

add_executable(AutoBodyStamping
    main.cpp
    factory/SedanFactory.cpp
    factory/SUVFactory.cpp
    product/SedanParts.cpp
    product/SUVParts.cpp
)

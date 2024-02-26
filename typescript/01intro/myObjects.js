"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "John",
    age: 30,
    email: "example@example.com",
};
function createAddr(_a) {
    var name = _a.name, location = _a.location, zip = _a.zip;
}
function createCourse() {
    return { name: "math", price: 100 };
}
createCourse();
createAddr({ name: "John", location: "123 Main St", zip: 12345 });
var newAddr = { name: "John", location: "123 Main St", zip: 12345, email: "e@ex.com" };
createAddr(newAddr);

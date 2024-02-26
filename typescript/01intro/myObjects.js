"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var myUser = {
    _id: "123",
    name: "John",
    age: 30,
    isActive: true,
};
myUser.age = 31;
// myUser._id = "321"; // Cannot assign to '_id' because it is a read-only property.ts(2540)
function createUser(user) { }
createUser(myUser);

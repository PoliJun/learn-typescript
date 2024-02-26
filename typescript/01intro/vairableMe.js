"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num.() + 2;
}
var result = addTwo(2);
console.log(result);

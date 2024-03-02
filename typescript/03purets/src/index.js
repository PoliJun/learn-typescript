"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score = 33;
score = "thirty three";
score = 33;
console.log(score);
function printId(id) {
    if (typeof id === "string") {
        // In this block, id is of type 'string'
        console.log(id.toUpperCase());
    }
    else {
        // Here, id is of type 'number'
        console.log("Your id is: ".concat(id + 3));
    }
}
printId("101"); // 101
printId(101); // 104
var data1 = [101, "101", 102, "102"];
var data2 = ["101", "102", "103", "104"];
var seatAllotment = "asile";
console.log(seatAllotment); // asile

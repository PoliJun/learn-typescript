let myString = "Hello World";
let myNum = 22;
let myArray = ["Hello", "World"];
let myNull = null;
console.log(typeof myString); // string
console.log(typeof myNum); // number
console.log(typeof myArray); // object
console.log(typeof myNull); // object

function detectType(val: number | string) {
    if (typeof val === "string") {
        return val.toLowerCase();
    }
    return val + 3;
}

function provideId(id:string|null){
    if (!id) {
        console.log("No id provided");
        return;
    }
    id.toLowerCase();
}
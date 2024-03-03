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

function provideId(id: string | null) {
    if (!id) {
        console.log("No id provided");
        return;
    }
    if (typeof id === "string") {
        return id.toLowerCase();
    }
    // id.toLowerCase();
}
interface User {
    name: string;
    email: string;
}
interface Admin {
    name: string;
    email: string;
    role: string;
}

function isAdmin(account: User | Admin) {
    if ("role" in account) {
        console.log(account.role);
    }
}

function logValue(x: Date | string) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    } else {
        console.log(x.toUpperCase());
    }
}
type Fish = {
    swim: () => void;
};

type Bird = {
    fly: () => void;
};
function isFish(pet: Fish | Bird | string): pet is Fish {
    return (pet as Fish).swim() !== undefined;
}
function getFood(pet: Fish | Bird | string) {
    if (isFish(pet)) {
        pet; // type is Fish
        return "Fish";
    } else {
        pet; // type is string | Bird
        return "Bird";
    }
}
let myPet: Fish = {
    swim() {
        console.log("swimming");
    },
};

interface Circle {
    kind: "circle";
    radius: number;
}
interface Square {
    kind: "square";
    side: number;
}

interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
}
type Shape = Circle | Square | Rectangle;
// function getTrueShape(shape:Shape) {
//     if (shape.kind === "circle") {
//         return Math.PI * shape.radius ** 2;
//     } else {
//         return shape.side * shape.side;
//     }
// }
function getArea(shape: Shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side * shape.side;
        case "rectangle":
            return shape.width * shape.height;
        // Exhaustiveness checking
        default:
            const _exhaustiveCheck: never = shape;
            return _exhaustiveCheck;
    }
}

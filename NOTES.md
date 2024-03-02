# Learn TypeScrpt

## Type Safety

Typescript is a development tool that adds type safety to JavaScript. Your project is still javascript.

## What does typescript do?

-   Typescript is a superset of JavaScript
-   It adds types to JavaScript
-   It compiles to plain JavaScript
-   Static checking

## Install

```shell
npm install -g typescript
```

## ts config

[playground](https://www.typescriptlang.org/play)

## Types

-   number
-   string
-   boolean
-   null
-   undefined
-   void
-   object
-   array
-   tuple
-   any (avoid using this)
-   never
-   unkonwn
    ... and more

### Situations

-   A function that returns 2 numbers
-   A function that returns a string

### Syntax

types are all lowercase

```typescript
let variableName: type = value;
```

#### inferred value

In programming, when we say a value is "inferred", it typically refers to type inference. Type inference is the automatic detection of the data type of an expression in a programming language.

In statically typed languages like C++ or Java, you need to declare the type of variables before you use them. However, in languages that support type inference, such as Python, JavaScript, or TypeScript, you don't always have to explicitly declare the type of the variable. The compiler or interpreter can infer (determine) it from the value it's assigned.

For example, in Python:

```python
x = 5
```

Here, you didn't specify that `x` is an integer, but Python infers it from the fact that you assigned it the integer value `5`.

In TypeScript, a statically typed superset of JavaScript, you can also use type inference:

```typescript
let x = 5; // TypeScript infers that x is a number
```

In this case, TypeScript infers that `x` is a number because you assigned it the number `5`. If later you try to assign a string to `x`, TypeScript will give you an error because it inferred `x`'s type as number.

#### export moudle

```typescript
let greetings: string = "Hello World
console.log(greetings);

export {};
```

In TypeScript (and JavaScript modules), the `export {}` statement is used to create a module scope for the file. This is particularly useful when you want to ensure that variables, functions, or classes declared in a file do not pollute the global scope.

Without `export {}`, any `var` declarations in the file could potentially conflict with variables of the same name in the global scope. By using `export {}`, you're telling TypeScript that this file is a module, so all its declarations are scoped to the module, not the global scope.

However, in your provided code snippet, since there are no variables, functions, or classes declared, the `export {}` statement doesn't have any practical effect. It's likely there for future use or as a placeholder.

### Abuse of type

```typescript
let userId: number;
number = 5;
```

This is not a good practice. It is better to use `let userId = 5` and let TypeScript infer the type.

## Function Defined

```typescript
function add(a: number, b: number): number {
    return a + b;
}
```

```typescript
const add = (a: number, b: number): number => {
    return a + b;
};
```

### Typescript is smart enough to infer the type of parameters in map

```typescript
const numbers = [1, 2, 3, 4, 5];
numbers.map((num) => {
    return num * 2;
});
```

In this case, `num` is inferred to be a number.

### `never`

Check Documentation [here](https://www.typescriptlang.org/docs/handbook/2/functions.html#never)

The never type represents values which are never observed. In a return type, this means that the function throws an exception or terminates execution of the program.

```typescript
function throwError(message: string): never {
    throw new Error(message);
}
```

## Objects

```typescript
const User = {
    name: "John",
    age: 30,
    email: "example@example.com",
};

function createAddr({ name, location, zip }: { name: string; location: string; zip: number }) {}

function createCourse(): { name: string; price: number } {
    return { name: "math", price: 100 };
}
createCourse();
createAddr({ name: "John", location: "123 Main St", zip: 12345 });

// bad syntax
let newAddr = {
    name: "John",
    location: "123 Main St",
    zip: 12345,
    email: "e@ex.com",
};
createAddr(newAddr);

export {};
```

### Type Aliases

```typescript
type User = {
    name: string;
    age: number;
    isActive: boolean;
};

function createUser(user: User) {}

createUser({ name: "John", age: 30, isActive: true });
export {};
```

## `readonly` modifier

```typescript
type User = {
    readonly _id: string; // in case of MongoDB
    name: string;
    age: number;
    isActive: boolean;
};
let myUser: User = {
    _id: "123",
    name: "John",
    age: 30,
    isActive: true,
};
myUser.age = 31;
myUser._id = "321"; // Cannot assign to '_id' because it is a read-only property.ts(2540)
```

## Optional Properties

```typescript
type User = {
    name: string;
    age?: number;
};
let user: User = {
    name: "John",
};
user.age = 30;
```

## Intersection Types

interfaces allowed us to build up new types from other types by extending them. TypeScript provides another construct called intersection types that is mainly used to combine existing object types.

An intersection type is defined using the & operator.

```typescript
interface Colorful {
    color: string;
}
interface Circle {
    radius: number;
}

type ColorfulCircle = Colorful & Circle;
```

## Arrays

```typescript
const superHeros: string[] = [];
type User = {
    name: string;
    age: number;
    email: string;
    address: string;
};
const userList: User[] = [];
superHeros.push("ironman");
const matrix: number[][] = [];

export {}; // This is to avoid TS error: Cannot redeclare block-scoped variable 'superHeros'.ts(2451)
```

## Union

```typescript
let score: number | string = 33;

score = "thirty three";

score = 33;

console.log(score);

function printId(id: number | string) {
    if (typeof id === "string") {
        // In this block, id is of type 'string'
        console.log(id.toUpperCase());
    } else {
        // Here, id is of type 'number'
        console.log(`Your id is: ${id + 3}`);
    }
}
printId("101"); // 101
printId(101); // 104

const data1: (number | string)[] = [101, "101", 102, "102"];
const data2: number[] | string[] = ["101", "102", "103", "104"];

let seatAllotment: "asile" | "middle" | "window" | "emergency" = "middle";
```

## Tuple

```typescript
// This is an
const user: (string | number)[] = [1, "Rajat", 25, "Developer", "Gurgaon", "India"];

// Order matters
const user1: [string, number, string, boolean, string] = ["Rajat", 25, "Developer", true, "India"];

// This should not occur in your code. But ts allows call this method on a tuple.
// Tuple is an array with fixed number of elements and fixed types.
user1.push("Gurgaon");
console.log(user1);

export {}; // This is to avoid TS error: Cannot redeclare block-scoped variable 'user'.ts(2451)
```

## Enums

```typescript
/* const */ enum SeatChoice {
    WINDOW,
    AISLE,
    MIDDLE,
}
/* const */ enum SeatChoice2 {
    WINDOW = "Window",
    AISLE = 20,
    MIDDLE = 30,
}
const mySeat: SeatChoice = SeatChoice.WINDOW;
const mySeat2: SeatChoice2 = SeatChoice2.WINDOW;

console.log(mySeat); // 0
console.log(mySeat2); // Window
```

compiled to

```javascript
/* const */ var SeatChoice;
(function (SeatChoice) {
    SeatChoice[(SeatChoice["WINDOW"] = 0)] = "WINDOW";
    SeatChoice[(SeatChoice["AISLE"] = 1)] = "AISLE";
    SeatChoice[(SeatChoice["MIDDLE"] = 2)] = "MIDDLE";
})(SeatChoice || (SeatChoice = {}));
/* const */ var SeatChoice2;
(function (SeatChoice2) {
    SeatChoice2["WINDOW"] = "Window";
    SeatChoice2[(SeatChoice2["AISLE"] = 20)] = "AISLE";
    SeatChoice2[(SeatChoice2["MIDDLE"] = 30)] = "MIDDLE";
})(SeatChoice2 || (SeatChoice2 = {}));
var mySeat = SeatChoice.WINDOW;
var mySeat2 = SeatChoice2.WINDOW;
console.log(mySeat); // 0
console.log(mySeat2); // Window
```

uncomment `const` and see the compiled code.

```javascript
var mySeat = 0; /* SeatChoice.WINDOW */
var mySeat2 = "Window"; /* SeatChoice2.WINDOW */
console.log(mySeat); // 0
console.log(mySeat2); // Window
```

## Interfaces

```typescript
interface User {
    readonly dbId: number;
    name: string;
    age: number;
    email: string;
    address?: string;
    endTrial: () => string;
    startTrial(): string;
    getCoupon(couponName: string): string;
}

const hitesh: User = {
    dbId: 1,
    name: "Hitesh",
    age: 21,
    email: "example@example.com",
    startTrial: () => "Trial Started",
    endTrial: () => {
        return "Trial Ended";
    },
    // The parameter name can be anything. It is just a placeholder.
    // But the type should be string.
    getCoupon: (name: "myname" /* this is not recommended */) => {
        return `Coupon code: ${name}, Type: ${typeof name}`; // Coupon code: myname, Type: string
    },
};

console.log(hitesh.getCoupon("anyThing"));
```

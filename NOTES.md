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

### [Differences Between Type Aliases and Interfaces](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces)

Interface Type

Extending an interface

```typescript
interface Animal {
    name: string;
}

interface Bear extends Animal {
    honey: boolean;
}

const bear = getBear();
bear.name;
bear.honey;
```

Extending a type via intersections

```typescript
type Animal = {
    name: string;
};

type Bear = Animal & {
    honey: boolean;
};

const bear = getBear();
bear.name;
bear.honey;
```

Adding new fields to an existing interface

```typescript
interface Window {
    title: string;
}

interface Window {
    ts: TypeScriptAPI;
}

const src = 'const a = "Hello World"';
window.ts.transpileModule(src, {});
```

A type cannot be changed after being created

```typescript
type Window = {
    title: string;
};

type Window = {
    ts: TypeScriptAPI;
};
// Error: Duplicate identifier 'Window'.
```

<table class="full-width-table">
  <tbody>
    <tr>
      <th><code>Interface</code></th>
      <th><code>Type</code></th>
    </tr>
    <tr>
      <td>
        <p>Extending an interface</p>
        <code><pre>interface Animal {
  name: string;
}<br>
interface Bear extends Animal {
  honey: boolean;
}<br>
const bear = getBear();
bear.name;
bear.honey;
        </pre></code>
      </td>
      <td>
        <p>Extending a type via intersections</p>
        <code><pre>type Animal = {
  name: string;
}<br>
type Bear = Animal &amp; {
  honey: boolean;
}<br>
const bear = getBear();
bear.name;
bear.honey;
        </pre></code>
      </td>
    </tr>
    <tr>
      <td>
        <p>Adding new fields to an existing interface</p>
        <code><pre>interface Window {
  title: string;
}<br>
interface Window {
  ts: TypeScriptAPI;
}<br>
const src = 'const a = "Hello World"';
window.ts.transpileModule(src, {});
        </pre></code>
      </td>
      <td>
        <p>A type cannot be changed after being created</p>
        <code><pre>type Window = {
  title: string;
}<br>
type Window = {
  ts: TypeScriptAPI;
}<br>
<span style="color: rgb(163, 21, 21); --darkreader-inline-color: #ea6060;" data-darkreader-inline-color=""> // Error: Duplicate identifier 'Window'.</span><br>
        </pre></code>
      </td>
    </tr>
    </tbody>
</table>

## Classes

```typescript
class User {
    email: string;
    name: string;
    readonly city: string = "";
    address: string;
    constructor(email: string, name: string, address: string = "") {
        this.email = email;
        this.name = name;
        this.address = address;
    }
}

const hitesh = new User("e@e.com", "Hitesh", "Delhi");
console.log(hitesh);
```

### Modifiers

-   public
-   private
-   protected
-   readonly

```typescript
class User {
    public email: string;
    private name: string; // private modifier in javascript is not supported, "#" is used in javascript
    readonly city: string = "";
    address: string;
    constructor(email: string, name: string, address: string = "") {
        this.email = email;
        this.name = name;
        this.address = address;
    }
}

const hitesh = new User("e@e.com", "Hitesh", "Delhi");
console.log(hitesh);
hitesh.city;
hitesh.name; // Error: Property 'name' is private and only accessible within class 'User'.
```

More professional way

```typescript
class User {
    readonly city: string = "Toronto";
    constructor(public email: string, public name: string, private _userId: string) {}
}

const hitesh = new User("e@e.com", "Hitesh", "####");
console.log(hitesh);
```

### Getters and Setters

```typescript
class User {
    private _courseCount = 1;
    readonly city: string = "Toronto";
    constructor(public email: string, public name: string, private _userId: string) {}

    private deleteToken() {
        console.log("Deleting token");
    }
    get getAppleEmail(): string {
        return `apple ${this.email}`;
    }

    get courseCount(): number {
        return this._courseCount;
    }

    set courseCount(count: number) {
        if (count <= 1) {
            throw new Error("Invalid course count");
        }
        this._courseCount = count;
    }
}

const hitesh = new User("e@e.com", "Hitesh", "####");
console.log(hitesh);
console.log(hitesh.getAppleEmail); // getter
console.log(hitesh.courseCount); // getter
hitesh.courseCount = 5; // setter
console.log(hitesh.courseCount); // getter
console.log(hitesh);
```

## Implementing Interfaces

```typescript
interface TakePhoto {
    cameraMode: string;
    filter: string;
    burst: number;
}
interface Story {
    createStory(): void;
}
class Instagram implements TakePhoto {
    constructor(public cameraMode: string, public filter: string, public burst: number) {}
}

class Youtube implements TakePhoto, Story {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
        public videoMode: string, // You can add new new properties, but not less than the interface
    ) {}
    createStory(): void {
        console.log("Creating story");
    }
}
```

## Abstract Classes

```typescript
abstract class TakePhoto {
    constructor(cameraMode: string, filter: string, burst: number) {}
}

const hc = new TakePhoto("a", "b", 1); // Error: Cannot create an instance of an abstract class.
```

This is OK

```typescript
abstract class TakePhoto {
    constructor(cameraMode: string, filter: string, burst: number) {}
}

class Instagram extends TakePhoto {
    constructor(public cameraMode: string, public filter: string, public burst: number) {
        super(cameraMode, filter, burst);
    }
}

const hc = new Instagram("a", "b", 1);
```

Meaning of abstract class is that it can have abstract methods and non-abstract methods

```typescript
abstract class TakePhoto {
    constructor(cameraMode: string, filter: string, burst: number) {}

    abstract getSepia(): void;

    // Meaning of abstract class is that it can have abstract methods and non-abstract methods
    getRealTime(): number {
        return 0;
    }
}

class Instagram extends TakePhoto {
    constructor(public cameraMode: string, public filter: string, public burst: number) {
        super(cameraMode, filter, burst);
    }
    getSepia(): void {
        console.log("Applying sepia filter...");
        // Implementation logic for applying sepia filter goes here
    }
}

const hc = new Instagram("a", "b", 1);
```

## Generics

```typescript
// Generics is already a feature in TypeScript.
const score: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const name: Array<string> = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

function indentityOne(val: boolean | number | string): boolean | number | string {
    return val;
}
function indentityTwo(val: any): any {
    return val;
}
function indentityThree<T>(val: T): T {
    return val;
}
function indentityFour<T>(val: T[]): T[] {
    return val;
}
interface Bottle {
    name: string;
    price: number;
}
indentityThree<Bottle>({ name: "water", price: 20 });
export {};
```

### Using Type parameters in generic constraints

[text](https://www.typescriptlang.org/docs/handbook/2/generics.html#using-type-parameters-in-generic-constraints)

```typescript
interface Database {
    connection: string;
    username: string;
    password: string;
}
function anotherFunction<T, U extends Database>(val1: T, val2: U): object {
    return { val1, val2 };
}
anotherFunction(1, { connection: "localhost", username: "root", password: "root" });
```

```typescript
interface Quiz {
    name: string;
    type: string;
}

interface Course {
    name: string;
    author: string;
    subject: string;
}

class Sellable<T> {
    public cart: T[] = [];
    addToCart(product: T) {
        this.cart.push(product);
    }
}
```

## Arrow Functions

```typescript
function getSearchProducts<T>(products: T[]): T {
    const myIndex = 3;
    return products[myIndex];
}

const getMoreSearchProducts = <T>(products: T[]): T => {
    const myIndex = 3;
    return products[myIndex];
};

const myArrow = (id: number): string => {
    return `id: ${id}`;
};
```

## Narrowing

[Document](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#handbook-content)

### Type Guards

```typescript
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
    id.toLowerCase();
}
```

typeof
type guards

As we’ve seen, JavaScript supports a typeof operator which can give very basic information about the type of values we have at runtime. TypeScript expects this to return a certain set of strings:

-   "string"
-   "number"
-   "bigint"
-   "boolean"
-   "symbol"
-   "undefined"
-   "object"
-   "function"

### `in` operator narrowing

```typescript
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
```

### `instanceof` narrowing

```typescript
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
```

`pet is Fish` is a type predicate.

### Discriminated unions

```typescript
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
function getArea(shape: Shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side * shape.side;
        case "rectangle":
            return shape.width * shape.height;
        // Exhaustiveness checking, this is necessary.
        default:
            const _exhaustiveCheck: never = shape;
            return _exhaustiveCheck;
    }
}
```

> The never type is assignable to every type; however, no type is assignable to never (except never itself).

There is a little more complex example in the documentation.
[Discriminated unions](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#discriminated-unions

```typescript
interface Shape {
    kind: "circle" | "square";
    radius?: number;
    sideLength?: number;
}
```

This is not a good practice. Because:

```typescript
interface Shape {
    kind: "circle" | "square" | "rectangle";
    radius?: number;
    side?: number;
    width?: number;
    height?: number;
}
function getArea(shape: Shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius! ** 2;
        case "square":
            return shape.side! * shape.side!;
        case "rectangle":
            return shape.width! * shape.height!;
        default:
            const _exhaustiveCheck: never = shape.kind;
            return _exhaustiveCheck;
    }
}
```

> You need non null and not undefined checks. The property `kind` matching doesn't assure other properties are present.

**Fix**:  
The `!` operator in TypeScript is a non-null assertion operator. It's a way to tell the compiler "this expression can't be null or undefined here, so don't check for that". However, it's generally better to perform actual runtime checks to ensure that values are not `undefined`.

Here's how you can add undefined checks to your `getArea` function:

```typescript
function getArea(shape: Shape) {
    switch (shape.kind) {
        case "circle":
            if (shape.radius === undefined) {
                throw new Error("Radius is undefined for circle");
            }
            return Math.PI * shape.radius ** 2;
        case "square":
            if (shape.side === undefined) {
                throw new Error("Side is undefined for square");
            }
            return shape.side * shape.side;
        case "rectangle":
            if (shape.width === undefined || shape.height === undefined) {
                throw new Error("Width or height is undefined for rectangle");
            }
            return shape.width * shape.height;
        default:
            const _exhaustiveCheck: never = shape.kind;
            return _exhaustiveCheck;
    }
}
```

In this version of the function, if `radius`, `side`, `width`, or `height` is `undefined`, an error will be thrown. This makes the function safer to use, because it ensures that the necessary properties are defined before trying to use them.

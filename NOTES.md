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

function createAddr({
    name,
    location,
    zip,
}: {
    name: string;
    location: string;
    zip: number;
}) {}

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

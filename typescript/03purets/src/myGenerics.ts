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

interface Database {
    connection: string;
    username: string;
    password: string;
}
function anotherFunction<T, U extends Database>(val1: T, val2: U): object {
    return { val1, val2 };
}
anotherFunction(1, { connection: "localhost", username: "root", password: "root" });

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
export {};

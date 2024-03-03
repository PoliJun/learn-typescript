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

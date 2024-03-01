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

const data: (number | string)[] = [101, "101", 102, "102"];

let seatAllotment: "asile" | "middle" | "window" | "emergency" = "middle";
export {};

const enum SeatChoice {
    WINDOW,
    AISLE,
    MIDDLE,
}
const enum SeatChoice2 {
    WINDOW = "Window",
    AISLE = 20,
    MIDDLE = 30,
}
const mySeat: SeatChoice = SeatChoice.WINDOW;
const mySeat2: SeatChoice2 = SeatChoice2.WINDOW;

console.log(mySeat); // 0
console.log(mySeat2); // Window

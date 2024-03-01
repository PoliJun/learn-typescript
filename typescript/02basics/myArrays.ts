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

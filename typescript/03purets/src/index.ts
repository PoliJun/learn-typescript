// class User {
//     public email: string;
//     private name: string; // private modifier in javascript is not supported, "#" is used in javascript
//     readonly city: string = "";
//     address: string;
//     constructor(email: string, name: string, address: string = "") {
//         this.email = email;
//         this.name = name;
//         this.address = address;
//     }
// }

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

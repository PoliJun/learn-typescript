class User {
    protected _courseCount = 1;
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


class SubUser extends User{
    isFamily: boolean= true;
    changeCourseCount(){
        this._courseCount = 10;
    }
   
}

const subUser = new SubUser("e@e.com", "Hitesh", "####");
subUser.changeCourseCount();
console.log(subUser);
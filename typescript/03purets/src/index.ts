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

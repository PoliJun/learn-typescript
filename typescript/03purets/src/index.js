let user = "John";
console.log(typeof user);
user = 25;
console.log(typeof user);
let res = user + 2;
console.log(typeof res);
console.log(typeof user);
console.log(user + 2);
class User{
    email;
    #name;
    city = "";
    address;
    constructor(email, name, address = ""){
        this.email = email;
        this.#name = name;
        this.address = address;
    }
    name(){
        return this.#name;
    }
}
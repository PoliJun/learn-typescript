interface User {
    readonly dbId: number;
    name: string;
    age: number;
    email: string;
    address?: string;
    endTrial: () => string;
    startTrial(): string;
    getCoupon(couponName: string): string;
}

const hitesh: User = {
    dbId: 1,
    name: "Hitesh",
    age: 21,
    email: "example@example.com",
    startTrial: () => "Trial Started",
    endTrial: () => {
        return "Trial Ended";
    },
    // The parameter name can be anything. It is just a placeholder.
    // But the type should be string.
    getCoupon: (name: string /* this is not recommended */) => {
        return `Coupon code: ${name}, Type: ${typeof name}`; // Coupon code: myname, Type: string
    },
    githubToken: "#######",
};
//You can redefine the interface with the same name. 
interface User {
    githubToken?: string;
}
console.log(hitesh);

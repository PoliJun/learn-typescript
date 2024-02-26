const User = {
    name: "John",
    age: 30,
    email: "example@example.com",
};


function createAddr({
    name,
    location,
    zip,
}: {
    name: string;
    location: string;
    zip: number;
}) {}

function createCourse(): { name: string; price: number } {
    return { name: "math", price: 100 };
}
createCourse();
createAddr({ name: "John", location: "123 Main St", zip: 12345 });

// bad syntax
let newAddr={name: "John", location: "123 Main St", zip: 12345, email: "e@ex.com"};
createAddr(newAddr);


export {};

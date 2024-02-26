let user = { name: "John", age: 30 };
// Cannot redeclare block-scoped variable 'user'.ts(2451)
// let user: {
//     name: string;
//     age: number;
// }
console.log("Hello World");
// Property 'email' does not exist on type '{ name: string; age: number; }'.ts(2339)
// any
console.log(user.email);

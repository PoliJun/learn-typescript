// This is an
const user: (string | number)[] = [1, "Rajat", 25, "Developer", "Gurgaon", "India"];

// Order matters
const user1: [string, number, string, boolean, string] = ["Rajat", 25, "Developer", true, "India"];

// This should not occur in your code. But ts allows call this method on a tuple. 
// Tuple is an array with fixed number of elements and fixed types.
user1.push("Gurgaon");
console.log(user1);

export {}; // This is to avoid TS error: Cannot redeclare block-scoped variable 'user'.ts(2451)

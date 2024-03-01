"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// This is an 
var user = [1, 'Rajat', 25, 'Developer', 'Gurgaon', 'India'];
// Order matters
var user1 = ['Rajat', 25, 'Developer', true, 'India'];
// This should not occur in your code. But ts allows call this method on a tuple.
user1.push('Gurgaon');
console.log(user1);

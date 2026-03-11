// Creating a set

let s = new Set(); // Empty Set

let s1 = new Set([1, 3, 4, 1]); //through Array

// Set Methods
// add Method : Adds elements to the set

let num = new Set();
num.add(1);
num.add(2);
num.add(0);

// has Method : check whether the Set has the element

let num1 = new Set([1, 2, 3]);
let res = num.has(2); // return Boolean

// delete Method : deletes element from the set

let num2 = new Set([1, 2, 3]);
num2.delete(2);

// console.log(num2.size); // returns the size of the Set

// clear method
let n = new Set([1, 2, 3]);
n.clear();

// set to Array
let num3 = new Set([1, 2, 3]);
let arr = [...num3];
console.log(arr);

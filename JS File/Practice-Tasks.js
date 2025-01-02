/*
** Task **

Array
- Array - Sum of Elements - [1, 2, 3, 4, 5]
- Adding Elements to an Array
- Remove Elements to an Array
- Find the Largest Number
- Check if Array Contains a Specific Element
- Find the Average of an Array

Objects
- const person = { name: "Alice", age: 25, city: "New York" }; 
- Do some operations like update the name , city add some new key like state , country.
- check how to "freeze" object.
- Delete a Property
*/
// let arr1 = [1,2,3,4,5];
// let sum = 0;
// for (let value of arr1) {
//     sum += value;
// }
// let addition = sum;

// console.log(`The sum of all elements = ${addition}`);

// arr1.push(22);
// arr1.splice(1,1);
// console.log(arr1);
// let elementToCheck = 4;
// let containsElement = arr1.includes(elementToCheck);
// console.log(`Does the array contain ${elementToCheck}? ${containsElement}`);
// let largestNumber = Math.max(...arr1);
// console.log("Largest number in the array:", largestNumber);

const person = { name: "Alice", age: 25, city: "New York" };
console.log(person);

// Update the name and city
person.name = "Bob";
person.city = "Los Angeles";
console.log("Updated person:", person);

// Add new keys
person.state = "California";
person.country = "USA";
console.log("Person with new properties:", person);

// Freeze the object
Object.freeze(person);

// Attempt to update or add properties (these won't work because the object is frozen)
person.name = "Charlie"; // Won't change
person.city = "San Francisco"; // Won't change
person.zipCode = 90001; // Won't be added

console.log("After attempting to modify frozen object:", person);

// Delete the `age` property
delete person.age; // This will not work if the object is frozen
console.log("After deleting the age property:", person);


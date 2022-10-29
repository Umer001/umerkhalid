const fruits = [];
const numbers = [1, 2, 3, 4, 6, 7, 8, 9]
fruits.push("apple");
fruits.push("banana");

fruits.unshift("Gava");//store at start of array
fruits.shift();         //remove from start of array
console.log(fruits)


let num1 = (arg) => (arg == 7);
let num = numbers.find(num1)////return value not index
console.log(num);
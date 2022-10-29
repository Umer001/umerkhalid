const fruits = [];
const numbers = [1, 2, 3, 4, 6, 7, 8, 9, 7]

const objarray=[{ name: "umer", class: "BSCS", address: { city: "islamabad", country: "Pak" } },{ name: "talha", class: "BSCS", address: { city: "rwp", country: "Pak" } }];
fruits.push("apple");
fruits.push("banana");

fruits.unshift("Gava");//store at start of array
fruits.shift();         //remove from start of array
//console.log(fruits)

let findit=7;
let findnum = (arg) => (arg == findit);
let filternum= numbers.filter(findnum);

console.log(numbers.find(findnum)) //return value 
console.log(numbers.filter(findnum))  //return array   
console.log(objarray.find((arg) => (arg == "umer")));
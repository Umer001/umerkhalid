const fruits = [];
const numbers = [1, 2, 3, 4, 6, 7, 8, 9, 7];

const objarray = [
  {
    name: "umer",
    class: "BSCS",
    address: { city: "islamabad", country: "Pak" },
  },
  { name: "talha", class: "BSCS", address: { city: "rwp", country: "Pak" } },
];
fruits.push("apple");
fruits.push("banana");

fruits.unshift("Gava"); //store at start of array
//fruits.shift(); //remove from start of array
console.log(fruits);

let findit = 7;
let findnum = (arg) => arg == findit;
let filternum = numbers.filter(findnum);

console.log(numbers.find(findnum)); //return value
console.log(numbers.filter(findnum)); //return array
console.log(objarray.find((obj) => obj.name == "umer"));

const arr = [1, 4, 6];
let totalsum = arr.reduce((acc, cur) => {
  ///acc me values store ho ge, cur me value aye ge
  return (acc += cur);
}, 0); ///0 sy intialize karwa rhy

console.log("🚀 ~ file: arrays.js ~ line 34 ~ totalsum", totalsum);

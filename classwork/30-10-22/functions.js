function myFunction(str) {
  return str + " my function";
}

const myArrowFunction = (str) => {
  str + " my arrow function"; ///we user arrow functions because they aquire less memory
};

const myArrowFunction2 = (str) => str + " my arrow function";

myFunction("Hello");
console.log(myFunction("Hello"));
myArrowFunction("Hello");
console.log(myArrowFunction("Hello"));
console.log(myArrowFunction2("Hello"));

////function statement
function funName() {}

///////function expression ()
let sayHi = function () {
  alert("Hello");
};

const x = (a, b) => {
  return a * b;
};
console.log("🚀 ~ file: functions.js ~ line 29 ~ x", x);

///Function Declatrion same as function statement

///annonymus function
(() => console.log("GeeksforGeeks....!"))();

(function () {
  console.log("GeeksforGeeks....!");
})();
////name function expression

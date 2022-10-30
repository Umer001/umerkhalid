function myFunction(str) {
  return str + " my function";
}

const myArrowFunction = (str) => {
  return str + " my arrow function";
};

const myArrowFunction2 = (str) => str + " my arrow function";

myFunction("Hello");
console.log(myFunction("Hello"));
myArrowFunction("Hello");
console.log(myArrowFunction("Hello"));
console.log(myArrowFunction2("Hello"));

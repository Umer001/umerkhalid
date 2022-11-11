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

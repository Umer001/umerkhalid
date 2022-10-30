///spread operator makecopy of str,array etc

const arr = ["root", "breanches", "tree"];
let arr2 = [...arr, "leave"];
//console.log(arr2);

const obj = {
  name: "umer",
  class: "BSCS",
  address: { city: "islamabad", country: "Pak" },
};

let newobj = { ...obj, key: "value" };
newobj.key = "Test";
console.log(newobj);
console.log(arr.fill("fruit", 1, 2));

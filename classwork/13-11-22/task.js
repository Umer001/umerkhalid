const users = [
  { firstName: "Mark", lastName: "Zukerberg", age: 38 },
  { firstName: "Donald", lastName: "Trump", age: 75 },
  { firstName: "Elon", lastName: "Musk", age: 50 },
  { firstName: "Charlize", lastName: "Theron", age: 47 },
  { firstName: "Tom", lastName: "Hardy", age: 75 },
];

/////////////////FIRST TASK//////////////////
fullNames = users.map((elem) => elem.firstName + " " + elem.lastName);
console.log(fullNames);

/////////////////Second TASK//////////////////
function countAge(age, arr) {
  let count = 0;
  arr.forEach((element) => {
    if (element.age == age) {
      count++;
    }
  });

  return count;
}

let obj = {};
users.forEach((element) => {
  obj[element.age] = countAge(element.age, users);
});
console.log(obj);

/////////////////Third TASK//////////////////
let AgeLess38 = [];
users.forEach((elem) => {
  if (elem.age < 50) {
    AgeLess38.push(elem.firstName);
  }
});
console.log(AgeLess38);

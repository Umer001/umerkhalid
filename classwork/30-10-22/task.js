const addition = (num1, num2) => num1 + num2;
const subtraction = (num1, num2) => num1 - num2;

//console.log(addition(10, 5));
//console.log(subtraction(10, 5));

const covert = (temp, scale) => {
  if (scale == "F") return `${(temp * 9) / 5 + 32} F`;
  else return `${((temp - 32) * 5) / 9} C`;
};

//console.log(covert(99, "F")); //give celcius value and get F value
//console.log(covert(210, "C")); //give faraehite value and  get celcisu value

const obj = {
  name: "Umer",
  uni: "QAU",
  cgpa: (marks) => `${((marks / 1100) * 100).toFixed(2)} %`,
};
//console.log(obj.cgpa(826));

/////////////////////////////////
/////////////NEW TASK////////////
/////////////////////////////////

function myFunc(num, str) {
  let arr = [];
  for (i = 0; i < num; i++) {
    arr.push(str);
  }

  return arr;
}

const xyz = (num, str) => {
  return Array(num).fill(str);
};
console.log(xyz(3, "b"));

console.log(myFunc(3, "a"));

function removeExtra(arr) {
  const newArr = [];
  arr.forEach((element) => {
    //if (typeof element == "number") {
    if (Number.isInteger(element)) {
      newArr.push(element);
    }
  });

  return arr.filter((el) => el);
}
arr1 = [0, 1, false, 2, undefined, " ", 3];
console.log(removeExtra(arr1));
arr2 = arr1;

arr2[0] = 4;
console.log(removeExtra(arr1));

////take function as argument and return function, value,array
///
let radius = [2, 3, 4];
const area = (param) => param * param * Math.PI;

const calculate = (formula, radiusArr) => {
  let output = [];
  for (let i = 0; i < radiusArr.length; i++) {
    output.push(area(radiusArr[i]));
  }
  return output;
};
console.log(calculate(area, radius));

/////Make builtin function  useing prototype

Array.prototype.umer = (formula, radiusArr) => {
  let output = [];
  for (let i = 0; i < radiusArr.length; i++) {
    output.push(area(radiusArr[i]));
  }
  return output;
};
radius.umer(area, radius);
console.log(radius.umer(area, radius));

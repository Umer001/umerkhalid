const addition = (num1, num2) => num1 + num2;
const subtraction = (num1, num2) => num1 - num2;

//console.log(addition(10, 5));
//console.log(subtraction(10, 5));

const covert = (temp, scale) => {
  if (scale == "F") return `${(temp * 9) / 5 + 32} F`;
  else return `${((temp - 32) * 5) / 9} C`;
};

console.log(covert(99, "F")); //give celcius value and get F value
console.log(covert(210, "C")); //give faraehite value and  get celcisu value

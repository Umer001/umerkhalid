const numbers = [1, 8, 3, 4, 6, 7, 8, 9, 7];

let arr = numbers.map((value) => {
  return { number: value * 2 };
});

console.log(arr);

arr.forEach((obj) => {
  console.log(obj.number);
});

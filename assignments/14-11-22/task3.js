//Write a program that receives an array of
// numbers and returns one object containing two
// arrays, one is containing positive numbers and
// other is containing negative numbers. (e.g.
// {positive: [], negative: []}).

function posNegSeprattor(arr) {
  let negitiveArr = [];
  let positiveArr = [];
  arr.forEach((number) => {
    number < 0 ? negitiveArr.push(number) : positiveArr.push(number);
  });
  return { positive: positiveArr, negitive: negitiveArr };
}
var arr = [2, -5, -6, 3, 8, -9, 10, 50, -100];
console.log(posNegSeprattor(arr));

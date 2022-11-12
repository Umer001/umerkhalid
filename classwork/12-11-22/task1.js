function fun(arr) {
  let newarr = [];
  arr.forEach((element) => {
    if (!isNaN(element)) {
      newarr.push(parseInt(element));
    } else if (element == "c") {
      newarr.pop();
    } else if (element == "d" && newarr.length > 0) {
      let num = newarr[newarr.length - 1];
      newarr.push(num * num);
    } else if (element == "+" && newarr.length > 1) {
      let num = newarr[newarr.length - 1] + newarr[newarr.length - 2];

      newarr.push(num);
    }
  });

  let sum = 0;
  newarr.forEach((element2) => {
    sum = parseInt(element2) + sum;
  });

  return sum;
}

const arr = ["4", "5", "c", "d", "+"];

console.log(fun(arr));

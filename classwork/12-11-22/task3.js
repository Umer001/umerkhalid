function validate(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] == num && i != j) {
        return `pair with a given sum ${num} is (${arr[i]},${arr[j]})`;
      }
    }
  }
  return "no valid pair exist for this number";
}

function validate2(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] == num && i != j) {
        return `pair with a given sum ${num} is (${arr[i]},${arr[j]})`;
      }
    }
  }
  return "no valid pair exist for this number";
}

console.log(validate([1, 5, 15, 4, 8, 10], 11));

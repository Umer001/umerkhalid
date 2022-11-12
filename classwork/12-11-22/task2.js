function countRepElement(arr, element) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == element) {
      count++;
    }
  }

  return count;
}

function getHighestNumber(parentArr) {
  let highestNum1 = 0;

  for (let i = 0; i < parentArr.length; i++) {
    let childArr = parentArr[i];
    let highestNum2 = 0;
    for (let j = 0; j < childArr.length; j++) {
      if (
        childArr[j + 1] > childArr[j] &&
        highestNum1 < childArr[j + 1] &&
        countRepElement(childArr, childArr[j + 1]) < 2
      ) {
        highestNum1 = childArr[j + 1];
        highestNum2 = highestNum1;
      }
    }
  }

  return highestNum1;
}

const arr = [
  [1, 2, 3, 4, 5, 1, 2, 3],
  [6, 7, 9, 9, 11, 1, 2, 7, 11],
  [0, 1, 2, 3, 12, 12],
];

console.log(getHighestNumber(arr));

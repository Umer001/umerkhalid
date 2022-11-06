const abc = {
  a: "a",
  b: "b",
  c: {
    d: "d",
  },
};

abc.b = "t";
const { b, ...res } = abc; ///remaining object will save in res

//console.log(res);

const arr3 = [1, 2, 3, 4, 5, 6];
// const three = ...arr3[2];
// console.log(three);

const [, e, a, ...re] = arr3;
//console.log(e, "   ", re);

//raw();

const raw = function () {
  // console.log("avbc");
};

let cardno = "4242 4242 2492 4242";

function checkFormat(arr) {
  let flag = true;
  arr.forEach((element) => {
    if (element.length != 4 || !Number.isInteger(element)) {
      flag = false;
    }
  });

  if (flag) {
    return true;
  } else {
    return false;
  }
}

const checkCardValidity = (cardno) => {
  let arr = cardno.split(" ");

  if (arr.length == 4) {
    if (checkFormat(arr)) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

if (checkCardValidity(cardno)) {
  console.log("corrct format");
} else {
  console.log("wrong format");
}

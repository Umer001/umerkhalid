let str = "javascript";
let arr = [];
let arr2 = [];
const reverseString = (str) => {
  for (let i = 0; i < str.length; i++) {
    arr.unshift(str.charAt(i));
  }

  return arr.join();
};

const reverseString2 = (str) => {
  let newstr = "";
  for (let i = str.length; i >= 0; i--) {
    arr2.push(str.charAt(i));
  }

  return arr2.join();
};

const reverseString3 = (str) => {
  let newstr = "";
  for (let i = str.length; i >= 0; i--) {
    newstr += str.charAt(i);
  }

  return newstr;
};
console.log(reverseString(str));
console.log(reverseString2(str));
console.log(reverseString3(str));

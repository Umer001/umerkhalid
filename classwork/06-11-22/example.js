function resolveAfter2Seconds() {
  // taken from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 2000);
  });
}

const asyncFuntion = async () => {
  const result = await resolveAfter2Seconds();
  console.info("asyncFuntion finish, result is: ", result);
};

const first = async () => {
  await asyncFuntion();
  console.log("first completed");
};

const second = () => {
  console.log("second completed");
};

function main() {
  first();
  second();
}

//main();

//console.log("This is the first line");
function parent() {
  console.log("This is inside parent");
  function child() {
    console.log("This is inside child");
  }
  child();
}
//parent();
//console.log("This is the last line");

class test {
  constructor(name) {
    this.name = name;
  }
  normal(params) {
    setTimeout(function test() {
      console.log(this.name);
    }, 200);
  }
  arrow(params) {
    setTimeout(() => {
      console.log(this.name);
    }, 200);
  }
}
t = new test("Umer");

t.normal();
t.arrow();

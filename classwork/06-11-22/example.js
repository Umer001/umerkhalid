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
  debugger;
};

const second = () => {
  console.log("second completed");
  debugger;
};

async function main() {
  await first();
  await second();
}

main();

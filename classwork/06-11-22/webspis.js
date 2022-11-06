console.log("test");

setTimeout(function cd() {
  setTimeout(function cd() {
    console.log("test 2.1");
  }, 2000);

  console.log("test 2.0");
}, 1000);
console.log("test3");

async function getApi() {
  const data = await fetch("https://fakestoreapi.com/products");
  const res = await data.json();

  console.log(res);
}
getApi();

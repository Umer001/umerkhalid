async function getApi() {
  const data = await fetch("https://fakestoreapi.com/products");
  const res = await res.json();

  console.log(res);
}

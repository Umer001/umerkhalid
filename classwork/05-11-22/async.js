async function getApi() {
  const data = await fetch("https://fakestoreapi.com/products");
  const res = await data.json();

  console.log(data);
}

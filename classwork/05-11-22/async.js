async function getApi() {
  const data = await fetch("HTTPS://JSONPLACEHOLDER.TYPICODE.COM/USERS");
  const res = await data.json();

  console.log(res);
}
getApi();

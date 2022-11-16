// Write a program that accepts a userId and fetch user details from
// HTTPS://JSONPLACEHOLDER.TYPICODE.COM/USERS endpoint using async function.

async function fetchUser(userid) {
  let data = await fetch("HTTPS://JSONPLACEHOLDER.TYPICODE.COM/USERS").then(
    (response) => {
      return response.json();
    }
  );
  return data.filter((entry) => entry.id == userid);
}
function displayResult(user) {
  console.log(user);
}
async function main(userid) {
  displayResult(await fetchUser(userid));
}
main(5); ///pass user id here

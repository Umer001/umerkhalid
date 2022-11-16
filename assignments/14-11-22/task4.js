// Write a program that accepts string of multiple
// words, abbreviate the string and return the word
// initials. (e.g. ‘Brendan Eich’ => BE).

function abbreviator(str) {
  let initials = "";
  str.split(" ").forEach((element) => {
    initials += element.charAt(0);
  });
  return initials;
}

console.log(abbreviator("Brendan Eich"));

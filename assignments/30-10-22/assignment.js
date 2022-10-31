const zero = (num) => (!num ? 0 : eval(`${0}${num}`));
const one = (num) => (!num ? 1 : eval(`${1}${num}`));
const two = (num) => (!num ? 2 : eval(`${2}${num}`));
const three = (num) => (!num ? 3 : eval(`${3}${num}`));
const four = (num) => (!num ? 4 : eval(`${4}${num}`));
const five = (num) => (!num ? 5 : eval(`${5}${num}`));
const six = (num) => (!num ? 6 : eval(`${6}${num}`));
const seven = (num) => (!num ? 7 : eval(`${7}${num}`));
const eight = (num) => (!num ? 8 : eval(`${8}${num}`));
const nine = (num) => (!num ? 9 : eval(`${9}${num}`));

const add = (num) => `+${num}`;
const sub = (num) => `-${num}`;
const times = (num) => `*${num}`;
const divide = (num) => `/${num}`;

console.log("Result: " + nine(times(nine())));

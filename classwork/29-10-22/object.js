///use object bc variables ki usage sy bachnay k lia
///object k sath dot lga hum call kar skty..har variable ko yad rakhna nai parta
///memory save hojati ha
const obj = {
  name: "umer",
  class: "BSCS",
  address: {
    city: "islamabad",
    country: "Pak",
  },
};

//console.log(obj.address.city);
//console.log(obj["address"]["country"]); //Use when there is some variable instead of key,jb user sy valueleni ho

const employer = {
  employee_id: "24",
  employee_name: "Talha,",
  employee_company: "Jazz",
  company_address: { city: "Islamabad", country: "PAK" },
  employer_address: { city: "Fsd", country: "PAK" },
  employer_salary: "50k",
};

let employer2 = {
  employee_id: "24",
  employee_name: "Talha,",
  employee_company: "Jazz",
  company_address: { city: "Islamabad", country: "PAK" },
  greet() {
    return this.company_address.city; //this will pass the current object refrence
  },
  greet2: () => {
    return employer2.company_address.city; //this will pass the current object refrence
  },
};
console.log(employer2.greet2());

/////object destrtution/////////////////   bar bar object and dot sy bachnay k lia,
////The destructuring assignment syntax is a JavaScript expression that makes it
//// possible to unpack values from arrays, or properties from objects, into distinct variables.

//const { urdu, maths } = marks;
//console.log(urdu);

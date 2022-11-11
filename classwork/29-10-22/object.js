const obj = {
  name: "umer",
  class: "BSCS",
  address: {
    city: "islamabad",
    country: "Pak",
  },
};

//console.log(obj.address.city);
console.log(obj["address"]["country"]); //Use when there is some variable instead of key

const employer = {
  employee_id: "24",
  employee_name: "Talha,",
  employee_company: "Jazz",
  company_address: { city: "Islamabad", country: "PAK" },
  employer_address: { city: "Fsd", country: "PAK" },
  employer_salary: "50k",
};

const employer2 = {
  employee_id: "24",
  employee_name: "Talha,",
  employee_company: "Jazz",
  company_address: { city: "Islamabad", country: "PAK" },
  greet() {
    return this.company_address.city; //this will pass the current object refrence
  },
};
console.log(employer2.greet());

/////object destrtution/////////////////   bar bar object and dot sy bachnay k lia

const { urdu, maths } = marks;
console.log(urdu);

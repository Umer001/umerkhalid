const obj = {
    name: "umer", class: "BSCS", address:
    {
        city: "islamabad",
        country: "Pak"
    }

};

 
//console.log(obj.address.city);
console.log(obj["address"]["country"]);//Use when there is some variable instead of key

const employer = {
    employee_id: "24",
    employee_name: "Talha,",
    employee_company: "Jazz",
    company_address:
        { city: "Islamabad", country: "PAK" },
    employer_address:
        { city: "Fsd", country: "PAK" },
    employer_salary: "50k",
}

console.log(employer.company_address.city,employer.employer_address.city);
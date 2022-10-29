const objarray = [
    { employee_id: "1", employee_name: "Talha", employee_company: "Jazz", company_address: { city: "Islamabad", country: "PAK" }, employer_address: { city: "Fsd", country: "PAK" }, employer_salary: 15000, islam: true },
    { employee_id: "2", employee_name: "Hamza", employee_company: "Ufone", company_address: { city: "Islamabad", country: "PAK" }, employer_address: { city: "Isb", country: "PAK" }, employer_salary: 15000, islam: true },
    { employee_id: "3", employee_name: "Umer", employee_company: "Warid", company_address: { city: "Islamabad", country: "PAK" }, employer_address: { city: "Rwp", country: "PAK" }, employer_salary: 5000, islam: false },
    { employee_id: "4", employee_name: "Ahmed", employee_company: "Jazz", company_address: { city: "Islamabad", country: "PAK" }, employer_address: { city: "Fsd", country: "PAK" }, employer_salary: 25000, islam: true },
    { employee_id: "5", employee_name: "Ali", employee_company: "Jazz", company_address: { city: "Islamabad", country: "PAK" }, employer_address: { city: "Fsd", country: "PAK" }, employer_salary: 35000, islam: true },
    { employee_id: "6", employee_name: "Hina", employee_company: "Warid", company_address: { city: "Islamabad", country: "PAK" }, employer_address: { city: "Lhr", country: "PAK" }, employer_salary: 35000, islam: false },
    { employee_id: "7", employee_name: "Ayub", employee_company: "Ufone", company_address: { city: "Islamabad", country: "PAK" }, employer_address: { city: "Fsd", country: "PAK" }, employer_salary: 15000, islam: true },
    { employee_id: "8", employee_name: "Talha", employee_company: "Warid", company_address: { city: "Islamabad", country: "PAK" }, employer_address: { city: "Fsd", country: "PAK" }, employer_salary: 5000, islam: false },
    { employee_id: "9", employee_name: "Ahmed", employee_company: "Jazz", company_address: { city: "Islamabad", country: "PAK" }, employer_address: { city: "Que", country: "PAK" }, employer_salary: 45000, islam: true },
    { employee_id: "10", employee_name: "Talha", employee_company: "Ufone", company_address: { city: "Islamabad", country: "PAK" }, employer_address: { city: "Fsd", country: "PAK" }, employer_salary: 5000, islam: true },

];

let rez = objarray.find(args => args.islam); //return all employees having islam religion

let rez2 = objarray.filter(args => (args.employer_salary > 25000)); //return all employees having salary greater than 25k

// rez2.forEach(element => 
//     console.log(element.employee_name,element.employer_salary)
// );


let empobj = {};
objarray.forEach(obj => {
    if (obj.employee_name == "Ahmed") {
        empobj = obj;
    }

}
)

//console.log(empobj);


const numarr = [2,3,6,9,15,30,33,40,51];
 console.log(numarr.filter(val=>(val%2==0))); //return num arr mod of 2


for(let i=1;i<=50;i++){
    flag=false;

    if(i%3==0 && (i%5==0)){
        console.log(i+" Fuzz Buzz")
        
    }
   else if(i%3==0){
        console.log(i+" Fuzz")
        
    }
    else if(i%5==0){
        console.log(i+" Buzz")
        
    }
    else if(i%7==0){
        console.log(i+" Dazz")
        
    }
    else {
        console.log(i+" num")

    }
}

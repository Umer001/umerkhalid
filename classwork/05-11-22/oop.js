/////////////////////////////
/////////Ecapsulation////////
/////////////////////////////
//we use setter methods to write the data and getter methods read that data.//

const employerSalary = {
  baseSalary: 30000,
  overtime: 12,
  bonus: 3000,
  getWage() {
    return this.baseSalary + this.overtime * this.bonus;
  },
};

//console.log(employerSalary.getWage());

const studentPercentage = {
  english: 50,
  urdu: 70,
  maths: 75,
  getPercentage() {
    return ((this.english + this.urdu + this.maths) / 300) * 100 + "%";
  },
};
studentPercentage.english =
  studentPercentage.urdu =
  studentPercentage.maths =
    100;
console.log(studentPercentage.getPercentage());

/////////////////////////////
////////Abstraction /////////
////////////////////////////

// make functions and variables private if they have no use to public
////use of private and public

/////////////////////////////
////////Inhertance /////////
////////////////////////////

/////////////////////////////
////////Polymorphism /////////
////////////////////////////

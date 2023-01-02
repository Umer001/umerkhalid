import React from "react";
import { useState } from "react";
const FormValidation = () => {
  const [dislplay, setDislplay] = useState("");
  function validate(e) {
    e.preventDefault();
    const errors = [];
    let email = e.target.elements.email.value;
    let pass = e.target.elements.password.value;
    let confirm = e.target.elements.confirmpassword.value;
    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (email == "" || pass == "" || confirm == "") {
      errors.push("All value must be filled");
    }

    if (!email.match(validRegex)) {
      errors.push("email must include @ sign");
    }
    if (pass.length < 8) {
      console.log(
        "🚀 ~ file: formvalidation.jsx:22 ~ validate ~ pass.length",
        pass.length
      );
      errors.push("pass must me 8 charters");
    }
    if (pass != confirm) {
      console.log(
        "🚀 ~ file: formvalidation.jsx:29 ~ validate ~ confirm",
        confirm
      );
      console.log("🚀 ~ file: formvalidation.jsx:29 ~ validate ~ pass", pass);
      errors.push("passwords should match");
    }
    if (errors.length > 0) {
      setDislplay(errors.toString());
    } else {
      setDislplay("User Created");
    }
  }

  return (
    <div className="container">
      <form className="row" onSubmit={validate}>
        <h2 className="text-center">Form</h2>
        <div className="col-md-12">
          <label className="labels">Email </label>
          <input
            name="email"
            type="text"
            className="form-control"
            placeholder="enter email "
          />
        </div>
        <div className="col-md-12">
          <label className="labels">Password </label>
          <input
            name="password"
            type="password"
            className="form-control"
            placeholder="enter pass "
          />
        </div>
        <div className="col-md-12">
          <label className="labels">Confirm Pass </label>
          <input
            name="confirmpassword"
            type="password"
            className="form-control"
            placeholder="enter confirm pass "
          />
        </div>
        <div className="col-md-12">
          <input
            type="submit"
            className="btn btn-success my-2"
            value="Submit"
          />
        </div>
      </form>
      <p>{dislplay}</p>
    </div>
  );
};

export default FormValidation;

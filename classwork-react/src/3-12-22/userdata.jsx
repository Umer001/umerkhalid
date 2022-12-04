import React, { useState } from "react";
import Input from "./input";
import Radio from "./radio";
import TextArea from "./textarea";

const UserData = () => {
  const [states, setStates] = useState({
    devName: "",
    username: "",
    email: "",
    password: "",
    address: "",
    feedback: "",
    satisfy: "Yes",
    flag: false,
  });

  const printData = () => {
    setStates({ ...states, flag: true });
  };
  const setState = (e) => {
    setStates({ ...states, flag: true });
    switch (e.target.name) {
      case "devname":
        setStates({ ...states, devName: e.target.value });
        break;
      case "email":
        setStates({ ...states, email: e.target.value });
        break;
      case "username":
        setStates({ ...states, username: e.target.value });
        break;
      case "password":
        setStates({ ...states, password: e.target.value });
        break;
      case "address":
        setStates({ ...states, address: e.target.value });
        break;
      case "feedback":
        setStates({ ...states, feedback: e.target.value });
        break;
      case "satisfy":
        setStates({ ...states, satisfy: e.target.value });
        break;
    }
  };

  return (
    <div className="container">
      <div className="row  mt-5">
        <div className="col-md-6">
          <form autoComplete="off" className="form-inline">
            <Input
              id="devname"
              title="Developer Name"
              name="devname"
              type="text"
              value={states.devName}
              change={(event) => setState(event)}
            />
            <Input
              id="username"
              title="Username"
              type="username"
              name="username"
              value={states.username}
              change={(event) => setState(event)}
            />
            <Input
              id="email"
              title="Email"
              value={states.email}
              type="email"
              name="email"
              change={(event) => setState(event)}
            />
            <Input
              id="password"
              title="Password"
              type="password"
              name="password"
              value={states.password}
              change={(event) => setState(event)}
            />
            <Input
              id="address"
              title="Address"
              type="address"
              name="address"
              change={(event) => setState(event)}
              value={states.address}
            />
            <TextArea
              id="feedback"
              title="FeedBack"
              name="feedback"
              change={(event) => setState(event)}
              value={states.feedback}
            />
            <label className="mt-2">Satisfied: </label>
            <Radio
              id="satisfy-yes"
              name="satisfy"
              value="Yes"
              stateval={states.satisfy}
              change={(event) => setState(event)}
            />
            <Radio
              id="satisfy-no"
              name="satisfy"
              value="No"
              stateval={states.satisfy}
              change={(event) => setState(event)}
            />
            <button
              type="button"
              className="btn btn-primary mt-2"
              onClick={() => printData()}
            >
              Submit
            </button>
          </form>
        </div>
        {states.flag ? (
          <div className="col-md-6">
            <h1>User Data</h1>
            <p>Name: {states.devName}</p>
            <p>Username: {states.username}</p>
            <p>Email: {states.email}</p>
            <p>Password: {states.password}</p>
            <p>Address: {states.address}</p>
            <p>Feedback: {states.feedback}</p>
            <p>
              Satisfied:
              {states.satisfy == "Yes" ? "Satisfied" : "Not Satisfied"}
            </p>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default UserData;

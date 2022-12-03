import React, { useState } from "react";
import Input from "./input";
import Radio from "./radio";
import TextArea from "./textarea";

const UserInfo = () => {
  const [devName, setDevName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [feedback, setFeedback] = useState("");
  const [satisfy, setSatisfy] = useState("");
  const [flag, setFalg] = useState(false);

  const printData = () => {
    setFalg(true);
  };
  const setState = (e) => {
    switch (e.target.name) {
      case "devname":
        setDevName(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "username":
        setUsername(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      case "address":
        setAddress(e.target.value);
        break;
      case "feedback":
        setFeedback(e.target.value);
        break;
      case "satisfy":
        setSatisfy(e.target.value);
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
              value={devName}
              change={(event) => setState(event)}
            />
            <Input
              id="username"
              title="Username"
              type="username"
              name="username"
              value={username}
              change={(event) => setState(event)}
            />
            <Input
              id="email"
              title="Email"
              value={email}
              type="email"
              name="email"
              change={(event) => setState(event)}
            />
            <Input
              id="password"
              title="Password"
              type="password"
              name="password"
              value={password}
              change={(event) => setState(event)}
            />
            <Input
              id="address"
              title="Address"
              type="address"
              name="address"
              change={(event) => setState(event)}
              value={address}
            />
            <TextArea
              id="feedback"
              title="FeedBack"
              name="feedback"
              change={(event) => setState(event)}
              value={feedback}
            />
            <label className="mt-2">Satisfied: </label>
            <Radio
              id="satisfy-yes"
              name="satisfy"
              value="Yes"
              change={(event) => setState(event)}
            />
            <Radio
              id="satisfy-no"
              name="satisfy"
              value="No"
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
        {flag ? (
          <div className="col-md-6">
            <h1>User Data</h1>
            <p>Name: {devName}</p>
            <p>Username: {username}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Address: {address}</p>
            <p>Feedback: {feedback}</p>
            <p>Satisfied: {satisfy}</p>
          </div>
        ) : (
          "Fill Form and hit the submit button"
        )}
      </div>
    </div>
  );
};

export default UserInfo;

import React, { useEffect } from "react";
import { useState } from "react";
const Profile = () => {
  const [name, setName] = useState("Muhammad Umer");
  const [surname, setSurname] = useState("");
  const [initaial, setInitaial] = useState("");
  const [email, setEmail] = useState("");
  const [education, setEducation] = useState("");
  const [mobile, setMobile] = useState("");
  const [state, setState] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [postcode, setPostcode] = useState("");
  const [image, setImage] = useState(null);

  const setInitails = () => {
    let str = name.split(" ");
    let firstchar = str[0][0];
    let secchar = str[1][0] ? str[1][0] : "";
    setInitaial(firstchar + secchar);
  };
  useEffect(() => {
    setInitails();
  }, []);

  const setInputState = (e) => {
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        setInitails();
        break;
      case "surname":
        setSurname(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "education":
        setEducation(e.target.value);
        break;
      case "mobile":
        setMobile(e.target.value);
        break;
      case "state":
        setState(e.target.value);
        break;
      case "address":
        setAddress(e.target.value);
        break;
      case "country":
        setCountry(e.target.value);
        break;
      case "postcode":
        setPostcode(e.target.value);
        break;
    }
  };
  const imageChange = (e) => {
    // if (e.target.files && e.target.files.length > 0) {
    //   setImage(URL.createObjectURL(e.target.files[0]));
    // }

    const reader = new FileReader(e);
    reader.readAsDataURL(e.target.files[0]);
    reader.onloadend = () => {
      setImage(reader.result);
    };
  };
  return (
    <div className="container rounded bg-white mt-5 mb-5">
      <div className="row">
        <div className="col-md-4 border-right">
          <div className="d-flex flex-column align-items-center text-center p-3 py-5">
            <label htmlFor="formFile">
              {image ? (
                <img
                  className="rounded-circle mt-5"
                  width="150px"
                  height="150px"
                  src={image}
                  style={{ cursor: "pointer" }}
                />
              ) : (
                <div
                  className="mt-5"
                  style={{
                    width: "150px",
                    height: "150px",
                    background: "grey",
                    color: "white",
                    borderRadius: "50%",
                    cursor: "pointer",
                    fontSize: "20px",
                    textTransform: "uppercase",
                  }}
                >
                  <span
                    style={{
                      position: "relative",
                      top: "60px",
                    }}
                  >
                    {initaial}
                  </span>
                </div>
              )}
            </label>
            <input
              className="form-control  mt-1"
              type="file"
              hidden
              id="formFile"
              onChange={imageChange}
              accept="image/*"
            ></input>
            <span className="font-weight-bold  mt-2">{`${name} ${surname}`}</span>
            <span className="text-black-50">{email}</span>
            <span> {mobile}</span>
            <span> {email}</span>
            <span> {education}</span>
            <span> {address}</span>
            <span> {country}</span>
            <span> {postcode}</span>
            <span> {state}</span>
          </div>
        </div>
        <div className="col-md-8 border-right">
          <div className="p-3 py-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="text-right">Profile Settings</h4>
            </div>
            <div className="row mt-2">
              <div className="col-md-6">
                <label className="labels">Name</label>
                <input
                  name="name"
                  type="text"
                  className="form-control"
                  placeholder="first name"
                  value={name}
                  onChange={(e) => setInputState(e)}
                />
              </div>
              <div className="col-md-6">
                <label className="labels">Surname</label>
                <input
                  name="surname"
                  type="text"
                  className="form-control"
                  value={surname}
                  onChange={(e) => setInputState(e)}
                  placeholder="surname"
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-12">
                <label className="labels">Mobile Number</label>
                <input
                  name="mobile"
                  type="text"
                  className="form-control"
                  placeholder="enter phone number"
                  value={mobile}
                  onChange={(e) => setInputState(e)}
                />
              </div>
              <div className="col-md-12">
                <label className="labels">Email </label>
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  placeholder="enter email "
                  value={email}
                  onChange={(e) => setInputState(e)}
                />
              </div>
              <div className="col-md-12">
                <label className="labels">Education</label>
                <input
                  name="education"
                  type="text"
                  className="form-control"
                  placeholder="education"
                  value={education}
                  onChange={(e) => setInputState(e)}
                />
              </div>
            </div>
            <div className="col-md-12">
              <label className="labels">Address </label>
              <input
                name="address"
                type="text"
                className="form-control"
                placeholder="enter address"
                value={address}
                onChange={(e) => setInputState(e)}
              />
            </div>
            <div className="col-md-12">
              <label className="labels">Postcode</label>
              <input
                name="postcode"
                type="text"
                className="form-control"
                placeholder="enter postcode"
                value={postcode}
                onChange={(e) => setInputState(e)}
              />
            </div>

            <div className="row mt-3">
              <div className="col-md-6">
                <label className="labels">Country</label>
                <input
                  name="country"
                  type="text"
                  className="form-control"
                  placeholder="country"
                  value={country}
                  onChange={(e) => setInputState(e)}
                />
              </div>
              <div className="col-md-6">
                <label className="labels">State/Region</label>
                <input
                  name="state"
                  type="text"
                  className="form-control"
                  value={state}
                  placeholder="state"
                  onChange={(e) => setInputState(e)}
                />
              </div>
            </div>
            <div className="mt-5 text-center">
              <button className="btn btn-primary profile-button" type="button">
                Save Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

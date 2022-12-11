import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  auth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
} from "../services/firebase-config";

const Account = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signupEmail, setSignUpEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [flag, setFlag] = useState(false);
  const navigate = useNavigate();
  const setState = (e) => {
    switch (e.target.name) {
      case "username":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);

        break;
      case "signup-username":
        setSignUpEmail(e.target.value);
        break;
      case "signup-password":
        setSignupPassword(e.target.value);

        break;
    }
  };
  const showRegister = () => {
    setFlag(true);
  };
  const showLogin = () => {
    setFlag(false);
  };
  const SignIn = async (e) => {
    document.getElementById("signin-btn").textContent = "Please wait...";
    const user = await signInWithEmailAndPassword(auth, email, password);

    console.log(user);
    navigate("/dashboard");
  };
  const SignUp = async (e) => {
    const res = await createUserWithEmailAndPassword(
      auth,
      signupEmail,
      signupPassword
    );

    console.log(res);
  };
  const SignInGoogle = async (e) => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        navigate("/dashboard");
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
  return (
    <section className="bg-basic ">
      <div className="container">
        {!flag ? (
          <form style={{ width: "500px", margin: "0 auto" }}>
            <h1 className="text-3xl font-bold text-center mt-5 mb-3">Login</h1>
            <div className="form-outline mb-4">
              <input
                type="email"
                id="form2Example1"
                className="form-control"
                value={email}
                name="username"
                onChange={(e) => setState(e)}
              />
              <label className="form-label" htmlFor="form2Example1">
                Email address
              </label>
            </div>
            <div className="form-outline mb-4">
              <input
                type="password"
                id="form2Example2"
                name="password"
                className="form-control"
                value={password}
                onChange={(e) => setState(e)}
              />
              <label className="form-label" htmlFor="form2Example2">
                Password
              </label>
            </div>
            <div className="row mb-4">
              <div className="col">
                <a href="#!">Forgot password?</a>
              </div>
            </div>
            <button
              type="button"
              onClick={() => SignIn()}
              className="btn btn-primary btn-block mb-4"
              id="signin-btn"
            >
              Sign in
            </button>
            <div className="row">
              <a href="#" onClick={() => SignInGoogle()}>
                <img
                  width={250}
                  src="https://onymos.com/wp-content/uploads/2020/10/google-signin-button.png"
                />
              </a>
            </div>
            <div className="mt-2">
              <p>
                Not a member?{" "}
                <a href="#" onClick={() => showRegister()}>
                  Register
                </a>
              </p>
            </div>
          </form>
        ) : (
          <form id="register" style={{ width: "500px", margin: "0 auto" }}>
            <h1 className="text-3xl font-bold text-center mt-5 mb-3">
              Register
            </h1>
            <div className="form-outline mb-4">
              <input
                type="email"
                id="form2Example1"
                className="form-control"
                value={signupEmail}
                name="signup-username"
                onChange={(e) => setState(e)}
              />
              <label className="form-label" htmlFor="form2Example1">
                Email address
              </label>
            </div>
            <div className="form-outline mb-4">
              <input
                type="password"
                id="form2Example2"
                name="signup-password"
                className="form-control"
                value={signupPassword}
                onChange={(e) => setState(e)}
              />
              <label className="form-label" htmlFor="form2Example2">
                Password
              </label>
            </div>
            <div className="row mb-4">
              <div className="col">
                <a href="#!">Forgot password?</a>
              </div>
            </div>
            <button
              type="button"
              onClick={() => SignUp()}
              className="btn btn-primary btn-block mb-4"
            >
              Sign up
            </button>
            <div className="row">
              <a href="#" onClick={() => SignInGoogle()}>
                <img
                  width={250}
                  src="https://onymos.com/wp-content/uploads/2020/10/google-signin-button.png"
                />
              </a>{" "}
            </div>
            <div className="mt-2">
              <p>
                Already have account?
                <a href="#" onClick={() => showLogin()}>
                  Login
                </a>
              </p>
            </div>
          </form>
        )}
        ;
      </div>
    </section>
  );
};

export default Account;

import { signOut } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../services/firebase-config";

const Dashboard = () => {
  const navigate = useNavigate();
  const handleSignOut = async () => {
    await signOut(auth);
    navigate("/");
  };
  return (
    <section className="bg-basic text-center">
      <div className="container">
        <h1>This is the dashboard</h1>
        <button className="btn btn-success" onClick={() => handleSignOut()}>
          Sign out
        </button>
      </div>
    </section>
  );
};

export default Dashboard;

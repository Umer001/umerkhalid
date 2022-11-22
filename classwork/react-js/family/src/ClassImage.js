import React from "react";
import logo from "./logo.svg";
class HeaderImage extends React.Component {
  render() {
    return (
      <>
        <img src={logo} className="App-logo" alt="logo" />
        <Para />
      </>
    );
  }
}

function Para() {
  return <p>Hello I am umer</p>;
}

export default HeaderImage;

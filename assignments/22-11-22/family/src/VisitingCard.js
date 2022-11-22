import React from "react";
import Name from "./Name";
import Details from "./Details";
import VisitNow from "./VisitNow";
function VisitingCard() {
  return (
    <div className="card" style={{ backgroundColor: "#0a3d62",maxWidth:"560px" }}>
      <Name />
      <Details />
      <VisitNow />
    </div>
  );
}
export default VisitingCard;

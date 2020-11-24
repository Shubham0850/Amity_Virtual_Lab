import React from "react";
import "./style.css";
import SmallNav from "../components/smallNav";
import notAvailable from "../images/not-available.gif";

function Semester1() {
  return (
    <div className="electrical-div">
      <SmallNav head={"Semester 1"} link={"/sem"} />
      <div className="electrical-body">
        <img src={notAvailable} alt="not-available" />
        <h3>Opps! Till now we will not added this page.</h3>
      </div>
    </div>
  );
}

export default Semester1;

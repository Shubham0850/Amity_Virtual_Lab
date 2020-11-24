import React from "react";
import "./style.css";
import SmallNav from "../components/smallNav";
import notAvailable from "../images/not-available.gif";

export default function Electrical() {
  return (
    <div className="electrical-div">
      <SmallNav head={"Electrical"} link={"/lab"} />
      <div className="electrical-body">
        <img src={notAvailable} alt="not-available" />
        <h3>Opps! Till now we will not added this page.</h3>
      </div>
    </div>
  );
}

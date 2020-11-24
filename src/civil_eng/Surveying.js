import React from "react";
import "./survey.css";
import Ce_Survey from "./ce_surveyData";
import ImageBuilder from "./ImageBuilder";
import SmallNav from "../components/smallNav";
function createImage(data) {
  return <ImageBuilder class={data.class} name={data.name} info={data.info} />;
}
function Surveying() {
  return (
    <div>
      <SmallNav head={"Surveying"} link={"/CE"} />
      <div className="main_img">
        <div className="inner"> {Ce_Survey.map(createImage)} </div>
      </div>
    </div>
  );
}

export default Surveying;

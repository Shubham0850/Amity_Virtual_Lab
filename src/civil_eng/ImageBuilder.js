import React from "react";
import "./imageBuilder.css";

function ImageBuilder(props) {
  return (
    <div className="main_division">
      <div className="imageBuilder">
        <div className={`diff_image_back ${props.class}`}>
          <div className="image_details">
            <h3>{props.name}</h3>
            <em>{props.info}</em>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageBuilder;

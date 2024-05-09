import React from "react";
import Card from "../Componets/Card";

const Career = ({ data }) => {
  const cardata = data.filter((ele) => ele.title === "Career");
  return (
    <div className="row">
      {cardata.map((element, index) => {
        return (
          <div className="col">
            <Card element={element} index={index} />
          </div>
        );
      })}
    </div>
  );
};

export default Career;

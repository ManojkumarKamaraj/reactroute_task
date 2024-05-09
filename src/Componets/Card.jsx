import React from "react";

const Card = ({ element, index }) => {
  return (

    <div key={element.id}>
      <div className="card">
        <img src={element.image} alt="image.png" />
        <div className="card-body">
          <h5 className="card-title">{element.title}</h5>
          <p className="card-text">{element.content}</p>
          <p>
            <strong>{element.date}</strong>
          </p>
        </div>
      </div>
    </div>
    
  );
};

export default Card;

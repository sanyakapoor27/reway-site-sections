import React, {Component} from 'react'
import './card-style.css';

const Cards = (props) => {
  return (
    <div className={`card card${props.cardId} text-center shadow`}>
      <div className="overflow">
        <img src={props.imgsrc} alt="sgd image" className="card-img-top" />
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text text-secondary">{props.para}</p>
      </div>
    </div>
  );
};

export default Cards;
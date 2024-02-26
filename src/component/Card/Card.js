import React from "react";
import "./Card.css";

const Card = ({ pokemon }) => {
  return (
    <div className="card">
      <div className="cardImg">
        <img src={pokemon.sprites.front_default} alt="" />
      </div>
      <h3 className="cardName">{pokemon.name}</h3>
      <div>タイプ</div>
      {pokemon.types.map((type) => {
        return (
          <div>
            <span className="typeName">{type.type.name}</span>
          </div>
        );
      })}
      ;
      <div className="cardInfo">
        <div className="cardData">
          <p className="title">重さ:{pokemon.weight}</p>
        </div>
        <div className="cardData">
          <p className="title">高さ:{pokemon.height}</p>
        </div>
        <div className="cardData">
          <div>タイプ</div>
          
        </div>
      </div>
    </div>
  );
};

export default Card;
import React from "react";

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
          <p className="title">高さ:{pokemon.height}</p>
          <div>タイプ</div>
      {pokemon.abilities.map((abilities) => {
        return (
          <div>
            <span className="typeName">{abilities.ability.name}</span>
          </div>
        );
      })}
        </div>
      </div>
    </div>
  );
};

export default Card;

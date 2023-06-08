import React from "react";
import "./MiniCard.css";
import { useNavigate } from "react-router-dom";

export const MiniCard = (props) => {
  const navigate = useNavigate();
  return (
    <div
      className="miniCard"
      onClick={() => {
        navigate(`/pokemon/${props.pokemons.id}`);
      }}
    >
      <div className="imgNmberContainer">
        <p className="pokemonNumber">#{props.pokemons.id}</p>
        <div className="imgMiniCard">
          <img src={props.pokemons.img} />
        </div>
      </div>
      <div className="shadow">
        <p className="pokemonName">{props.pokemons.name}</p>
      </div>
    </div>
  );
};

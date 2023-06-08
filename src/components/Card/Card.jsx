import React from "react";
import "./Card.css";
import data from "../data";
import { useParams, Link } from "react-router-dom";

export const Card = (props) => {
  let { id } = useParams();
  const pokemon = data.find((item) => item.id === id);
  const hp = pokemon.stats.HP / 2 + "%";
  const atk = pokemon.stats.ATK / 2 + "%";
  const def = pokemon.stats.DEF / 2 + "%";
  const satk = pokemon.stats.SATK / 2 + "%";
  const sdef = pokemon.stats.SDEF / 2 + "%";
  const spd = pokemon.stats.SPD / 2 + "%";

  const lightColor = pokemon.color1 + 33;
  return (
    <section className="card" style={{ backgroundColor: pokemon.color1 }}>
      <div className="background" style={{ backgroundColor: pokemon.color1 }}>
        <div className="nav">
          <div className="name">
            <Link to="/">
              <div>
                <button
                  className="button"
                  style={{ backgroundColor: pokemon.color1 }}
                >
                  <img
                    className="arrowButton"
                    src="/img/arrow-left.svg"
                    alt="arrow"
                  />
                </button>
              </div>
            </Link>
            <h2> {pokemon.name}</h2>
          </div>
          <p>#{pokemon.id}</p>
        </div>

        <img className="pokeball" src="/img/Pokeball.png" alt="pokeball" />
        <img className="pokemon" src={pokemon.img} alt="pokemon" />
      </div>
      <div className="main">
        <div className="typeContainer">
          <div className="type1" style={{ backgroundColor: pokemon.color1 }}>
            {" "}
            {pokemon.type1}
          </div>
          {pokemon.type2 === "" ? (
            <div
              className="type2"
              style={{ backgroundColor: pokemon.color2, display: "none" }}
            >
              {" "}
              {pokemon.type2}
            </div>
          ) : (
            <div
              className="type2"
              style={{ backgroundColor: pokemon.color2, display: "block" }}
            >
              {" "}
              {pokemon.type2}
            </div>
          )}
          {/* <div className="type2" style={{backgroundColor: pokemon.color2}}> {pokemon.type2}</div> */}
        </div>
        <div>
          <p className="about" style={{ color: pokemon.color1 }}>
            About
          </p>
        </div>
        <div className="atributes">
          <div className="weightContainer">
            <div className="weight">
              <img src="/img/Weight.svg" alt="weight" />
              <p>{pokemon.weight}</p>
            </div>
            <div>
              <p className="aboutColor">Weight</p>
            </div>
          </div>
          <div className="heightContainer">
            <div className="height">
              <img src="/img/Height.svg" alt="height" />
              <p>{pokemon.height} </p>
            </div>
            <div>
              <p className="aboutColor">Height</p>
            </div>
          </div>
          <div className="abilitiesContainer">
            <div>
              <p>{pokemon.ability1} </p>
              <p>{pokemon.ability2} </p>
            </div>
            <p className="aboutColor"> Moves</p>
          </div>
        </div>
        <div>
          <p>{pokemon.description}</p>
        </div>
        <div>
          <p className="about" style={{ color: pokemon.color1 }}>
            Base Stats
          </p>
        </div>
        <div className="stats">
          <div className="statsNames">
            <p style={{ color: pokemon.color1 }}>HP</p>
            <p style={{ color: pokemon.color1 }}>ATK</p>
            <p style={{ color: pokemon.color1 }}>DEF</p>
            <p style={{ color: pokemon.color1 }}>SATK</p>
            <p style={{ color: pokemon.color1 }}>SDEF</p>
            <p style={{ color: pokemon.color1 }}>SPD</p>
          </div>
          <div>
            <p>{pokemon.stats.HP} </p>
            <p>{pokemon.stats.ATK}</p>
            <p>{pokemon.stats.DEF}</p>
            <p>{pokemon.stats.SATK}</p>
            <p>{pokemon.stats.SDEF}</p>
            <p>{pokemon.stats.SPD}</p>
          </div>
          <div className="stateBar">
            <div className="lightGray" style={{ backgroundColor: lightColor }}>
              {" "}
              <div
                className="darkGray"
                style={{ backgroundColor: pokemon.color1, width: hp }}
              ></div>{" "}
            </div>
            <div className="lightGray" style={{ backgroundColor: lightColor }}>
              {" "}
              <div
                className="darkGray"
                style={{ backgroundColor: pokemon.color1, width: atk }}
              ></div>{" "}
            </div>
            <div className="lightGray" style={{ backgroundColor: lightColor }}>
              {" "}
              <div
                className="darkGray"
                style={{ backgroundColor: pokemon.color1, width: def }}
              ></div>{" "}
            </div>
            <div className="lightGray" style={{ backgroundColor: lightColor }}>
              {" "}
              <div
                className="darkGray"
                style={{ backgroundColor: pokemon.color1, width: satk }}
              ></div>{" "}
            </div>
            <div className="lightGray" style={{ backgroundColor: lightColor }}>
              {" "}
              <div
                className="darkGray"
                style={{ backgroundColor: pokemon.color1, width: sdef }}
              ></div>{" "}
            </div>
            <div className="lightGray" style={{ backgroundColor: lightColor }}>
              {" "}
              <div
                className="darkGray"
                style={{ backgroundColor: pokemon.color1, width: spd }}
              ></div>{" "}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

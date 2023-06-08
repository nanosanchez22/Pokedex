import React, { useState } from "react";
import "./Home.css";
import { MiniCard } from "../MiniCard/MiniCard";
import data from "../data";

export const Home = (props) => {
  const [button, setButton] = useState(true);

  const [search, setSearch] = useState("");
  const filterDataP = data.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(search.toLowerCase())
  );
  const [filteredData, setFilterData] = useState(data);
  function ordenar() {
    setButton(!button);
    if (button) ordenarPorNumero();
    else ordenarPorNombre();
  }
  function ordenarPorNumero() {
    const array = filteredData.sort((a, b) => {
      if (a.id < b.id) {
        return -1;
      }
      if (a.id > b.id) {
        return 1;
      }
      // a debe ser igual b
      return 0;
    });
    setFilterData(array);
  }
  function ordenarPorNombre() {
    const array = filteredData.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      // a debe ser igual b
      return 0;
    });
    setFilterData(array);
  }

  return (
    <div className="backgroundRed">
      <div className="containerColumn">
        <div className="banner">
          <div>
            <img
              className="pokeballHome"
              src="/img/Pokeball.png"
              alt="img pokeball"
            />
          </div>
          <div>
            <h1>Pokédex</h1>
          </div>
        </div>
        <div className="search">
          <div className="searchBar">
            <button className="buttonBar">
              <img src="/img/search.svg" alt="" />
            </button>
            <input
              value={search}
              className="inputBar"
              type="search"
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              className="buttonBar"
              onClick={() => {
                setSearch("");
              }}
            >
              <img src="/img/searchCross.svg" alt="" />
            </button>
          </div>
          <div>
            <button className="buttonBar2" onClick={() => ordenar()}>
              {button === true ? (
                <img className="hashtagButton" src="/img/hashtag.svg" />
              ) : (
                <img className="hashtagButton" src="/img/sort.svg" />
              )}
            </button>
          </div>
        </div>
      </div>
      <div className="whiteBackgroun">
        {filterDataP.map((pokemon) => {
          return <MiniCard pokemons={pokemon} />;
        })}
      </div>
    </div>
  );
};

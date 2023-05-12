import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import "./styles/pokeInfo.css";
import PokeCardInfo from "../components/Pokedex/PokeCardInfo";

const PokeInfo = () => {
  const { name } = useParams();

  const url = ` https://pokeapi.co/api/v2/pokemon/${name}`;
  const [pokemon, getPokemonByName, hasError] = useFetch(url);

  useEffect(() => {
    getPokemonByName();
  }, [name]);

  return (
    <div>
      {hasError ? (
        <h1>Pokemon is not exist</h1>
      ) : (
        <>
          <PokeCardInfo 
            pokemon={pokemon}
          />
        </>
      )}
    </div>
  );
};

export default PokeInfo;

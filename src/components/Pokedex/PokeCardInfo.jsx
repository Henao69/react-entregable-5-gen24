import React from "react";
import "./styles/pokeCardInfo.css";

const PokeCardInfo = ({ pokemon }) => {
  console.log(pokemon);

  return (
    <div>
        <img className="pokedex__img" src="/Above.svg" alt="" /> 
      <section>
        <img
          src={pokemon?.sprites.other["official-artwork"].front_default}
          alt=""
        />
        <div>
          <h2>{pokemon?.name}</h2>
          <ul>
            <li>
              <span>Altura</span>
              <span>{pokemon?.height}</span>
            </li>
          </ul>
          <ul>
            <li>
              <span>Peso</span>
              <span>{pokemon?.weight}</span>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <span>Type</span>
            {pokemon?.types.map((type) => (
              <li key={type.type.url}>
                <span>{type.type.name}</span>
              </li>
            ))}
          </ul>
          <ul>
            <span>Ability</span>
            {pokemon?.abilities.map((ability) => (
              <li key={ability.ability.url}>
                <span>{ability.ability.name}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
            <h3>Stats</h3>
            {
                pokemon?.stats.map(stat => (
                    <li key={stat.stat.url}>
                        <span>{stat.stat.name}</span>
                        <span>{stat.base_stat}</span>
                    </li>
                ))
            }
        </div>
      </section>
      <section>
        <h3>Movements</h3>
        {
            pokemon?.moves.map( move => (
                <li key={move.move.url}>
                    <span>{move.move.name}</span>
                </li>
            ))
        }
      </section>
    </div>
  );
};

export default PokeCardInfo;

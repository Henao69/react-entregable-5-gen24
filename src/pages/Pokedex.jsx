import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import FormPoke from '../components/Pokedex/FormPoke'
import PokeContainer from '../components/Pokedex/PokeContainer'
import "./styles/pokedex.css";

const Pokedex = () => {

  const urlBase = `https://pokeapi.co/api/v2/pokemon?limit=10&offset=0`

  const [formUrl, setFormUrl] = useState(urlBase)

  const { trainerName } = useSelector(state => state)


  return (
    <div className='pokedex'>
      <section className='pokedex__container'>
        <img className="pokedex__img" src="/Above.svg" alt="" />
        <img
          className="pokedex__img home__img"
          src="/PokeImage.svg"
          alt="Imagen que dice Pokedex tematica pokemon"
        />
        <p><span>Welcome {trainerName}</span></p>
      </section>
      <article className='pokedex__article'>
        <FormPoke urlBase={urlBase} setFormUrl={setFormUrl}/>
        <PokeContainer formUrl={formUrl}/>
      </article>
    </div>
  )
}

export default Pokedex
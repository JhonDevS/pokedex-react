import React, { useState } from 'react';
import CardBase from './components/CardBase/CardBase';
import Footer from './components/Footer';
import Header from './components/Header';
import useFetch from './hooks/useFetchPokemonBase';

const App = () => {

  const baseUrl = 'https://pokeapi.co/api/v2/pokemon';
  const limit = 50;
  const offset = 0;

  const { pokemonList } = useFetch({url: `${baseUrl}?limit=${limit}&offset=${offset}`})

  if (pokemonList.length < 1) {
    return (
      <p>
        Loading ...
      </p>
    )
  }

  return (
    <main>
      <Header />
      <section className='flex flex-wrap gap-24 px-24 my-24'>
        {
          pokemonList.map( (pokemon, index) => 
            <CardBase 
              key={index}
              name={pokemon.name}
              url={pokemon.url}
            />
          )
        }
      </section>
      <Footer />
    </main>
  )
}

export default App;
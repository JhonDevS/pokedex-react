import React, { useEffect, useState } from "react";
import { PokemonBase } from "../models/pokemonBase";

const useFetchPokemonBase = ({url}:{url: string}) => {
  const [pokemonList, setPokemonList] = useState<PokemonBase[]>([])

  useEffect(() => {
    try {
      const fetchPokemon = async () => {
        const res = await fetch(url);
        const data = await res.json();
        setPokemonList(data.results);
      }
      fetchPokemon()
    } catch (e) {
      console.error('error fetch in API')
    }
  
  }, [])
  return {pokemonList}
}

export default useFetchPokemonBase;
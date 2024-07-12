import { Header } from "../Header/Header";

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export interface PokemonData {
    name: string;
    sprites: {
      front_default: string;
    };
}

export const PokemonDetail = () => {
  const { id } = useParams();
  const [pokemonData, setPokemonData] = useState<PokemonData | null>(null);

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        if (response.ok) {
          const data = await response.json();
          setPokemonData(data);
        } else {
          throw new Error('Failed to fetch data');
        }
      } catch (error) {
        console.error(error);
        // Handle error state
      }
    };

    fetchPokemonData();
  }, [id]);

  if (!pokemonData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <h2>{pokemonData.name}</h2>
      <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
    </div>
  );
};
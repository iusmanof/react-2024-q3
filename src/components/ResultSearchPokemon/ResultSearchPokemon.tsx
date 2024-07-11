import React from 'react';
import { ResultSearchPokemonStyle } from '../../styles/ResultSearchPokemonStyle';

export type Pokemon = {
  name: string;
  url: string;
};

interface Props {
  pokemonList: Pokemon[];
  error: string | null; // New error prop
}

export const ResultSearchPokemon: React.FC<Props> = ({ pokemonList, error }) => {
  if (error) {
    return <div>{error}</div>; // Render the error message if error is not null
  }

  return (
    <ResultSearchPokemonStyle>
      {pokemonList.length > 0 ? (
        pokemonList.map((pokemon, index) => (
          <div key={index}>
            <h3>Name: {pokemon.name}</h3>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
              alt={pokemon.name}
            />
          </div>
        ))
      ) : (
        <p>No search results</p>
      )}
    </ResultSearchPokemonStyle>
  );
};

import React from 'react';
import { PokemonBlock, PokemonContainer } from '../../styles/ResultSearchPokemonStyle';

export type Pokemon = {
  name: string;
  url: string;
};

interface Props {
  paginatedPokemonList: Pokemon[];
  error: string | null; // New error prop
}

export const ResultSearchPokemon: React.FC<Props> = ({ paginatedPokemonList, error }) => {
  if (error) {
    return <div>{error}</div>; // Render the error message if error is not null
  }

  return (
    <PokemonContainer>
      {paginatedPokemonList.map((pokemon: Pokemon) => (
        <PokemonBlock key={pokemon.name}>
          <p>Name: {pokemon.name}</p>
        </PokemonBlock>
      ))}
    </PokemonContainer>
  );
};

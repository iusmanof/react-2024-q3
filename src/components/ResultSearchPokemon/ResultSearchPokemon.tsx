import React from 'react';
import { PokemonBlock, PokemonContainer } from '../../styles/ResultSearchPokemonStyle';
import { Link } from 'react-router-dom';

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
          <p>URL: {pokemon.url.split("/")}</p>
          <Link to={pokemon.url.split("/")[pokemon.url.split("/").length - 2]}>link</Link>
        </PokemonBlock>
      ))}
    </PokemonContainer>
  );
};

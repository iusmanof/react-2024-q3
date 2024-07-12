import React from 'react';
import { PokemonBlock, PokemonContainer } from '../../styles/ResultSearchPokemonStyle';
import { Link } from 'react-router-dom';

export type Pokemon = {
  name: string;
  url: string;
  sprites?: {
    front_default: string;
    back_default: string;
  };
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
      {paginatedPokemonList.map((pokemon: Pokemon) => {
        const withURL = pokemon.url && (
          <div>
            <p>URL: {pokemon.url.split('/')}</p>
            <Link to={pokemon.url.split('/')[pokemon.url.split('/').length - 2]}>link</Link>{' '}
          </div>
        );

        const withIMG = pokemon.sprites && (<img src={pokemon.sprites.front_default} />);

        return (
          <PokemonBlock key={pokemon.name}>
            <p>Name: {pokemon.name}</p>
            {pokemon.url ? withURL : withIMG}
          </PokemonBlock>
        );
      })}
    </PokemonContainer>
  );
};

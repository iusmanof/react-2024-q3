import React from 'react';
import { ResultSearchPokemonStyle } from '../../styles/ResultSearchPokemonStyle';

type Pokemon = {
  name: string;
  description: string;
};

type SearchAppState = {
  searchResults: Pokemon[];
};

export const ResultSearchPokemon: React.FC<SearchAppState> = ({ searchResults }) => {
  return (
    <ResultSearchPokemonStyle>
      {searchResults.length > 0 ? (
        searchResults.map((pokemon, index) => (
          <div key={index}>
            <h3>Name:</h3>
            <p> {pokemon.name}</p>
            <img src={pokemon.description} alt={pokemon.name} />
          </div>
        ))
      ) : (
        <p>No search results</p>
      )}
    </ResultSearchPokemonStyle>
  );
};

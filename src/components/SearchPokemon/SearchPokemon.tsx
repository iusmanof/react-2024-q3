import React, { useState, useEffect } from 'react';
import { SearchButton, SearchContainer, SearchInput } from '../../styles/SearchStyle';
import { Pokemon, ResultSearchPokemon } from '../ResultSearchPokemon/ResultSearchPokemon';

const SearchPokemon: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/')
      .then((res) => res.json())
      .then((data) => {
        setPokemonList(data.results);
      });
  }, []);

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch details for ${searchTerm}`);
      }
      const data = await response.json();

      setPokemonList([data]);
      setError(null);
    } catch (error) {
      if (error instanceof Error && error.message) {
        setError('Error searching for Pokemon: ' + error.message);
      } else {
        setError('An error occurred while searching for Pokemon.');
      }
    }
  };

  const handleReset = () => {
    fetch('https://pokeapi.co/api/v2/pokemon/')
      .then((res) => res.json())
      .then((data) => {
        setPokemonList(data.results);
        setError(null);
      });
  };

  return (
    <div>
      <SearchContainer>
        <SearchInput
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Example: ditto"
        />
        <SearchButton onClick={handleSearch}>Search</SearchButton>
        <button onClick={handleReset}>Reset</button>
      </SearchContainer>
      <ResultSearchPokemon pokemonList={pokemonList} error={error} />
    </div>
  );
};

export default SearchPokemon;

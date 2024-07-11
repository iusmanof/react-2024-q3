import React, { useState, useEffect } from 'react';
import { ResultSearchPokemon } from '../ResultSearchPokemon/ResultSearchPokemon';
import { SearchButton, SearchContainer, SearchInput } from '../../styles/SearchStyle';

type Pokemon = {
  name: string;
  description: string;
};

type SearchAppState = {
  searchInput: string;
  searchResults: Pokemon[];
};

const SearchPokemon: React.FC<SearchAppState> = () => {
  const [searchInput, setSearchInput] = useState<string>('');
  const [searchResults, setSearchResults] = useState<Pokemon[]>([]);

  useEffect(() => {
    const savedSearchTerm = localStorage.getItem('searchTerm');
    if (savedSearchTerm) {
      setSearchInput(savedSearchTerm);
      fetchPokemon(savedSearchTerm);
    }
  }, []);

  const fetchPokemon = async (searchTerm: string) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`);
      if (!response.ok) {
        throw new Error('Pokemon not found');
      }

      const data = await response.json();
      const pokemon: Pokemon = {
        name: data.name,
        description: data.sprites.front_default,
      };

      setSearchResults([pokemon]);
    } catch (error) {
      console.error('Error fetching Pokemon:', error);
      setSearchResults([]);
    }
  };

  const handleSearch = () => {
    const trimmedSearchInput = searchInput.trim();
    localStorage.setItem('searchTerm', trimmedSearchInput);
    fetchPokemon(trimmedSearchInput);
  };

  return (
    <div>
      <div>
        <SearchContainer>
          <SearchInput
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Example: ditto"
          />
          <SearchButton onClick={handleSearch}>Search</SearchButton>
        </SearchContainer>
      </div>
      <div>
        <ResultSearchPokemon searchResults={searchResults} />
      </div>
    </div>
  );
};

export default SearchPokemon;

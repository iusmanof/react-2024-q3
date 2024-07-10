import React, { useState, useEffect } from 'react';

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
        <input type="text" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div>
        {searchResults.length > 0 ? (
          searchResults.map((pokemon, index) => (
            <div key={index}>
              <h3>{pokemon.name}</h3>
              <img src={pokemon.description} alt={pokemon.name} />
            </div>
          ))
        ) : (
          <p>No search results</p>
        )}
      </div>
    </div>
  );
};

export default SearchPokemon;


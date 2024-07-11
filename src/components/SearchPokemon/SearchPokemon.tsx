import React, { useState, useEffect } from 'react';
import { SearchButton, SearchContainer, SearchInput } from '../../styles/SearchStyle';
import { ResultSearchPokemon } from '../ResultSearchPokemon/ResultSearchPokemon';
import Pagination, { PaginationProps } from '../Pagination/Pagination';

interface PokemonData {
  name: string;
  // Add any other properties you expect from the Pokemon API response
}

const SearchPokemon: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [pokemonList, setPokemonList] = useState<PokemonData[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [pagination, setPagination] = useState<PaginationProps>({
    currentPage: 1,
    itemsPerPage: 10,
    totalItems: 100,
  });

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/')
      .then((res) => res.json())
      .then((data) => {
        setPokemonList(data.results);
        setPagination((prevState) => ({
          ...prevState,
          totalItems: data.results.length,
        }));
      });
  }, []);

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch details for ${searchTerm}`);
      }
      const data: PokemonData = await response.json();

      setPokemonList([data]);
      setPagination((prevState) => ({
        ...prevState,
        totalItems: 1,
      }));
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
        setPagination((prevState) => ({
          ...prevState,
          totalItems: data.results.length,
        }));
        setError(null);
      });
  };

  const handlePageChange = (pageNumber: number) => {
    setPagination((prevState) => ({
      ...prevState,
      currentPage: pageNumber,
    }));
  };

  const startIndex = (pagination.currentPage - 1) * pagination.itemsPerPage;
  const paginatedPokemonList = pokemonList.slice(startIndex, startIndex + pagination.itemsPerPage);

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
      <ResultSearchPokemon paginatedPokemonList={paginatedPokemonList} error={error} />

      <Pagination
        currentPage={pagination.currentPage}
        itemsPerPage={pagination.itemsPerPage}
        totalItems={pagination.totalItems}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default SearchPokemon;

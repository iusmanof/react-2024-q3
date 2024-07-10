import React, { Component } from 'react';

type Pokemon = {
  name: string;
  description: string;
};

type SearchAppState = {
  searchInput: string;
  searchResults: Pokemon[];
};

class SearchAppClassComponent extends Component<SearchAppState> {
  state: SearchAppState = {
    searchInput: '',
    searchResults: [],
  };

  componentDidMount() {
    const savedSearchTerm = localStorage.getItem('searchTerm');
    if (savedSearchTerm) {
      this.setState({ searchInput: savedSearchTerm });
      this.fetchPokemon(savedSearchTerm);
    }
  }

  fetchPokemon = async (searchTerm: string) => {
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

      this.setState({ searchResults: [pokemon] });
    } catch (error) {
      console.error('Error fetching Pokemon:', error);
      this.setState({ searchResults: [] });
    }
  };

  handleSearch = () => {
    const { searchInput } = this.state;
    const trimmedSearchInput = searchInput.trim();
    localStorage.setItem('searchTerm', trimmedSearchInput);
    this.fetchPokemon(trimmedSearchInput);
  };

  render() {
    const { searchInput, searchResults } = this.state;

    return (
      <div>
        <div>
          <input type="text" value={searchInput} onChange={(e) => this.setState({ searchInput: e.target.value })} />
          <button onClick={this.handleSearch}>Search</button>
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
            <p>No search results found.</p>
          )}
        </div>
      </div>
    );
  }
}

export default SearchAppClassComponent;

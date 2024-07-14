import React from 'react';
import { render } from '@testing-library/react';
import { Pokemon, ResultSearchPokemon } from './ResultSearchPokemon';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

describe('ResultSearchPokemon', () => {
  const mockPokemonList: Pokemon[] = [
    {
      name: 'Pikachu',
      url: 'https://pokeapi.co/api/v2/pokemon/25',
      sprites: { front_default: 'pikachu.png', back_default: 'pikachu-back.png' },
    },
  ];

  it('renders the component with paginatedPokemonList data', () => {
    const { getByText } = render(
      <MemoryRouter>
        <ResultSearchPokemon paginatedPokemonList={mockPokemonList} error={null} />
      </MemoryRouter>,
    );

    mockPokemonList.forEach((pokemon) => {
      expect(getByText(`Name: ${pokemon.name}`)).toBeInTheDocument();
    });
  });

  it('renders error message when error exists', () => {
    const errorMessage = 'An error occurred';
    const { getByText } = render(<ResultSearchPokemon paginatedPokemonList={[]} error={errorMessage} />);

    expect(getByText(errorMessage)).toBeInTheDocument();
  });
});

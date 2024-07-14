import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchPokemon from './SearchPokemon';
import { MemoryRouter } from 'react-router-dom';

global.fetch = jest.fn().mockImplementation(
  () =>
    Promise.resolve({
      json: () => Promise.resolve({ results: [{ name: 'ditto', url: 'ttps://pokeapi.co/api/v2/pokemon/1/' }] }),
    }) as unknown as Response,
);

describe('SearchPokemon', () => {
  it('renders the specified number of cards based on pagination', async () => {
    const { findByPlaceholderText, findAllByText, findByText } = render(
      <MemoryRouter>
        <SearchPokemon />
      </MemoryRouter>,
    );

    const searchInput = await findByPlaceholderText('Example: ditto');
    fireEvent.change(searchInput, { target: { value: 'ditto' } });
    fireEvent.click(searchInput)

    const searchButton = await findByText('Search');
    fireEvent.click(searchButton);

    const cards = await findAllByText('Error searching for Pokemon: Failed to fetch details for ditto');
    expect(cards.length).toBe(1);
  });
});

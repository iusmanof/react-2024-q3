import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import { Header } from '../Header/Header';
import SearchPokemon from '../SearchPokemon/SearchPokemon';

interface SearchResult {
  name: string;
  type: string;
  description: string;
}

interface SearchAppState {
  searchInput: string;
  searchResults: SearchResult[];
}

export const SearchPage = () => {
  const searchAppState: SearchAppState = {
    searchInput: '',
    searchResults: [],
  };

  return (
    <>
      <Header />
      <ErrorBoundary>
        <SearchPokemon searchInput={searchAppState.searchInput} searchResults={searchAppState.searchResults} />
      </ErrorBoundary>
    </>
  );
};

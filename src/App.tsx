import React, { Component } from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import SearchPokemon from './components/SearchPokemon';

class App extends Component {
  throwError = () => {
    throw new Error('Manual error thrown for testing purposes');
  };

  render() {
    return (
      <ErrorBoundary>
        <div>
          <SearchPokemon />
        </div>
      </ErrorBoundary>
    );
  }
}

export default App;

import React, { Component } from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import SearchApp from './components/SearchApp';

class App extends Component {
  throwError = () => {
    throw new Error('Manual error thrown for testing purposes');
  };

  render() {
    return (
      <ErrorBoundary>
        <div>
          <SearchApp />
        </div>
      </ErrorBoundary>
    );
  }
}

export default App;
import './App.css';
import SearchInput from './components/SearchPanel/SearchInput';
import SearchResult from './components/SearchResult/SearchResult';

import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <>
        <SearchInput />
        <SearchResult />
      </>
    );
  }
}

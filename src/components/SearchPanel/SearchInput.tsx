import React, { Component } from 'react';

export default class SearchInput extends Component {
  render() {
    return (
      <div>
        <input type="search" id="search-poremon" name="search-poremon" />
        <button>Search pokemon</button>
      </div>
    );
  }
}

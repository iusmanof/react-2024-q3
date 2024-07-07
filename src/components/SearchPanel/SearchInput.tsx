import React, { Component } from 'react';

export default class SearchInput extends Component {
  constructor() {
    super();
    this.state = {
      fetchApiData: "",
      getApiData: { }
    };
  }

  componentDidUpdate() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.fetchApiData}`)
      .then((respo) => {
        return respo.json();
      })
      .then((data) => {
        this.setState({ getApiData: { name: data.name, weight: data.weight, base_experience: data.base_experience }  });
      });
  }
  fetchData() {
    this.setState({ getApiData: this.state.fetchApiData });
  }

  handleChange = (event) => {
    this.setState({ fetchApiData: event.target.value });
  }

  render() {
    return (
      <div>
        <input type="search" id="search-poremon" name="search-poremon" onChange={this.handleChange}/>
        <button onClick={() => this.fetchData()}>Search pokemon</button>
        <p>Name : {this.state.getApiData.name}</p>
        <p>weight : {this.state.getApiData.weight}</p>
        <p>base_experience : {this.state.getApiData.base_experience}</p>
      </div>
    );
  }
}

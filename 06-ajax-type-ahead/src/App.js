import React, { Component } from 'react';
import './App.css';

const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];
fetch(endpoint)
  .then(blob => blob.json())
  .then(data => cities.push(...data));

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      storeCities: [],
    }
  };

  mapCities = (cities, text) => {
    const matches = cities.filter(record => {
      const regex = new RegExp(text, 'gi');
      const city = record.city.match(regex);
      const state = record.state.match(regex);
      return city || state
    })
    return matches
};

  handleCities = (e) => {
    this.setState({
      storeCities: this.mapCities(cities, e.target.value),
      inputValue:e.target.value,
    });
  }

  renderCities = () => {
    return this.state.storeCities.map((record, index) => {
      const regex = new RegExp(this.state.inputValue, 'gi');
      const cityHighlight = record.city.replace(regex, `<span class="hl">${this.state.inputValue}</span>`).toLowerCase();
      const stateHighlight = record.state.replace(regex, `<span class="hl">${this.state.inputValue}</span>`).toLowerCase();
      const cityAndStateDisplay = `${cityHighlight}, ${stateHighlight}`
      return (
        <li key={index}>
          <span dangerouslySetInnerHTML={{__html: cityAndStateDisplay}}></span>
          <span>{record.population}</span>
        </li>
      )
    })
  }

  render() {

    return (
      <div>
        <form className="search-form">
        
          <input
            type="text"
            className="search"
            placeholder="City or state"
            onChange={this.handleCities}/>

          {this.state.inputValue &&
          <ul className="suggestions">
            {this.renderCities()}
          </ul>}

        </form>
      </div>
    );
  }
}

export default App;

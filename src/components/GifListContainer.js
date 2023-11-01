import React, { Component } from 'react';
import GifList from './GifList';
import GifSearch from './GifSearch';

class GifListContainer extends Component {
  constructor() {
    super();
    this.state = {
      gifs: [],
    };
  }

  // Define a submit handler function to pass to GifSearch.
  handleSearch = (query) => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=BbpEGGOd8bl14bPoxTtpcMes9dn0pOP7&rating=g`
    )
      .then((response) => response.json())
      .then((data) => {
        // Update the state with the GIF data from the API response.
        this.setState({ gifs: data.data });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  render() {
    return (
      <div>
        <GifSearch handleSubmit={this.handleSearch} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

export default GifListContainer;

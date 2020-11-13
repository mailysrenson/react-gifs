import React from 'react';
import SearchBar from './SearchBar'
import Gif from './Gif'
import GifList from './GifList'
import giphy from 'giphy-api'

const GIPHY_API_KEY = '2ThqqfP16wESQV4tlrX5yYUCSoUAwXCE';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
      selectedGif: "YpZh61QjwuXq15FhV7"
    }
  }

  search = (query) => {
    giphy({ apiKey: GIPHY_API_KEY, https: true })
    .search({
      q: query,
      rating: 'g',
      limit: 10
    }, (err, result) => {
      this.setState({
        gifs: result.data
      });
    });
  }

  selectGif = (id) => {
    this.setState({selectedGif: id})
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar search={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGif} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectGif={this.selectGif} />
        </div>
      </div>
    );
  }
}

export default App;

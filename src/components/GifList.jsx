import React from 'react';
import Gif from './Gif'

class GifList extends React.Component {
  constructor(props) {
    super(props)
  }

  renderList = () => {
    return this.props.gifs.map(gif => {
          return <Gif id={gif.id} key={gif.id} selectGif={this.props.selectGif} />
    })
  }

  render() {
    return (
      <div className="gif-list">
        {this.renderList()}
      </div>
    )
  }
}

export default GifList;
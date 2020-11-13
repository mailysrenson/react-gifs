import React from 'react';

class Gif extends React.Component {
  constructor(props) {
    super(props)
  }

  handleClick = () => {
    if (this.props.selectGif) {
      this.props.selectGif(this.props.id);
    }
  }

  render() {
    let src = `https://media4.giphy.com/media/${this.props.id}/giphy.gif?cid=ecf05e472aa2c74fd40d30e2b9fe2ea1f418b16dfbd05498&rid=giphy.gif`
    return (
      <img src={src} alt="" className="gif" onClick={this.handleClick}/>
    )
  }
}

export default Gif;
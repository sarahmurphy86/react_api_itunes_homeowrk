import React from 'react';
import MusicList from '../components/MusicList';

class MusicBox extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      songs: [],
    };
  }

  componentDidMount() {
    console.log('componentDidMount');
  const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';

  fetch(url)
    .then(response => response.json() )
    .then(musicData => this.setState({songs: musicData.feed.entry}))
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="MusicBox">
        <h2>Chart Top 20</h2>
        <MusicList data={this.state.songs}/>
      </div>
    )
    // console.log(this.state.songs);
  }
}

export default MusicBox;

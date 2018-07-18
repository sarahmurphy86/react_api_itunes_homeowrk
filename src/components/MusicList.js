import React from 'react';

const MusicList = (props) => {
  return (
    <div>
      <h3>Song Name:{props.song.title.label}</h3>
    </div>
  );
}

// import Music from "./Music";

// class MusicList extends React.Component {
//   render() {
//
//     const musicInfo = this.props.songs.map((song, index) => {
//       return <Music title={song.title.label} key={index}></Music>
//   }
//
//   return (
//       <div className="song-list">
//         {musicInfo}
//       </div>
//     );
//
//   }
// }
export default MusicList;

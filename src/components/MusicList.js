import React from 'react';

const MusicList = (props) => {

    const chartHits = props.data.map((song)=> {
      return <h3>Song Name:{song['im:name'].label}</h3>
    })

      return(
        <p>
          {chartHits}
        </p>
      )

}
export default MusicList;

import React from 'react';
import albumCover from '../img/album-cover.jpg';

const Music = () => {


  return(
    <div>
        <div className="album-cover">
          <img src={albumCover} alt="Summer at Sundance" className="image"/>
        </div>
      <div className="album-text">
      <p>  Self-Produced Debut Album </p>
      <span className= "listen">
      <div className="spotify">
      <iframe title="spotify_player" src="https://open.spotify.com/embed/album/1ieCVJIakLYOFKEuyHDz4x" width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </div>
      </span>
      </div>
    </div>
  );
}
export default Music;

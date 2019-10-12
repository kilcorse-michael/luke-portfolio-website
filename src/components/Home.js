import React from 'react';
import luke_arrow from '../img/luke_arrow.png'

const Home = () => {

  return(
    <div className="main">
      <div className="landing">
          <h1 className="firstName">LUKE</h1>
          <div className = "image_luke">
          <img src={luke_arrow} className="arrow" alt="Luke Kilcorse" />
          </div>
          <div className="last_div">
            <h1 className="lastName">KILCORSE</h1>
          </div>
          <div className= "spotify">
            <iframe title="spotify_follow"
                    src="https://open.spotify.com/follow/1/?uri=spotify:artist:6JX3wtR8wpWLuZILmhLKqn&size=detail&theme=dark&show-count=0"
                    width="250"
                    height="56"
                    scrolling="no"
                    frameborder="0"
                    allowtransparency="true">
             </iframe>
          </div>
      </div>
    </div>
  );
}
export default Home;

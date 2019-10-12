import React from 'react';
import aboutLuke from '../img/about-luke.jpg'

const About = () => {
  return(
    <div className="container">
      <div className="about">
        <img className="about-img" src={aboutLuke} alt="Luke on the train tracks"/>
        <p>Luke Kilcorse is an up and coming singer/songwriter from Toledo, OH.<br/>
        Some of his biggest influences on his music have come from names such as <br/>Ed Sheeran, Charlie Puth and Noah Kahan.<br/>
        Luke is continuously working on multiple projects and you can find his debut album "Summer at Sundance" on all digital stores. </p>
      </div>
    </div>
  );
}
export default About;

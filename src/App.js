import React, { Component }  from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { loadReCaptcha } from 'react-recaptcha-google'

//app components
import Header from './components/Header.js';
import Home from './components/Home.js';
import About from './components/About.js';
import Music from './components/Music.js';
import Contact from './components/Contact.js';
import Live from './components/Live.js';
import NotFound from './components/NotFound.js'
import SocialFooter from './components/SocialFooter.js'


class App extends Component {

  componentDidMount() {
  loadReCaptcha();
}

render(){
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
          <Switch>
            <Route exact path = "/" component={Home}/>
            <Route path = "/about" component={About}/>
            <Route path = "/live" component={Live}/>
            <Route path = "/music" component={Music}/>
            <Route path = "/contact" component={Contact}/>
            <Route component={NotFound}/>
          </Switch>
        <SocialFooter />
      </BrowserRouter>
    </div>
  );
}
}
export default App;

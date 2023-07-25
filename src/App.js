import React, { Component } from 'react';
import './App.css';
import Spotifyleft from './Component/Spotifyleft';
import Spotifyright from './Component/Spotifyright';

class App extends Component {
  render() {
    return (
      <section className="spotifybody">
       <div className="spotifycombined">
       <Spotifyleft/>
       <Spotifyright/>
       </div>
       <div className="spotifybottombox">
       <a href="" className="sotifybottoms">
        <a href="">
         PREVIEW OF SPOTIFY
        </a>
        <a href="">
          Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.
        </a>
       </a>
       <button className="bottombutton">Sign up free</button>
       </div>
      </section>
    )
  }
}
export default  App;


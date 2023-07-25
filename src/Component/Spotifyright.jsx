import React, { Component } from "react";
import "./../Css/spotifyright.css";
import Spotifymusic from "./Spotifymusic";
import spotifylogo from "./../assist/Image/Brand_logo.png";

class Spotifyright extends Component {

// ============.==========Click event=========

handleClick=()=>{
{alert('Hellodeveloper')};
}


  render() {
    return (
      <section className="spotifyright">
        <header className="header-part">
          <div className="Brandlogo">
            <img src={spotifylogo} alt="spotifylogo" />
          </div>
          <div className="combinedheadericon">
            <div className="searched">
              <i className="fa-solid   fa-magnifying-glass headerrighticon"></i>
            </div>
            <button className="openapp headerrighticon">
              <a href="">OPEN APP</a>
            </button>
            <i className="fa-solid fa-bars  headerrighticon" onClick={this.handleClick}></i>
          </div>
          <nav>
          <i className="fa-solid fa-xmark" ></i>
            <ul>
              <li>
                <a href="">Premium</a>
              </li>
              <li>
                <a href="">Support</a>
              </li>
              <li>
                <a href="">Download</a>
              </li>
              <span className="span1">|</span>
              <span className="span2">—</span>

              <li>
                <a href="">Signup</a>
              </li>
              <li>
                <button>Login</button>
              </li>
            </ul>
          </nav>
        </header>
        {/* ==============musicsection============ */}
        <section className="musicsection">
          <Spotifymusic />
        </section>
      </section>
    );

    // ========================Action on button===================



  }
}
export default Spotifyright;

import React, { Component } from "react";
import "./../Css/spotifyleftbody.css";

class Spotifyleftbody extends Component {
  render() {
    return (
      <article className="spotifyleft-body">
        <div className="spotifyleft-body-top">
          <a href="" title="Collapse Your Library">
            Your Library
          </a>
          <a href="" title="Create playlist or folder">
            +
          </a>
        </div>

        <div className="spotifyleft-body-mid">
          <div className="spotifyleft-bodys spotifyleft-body-mid1">
            <h3>Create your first playlist</h3>
            <p>it's easy, we'll help you</p>
            <button>Create playlist</button>
          </div>
          <div className="spotifyleft-bodys spotifyleft-body-mid2">
            <h3>Let's find some podcasts to follow</h3>
            <p>We'll keep you updated on new episodes</p>
            <button>Browser podcasts</button>
          </div>
        </div>

        <div className="spotifyleft-body-bottom">
          <p>
            <a href="">Legal</a>
            <a href="">Privacy Center</a>
            <a href="">Privacy Policy</a>
            <a href="">Cookies</a>
          </p>

          <p>
            <a href="">About Ads</a>
            <a href="">Accessibility</a>
          </p>

          <p>
            <a href="" className="underline">
              Cookies
            </a>
          </p>
        </div>
        <button className="buttons">🌐 English</button>
      </article>
    );
  }
}
export default Spotifyleftbody;

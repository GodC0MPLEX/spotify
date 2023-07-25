import React, { Component } from "react";
import "./../Css/spotifyleft.css";
import Spotifyleftbody from "./Spotifyleftbody";

class Spotifyleft extends Component {
  render() {
    return (
      <section className="spotifyleft">
        <header className="spotifyleft-header">
        <p><i className="fa-sharp  fa-solid fa-house"></i> <a href="">Home</a></p>
         <p><i className="fa-solid   fa-magnifying-glass"></i><a href="">Search</a></p>
        </header>
        <Spotifyleftbody/>
      </section>
    );
  }
}
export default Spotifyleft;

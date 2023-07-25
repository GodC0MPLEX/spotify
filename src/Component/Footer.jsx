import React, { Component } from "react";
import "./../Css/footer.css";

class Footer extends Component {
  render() {
    return (
     <div className="footers-box">
      <div className="footerparent1">
       <div className="footerchild1">
       <div className="fotext">
        <p className="textgrey">company</p>
        <a href="#" className="textg">about</a>
        <a href="#" className="textg">jobs</a>
        <a href="#" className="textg">for the Record</a>
      </div>
      <div className="fotext">
        <p className="textgrey">communities</p>
        <a href="#" className="textg">For Artist</a>
        <a href="#" className="textg">Developers</a>
        <a href="#" className="textg">Advertising</a>
        <a href="#" className="textg">investors</a>
        <a href="#" className="textg">vendors</a>
        <a href="#" className="textg">spotify for Work</a>
      </div>
      <div className="fotext">
        <p className="textgrey">Useful Links</p>
        <a href="#" className="textg">Support</a>
        <a href="#" className="textg">Web Player</a>
        <a href="#" className="textg">Free Mobile App</a>
      </div>
       </div>

       <div className="footerchild2">
       <div className="socialmedia">
          <div className="circle"><a href="#" className="textg"><i className="fa-brands fa-instagram social"></i></a></div>
          <div className="circle"><a href="#" className="textg"><i className="fa-brands fa-twitter social"></i></a></div>
          <div className="circle"><a href="#" className="textg"><i className="fa-brands fa-facebook-f social"></i></a></div>
        </div>
       </div>
      </div>
      <hr/>
      <div className="footerparent2">
       <p>© 2023 SpotifyClone By TheLonEWOLF.</p>
       <button className="buttoned">🌐 English</button>
      </div>
      
     </div>
    );
  }
}
export default Footer;

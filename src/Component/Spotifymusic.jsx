import React, { Component } from "react";
import "./../Css/spotifymusic.css";
import Footer from "./Footer";
import mahi from "./../assist/audio/Ve Maahi _ Kesari _ Akshay Kumar _ Parineeti Chopra _ Arijit Singh _ Asees Kaur _ Tanishk Bagchi(MP3_128K).mp3";
import apna from "./../assist/audio/Apna Bana Le - Bhediya _ Varun Dhawan_ Kriti Sanon_ Sachin-Jigar_ Arijit Singh_ Amitabh Bhattacharya(MP3_128K).mp3";
import phir from "./../assist/audio/Phir Aur Kya Chahiye(PagalWorld.com.se).mp3";
import deva from "./../assist/audio/Deva.mp3";
import jhoome from "./../assist/audio/Jhoome Jo Pathan MP3 Song _ Shah Rukh Khan _ Deepika _ Arijit Singh _ Vishal(MP3_160K).mp3";
import kesariya from "./../assist/audio/Kesariya_64(PagalWorld.com.se).mp3";
import baarish from "./../assist/audio/SaveTube.io - Baarish by Atif Aslam _ Half Girlfriend _ Arjun Kapoor & Shraddha Kapoor _ Tanishk Bagchi _ Lyrical (128 kbps).mp3";
import sake from "./../assist/audio/SaveTube.io - HO SAKE JO AYE TU ANKHIYON KE SAMNE ( OFFICIAL MUSIC VIDEO ) #SAD SONG (128 kbps).mp3";
import vilen from "./../assist/audio/SaveTube.io - Vilen - _Chidiya_ Song Lyrics __ Ye Jo Jhoomta Savan Hai __ Dark Music Company __ Lyrics & You (128 kbps).mp3";
class Spotifymusic extends Component {
  // ===================music play=============
  render() {
    return (
      // <section className="sectionmusictop">  </section>
      <div className="sectionmusic">
        {/* ================Focus  label1==================== */}
        <div className="sectionmusic1">
          <div className="sectionmusictop">
            <a href="">
              <h2>Focus</h2>
            </a>
            <a href="">
              <p>Show all</p>
            </a>
          </div>
          <div className="sectionmusicbottomtop">
            <div className="sectionmusicbottom">
              <div className="spotifyimagepart">
                <div className="spotifyimage spotifyimage1 ">
                  <p>Peaceful Piano</p>
                  <i className="fa-solid fa-play">
                    <audio controls>
                      <source src={vilen} />
                    </audio>
                  </i>
                </div>
                <div className="spotifymusiccontent">
                  <h3>
                    <a href="" title="Peaceful Piano">
                      Peaceful Piano
                    </a>
                  </h3>
                  <p>
                    <a href="">Peaceful piano to help you slow down...</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="sectionmusicbottom">
              <div className="spotifyimagepart">
                <div className="spotifyimage spotifyimage2">
                  <p>Deep Focus</p>
                  <i className="fa-solid fa-play">
                    <audio controls>
                      <source src={kesariya} />
                    </audio>
                  </i>
                </div>
                <div className="spotifymusiccontent">
                  <h3>
                    <a href="" title="Deep Focus">
                      Deep Focus
                    </a>
                  </h3>
                  <p>
                    <a href="">Keep clam and focus and post-rock...</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="sectionmusicbottom">
              <div className="spotifyimagepart">
                <div className="spotifyimage spotifyimage3">
                  <p>Instrumental Study</p>
                  <i className="fa-solid fa-play">
                    <audio controls>
                      <source src={deva} />
                    </audio>
                  </i>
                </div>
                <div className="spotifymusiccontent">
                  <h3>
                    <a href="" title="Instrumental Study">
                      Instrumental Study
                    </a>
                  </h3>
                  <p>
                    <a href="">Focus with soft study music...</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="sectionmusicbottom">
              <div className="spotifyimagepart">
                <div className="spotifyimage spotifyimage4">
                  <p>Focus Flow</p>
                  <i className="fa-solid fa-play">
                    <audio controls>
                      <source src={phir} />
                    </audio>
                  </i>
                </div>
                <div className="spotifymusiccontent">
                  <h3>
                    <a href="" title="Focus Flow">
                      Focus Flow
                    </a>
                  </h3>
                  <p>
                    <a href="">Uptempo intrumental hip hop beats...</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="sectionmusicbottom sectionmusicbottomlast">
              <div className="spotifyimagepart">
                <div className="spotifyimage spotifyimage5">
                  <p>Workday Lounge</p>
                  <i className="fa-solid fa-play">
                    <audio controls>
                      <source src={apna} />
                    </audio>
                  </i>
                </div>
                <div className="spotifymusiccontent">
                  <h3>
                    <a href="" title="Workday Lounge">
                      Workday Lounge
                    </a>
                  </h3>
                  <p>
                    <a href="">Lounge and chill out music for workday...</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ===========================Spotify Playlists label2======================= */}
        <div className="sectionmusic1">
          <div className="sectionmusictop">
            <a href="">
              <h2>Spotify Playlists</h2>
            </a>
            <a href="">
              <p>Show all</p>
            </a>
          </div>

          <div className="sectionmusicbottomtop">
            <div className="sectionmusicbottom">
              <div className="spotifyimagepart">
                <div className="spotifyimage spotifyimage6 ">
                  <i className="fa-solid fa-play">
                    <audio controls>
                      <source src={jhoome} />
                    </audio>
                  </i>
                </div>
                <div className="spotifymusiccontent">
                  <h3>
                    <a href="" title="Today's Top Hits">
                      Today's Top Hits...
                    </a>
                  </h3>
                  <p>
                    <a href="">
                      Billies Eillish is on top of the Hottest 50!...
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="sectionmusicbottom">
              <div className="spotifyimagepart">
                <div className="spotifyimage spotifyimage7">
                  <i className="fa-solid fa-play">
                    <audio controls>
                      <source src={baarish} />
                    </audio>
                  </i>
                </div>
                <div className="spotifymusiccontent">
                  <h3>
                    <a href="" title="RapCaviar">
                      RapCaviar...
                    </a>
                  </h3>
                  <p>
                    <a href="">New music from Half Girlfriend...</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="sectionmusicbottom">
              <div className="spotifyimagepart">
                <div className="spotifyimage spotifyimage8">
                  <i className="fa-solid fa-play">
                    <audio controls>
                      <source src={sake} />
                    </audio>
                  </i>
                </div>
                <div className="spotifymusiccontent">
                  <h3>
                    <a href="" title="  All out 2023s">
                      All out 2023s...
                    </a>
                  </h3>
                  <p>
                    <a href="">This biggest songs of the 2023s...</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="sectionmusicbottom">
              <div className="spotifyimagepart">
                <div className="spotifyimage spotifyimage9">
                  <i className="fa-solid fa-play">
                    <audio controls>
                      <source src={kesariya} />
                    </audio>
                  </i>
                </div>
                <div className="spotifymusiccontent">
                  <h3>
                    <a href="" title=" Rock Classics">
                      Rock Classics...
                    </a>
                  </h3>
                  <p>
                    <a href="">Rock Classics and epic Songs Kesariya...</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="sectionmusicbottom  sectionmusicbottomlast">
              <div className="spotifyimagepart">
                <div className="spotifyimage spotifyimage10">
                  <i className="fa-solid fa-play">
                    <audio controls>
                      <source src={vilen} />
                    </audio>
                  </i>
                </div>
                <div className="spotifymusiccontent">
                  <h3>
                    <a href="" title="The Sound of Mumbai IN">
                      Chill Hits...
                    </a>
                  </h3>
                  <p>
                    <a href="">Best song by Arman Malik Chill hits...</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===========================Sound of India label3======================= */}
        <div className="sectionmusic1">
          <div className="sectionmusictop">
            <a href="">
              <h2>Sound of India</h2>
            </a>
            <a href="">
              <p>Show all</p>
            </a>
          </div>

          <div className="sectionmusicbottomtop">
            <div className="sectionmusicbottom">
              <div className="spotifyimagepart">
                <div className="spotifyimage spotifyimage11 ">
                  <p>Sound of Mumbai</p>
                  <i className="fa-solid fa-play">
                    <audio controls>
                      <source src={vilen} />
                    </audio>
                  </i>
                </div>
                <div className="spotifymusiccontent">
                  <h3>
                    <a href="" title="The Sound of Mumbai IN">
                      The Sound of Mum...
                    </a>
                  </h3>
                  <p>
                    <a href="">
                      The songs that define, unite and distinguish...
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="sectionmusicbottom">
              <div className="spotifyimagepart">
                <div className="spotifyimage spotifyimage12">
                  <p className="delhi">Sound of Delhi</p>
                  <i className="fa-solid fa-play">
                    <audio controls>
                      <source src={mahi} />
                    </audio>
                  </i>
                </div>
                <div className="spotifymusiccontent">
                  <h3>
                    <a href="" title="The Sound of Delhi">
                      The Sound of Delhi...
                    </a>
                  </h3>
                  <p>
                    <a href="">
                      The songs that define, unite and distinguish...
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="sectionmusicbottom">
              <div className="spotifyimagepart">
                <div className="spotifyimage spotifyimage13">
                  <p>Sound of Bangaluru</p>
                  <i className="fa-solid fa-play">
                    <audio controls>
                      <source src={vilen} />
                    </audio>
                  </i>
                </div>
                <div className="spotifymusiccontent">
                  <h3>
                    <a href="" title="The Sound of Bangaluru">
                      The Sound of Bang...
                    </a>
                  </h3>
                  <p>
                    <a href="">
                      The songs that define, unite and distinguish...
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="sectionmusicbottom">
              <div className="spotifyimagepart">
                <div className="spotifyimage spotifyimage14">
                  <p>Sound of Kolkata</p>
                  <i className="fa-solid fa-play">
                    <audio controls>
                      <source src={vilen} />
                    </audio>
                  </i>
                </div>
                <div className="spotifymusiccontent">
                  <h3>
                    <a href="" title="The Sound of Kolkata">
                      The Sound of Kol...
                    </a>
                  </h3>
                  <p>
                    <a href="">
                      The songs that define, unite and distinguish...
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="sectionmusicbottom sectionmusicbottomlast">
              <div className="spotifyimagepart">
                <div className="spotifyimage spotifyimage15">
                  <p>Sound of Chennai</p>
                  <i className="fa-solid fa-play">
                    <audio controls>
                      <source src={vilen} />
                    </audio>
                  </i>
                </div>
                <div className="spotifymusiccontent">
                  <h3>
                    <a href="" title="Sound of Chennai">
                      The Sound of Chan...
                    </a>
                  </h3>
                  <p>
                    <a href="">
                      The songs that define, unite and distinguish...
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ==========footer====================== */}
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}
export default Spotifymusic;

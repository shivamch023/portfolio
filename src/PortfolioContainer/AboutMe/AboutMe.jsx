import React from "react";
import "./AboutMe.css";
import birth_icon from "../Assets/Images/birth.png";
import l_icon from "../Assets/Images/locate.png";
import st_icon from "../Assets/Images/study.png";
import mail_icon from "../Assets/Images/gmail.png";
import age_icon from "../Assets/Images/age.png";
import dig_icon from "../Assets/Images/graduate.png";
import game_icon from "../Assets/Images/game.png";
import phone_icon from "../Assets/Images/phone.png";
import shivm_icon from '../Assets/Images/shivam (1).png'

const About = () => {
  return (
    <div className="about-container" id="about">
      <div className="h2">About Me</div>
      <div className="image-details">
        <div className="image">
          <img src={shivm_icon} alt="" />
        </div>
        <div className="details">
          <div className="h3-text">
            <h3>I'm Shivam Chauhan And <span>React Developer</span></h3>
          </div>
          <div className="p-text">
            Hi My Name Is <span>Shivam Chauhan.</span>I am a web Developer. And
            I'm very passanate and dedicated to my work. And i'm fresher as a
            Web developer, I have acquired the skills and knowledge neccesary to
            make your project a success.
          </div>
          <div className="bio-details">
            <div className="bio1">
              <div className="bio1-col">
                <img src={birth_icon} alt="" />
                <p> <span>Birthday :</span> 14-12-2003</p>
              </div>
              <div className="bio1-col">
                <img src={l_icon} alt="" />
                <p><span>Location :</span> UttarPradesh India</p>
              </div>
              <div className="bio1-col">
                <img src={st_icon} alt="" />
                <p><span>Study :</span> BRCM CET</p>
              </div>
              <div className="bio1-col">
                <img src={mail_icon} alt="" />
                <p><span>Mail :</span> shivamchauhan2499@gmail.com</p>
              </div>
            </div>
            <div className="bio2">
                <div className="bio2-col">
                  <img src={age_icon} alt="" />
                  <p><span>Age :</span> 22</p>
                </div>
                <div className="bio2-col">
                  <img src={game_icon} alt="" />
                  <p><span>Interest :</span> Playing Cricket and study</p>
                </div>
                <div className="bio2-col">
                  <img src={dig_icon} alt="" />
                  <p><span>Digree : </span>Bachelor Of Tech (UG) </p>
                </div>
                <div className="bio2-col">
                  <img src={phone_icon} alt="" />
                  <p><span>Phone :</span> +91 6394687564</p>
                </div>
              </div>
            
          </div>
          <div className="btn-cv">
            <button>Download cv</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

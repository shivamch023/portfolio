import React from "react";
import fb_icon from "../Assets/Images/fb.png";
import insta_icon from "../Assets/Images/insta.png";
import wt_icon from "../Assets/Images/wtsp.png";
import link_icon from "../Assets/Images/link.png";
import git_icon from "../Assets/Images/git.png";
import "./Profile.css";
import Typical from 'react-typical'
import resume from "../Assets/Images/resume.pdf";

const Profile = () => {
  return (
    <div className="profile-container" id="home">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/profile.php?id=100030231424422&mibextid=ZbWKwL">
                <img src={fb_icon} alt="" />
              </a>
              <a href="https://www.instagram.com/shivamchauhan6769?igsh=ZGE2bTFkb2gzMzk4">
                <img src={insta_icon} alt="" />
              </a>
              <a href="https://whatsapp.com/dl/7459045602">
                <img src={wt_icon} alt="" />
              </a>
              <a href="https://www.linkedin.com/in/shivam-chauhan-81665b279">
                <img src={link_icon} alt="" />
              </a>
              <a href="https://github.com/shivamch023">
                <img src={git_icon} alt="" />
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <sapn className="highlighted-text">Shivam</sapn>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    " Shivam chauhan",
                    2000,
                    "Frontend Developer",
                    2000,
                    " MERN Developer",
                    2000,
                    "UI/UX Designer",
                    2000,
                    "Backend Developer",
                    2000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Knack of building apllication with front and back end operation.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn"> Hire Me </button>
            <a href={resume} download="Shivam resume.pdf">
              <button className="btn highlighted-btn">Downlaod Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
        <div className="profile-picture-background"></div>
        </div>
        
      </div>
    </div>
  );
};
export default Profile;

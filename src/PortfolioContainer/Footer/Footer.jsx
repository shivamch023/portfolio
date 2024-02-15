import React from "react";
import "./Footer.css";
import shivm from "../Assets/Images/shivam (1).png";
import phone_icon from "../Assets/Images/phone.png";
import email_icon from "../Assets/Images/gmail.png";
import adress_icon from "../Assets/Images/location.png";
import wt_icon from "../Assets/Images/wt.png";

const Footer = () => {
  const openWhatsApp = () => {
    window.open("https://wa.me/917459045602", "_blank");
  };

  const openEmail = () => {
    window.open("mailto:shivamchauhan2499@gmail.com", "_blank");
  };

  const openMaps = () => {
    const address = "Azamgarh, Uttar Pradesh, India - 276404";
    window.open(
      `https://www.google.com/maps/search/${encodeURIComponent(address)}`,
      "_blank"
    );
  };

  const phoneNumber = "+91 6394687564";

  const makePhoneCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <footer>
      <div className="footer-content">
        <div className="footer-card1">
          <img src={shivm} alt="" />
        </div>
        <div className="footer-card">
          <h2>Shivam chauhan</h2>
          <div className="card1-btn">
            <div className="btn1">
              <button onClick={() => scrollToSection('my-skill')}>Skills</button>
              <button onClick={() => scrollToSection('projects')}>Projects</button>
            </div>
            <div className="btn1">
              <button onClick={() => scrollToSection('about')} >About me</button>
              <button onClick={() => scrollToSection('home')}>Home</button>
            </div>
          </div>
        </div>

        <div className="footer-card2">
          <div class="contact-item" onClick={openMaps}>
            <p>
              <img src={adress_icon} alt="" /> : Azamgarh , Uttar pradesh ,
              India -276404
            </p>
          </div>
          <div class="contact-item" onClick={openEmail}>
            <p>
              <img src={email_icon} alt="" /> : shivamchauhan2499@gmail.com
            </p>
          </div>
          <div
            className="contact-item"
            onClick={makePhoneCall}
            style={{ cursor: "pointer" }}
          >
            <p>
              <img src={phone_icon} alt="" /> : {phoneNumber}
            </p>
          </div>
          <div class="contact-item" onClick={openWhatsApp}>
            <p>
              <img src={wt_icon} alt="" /> : +91 7459045602
            </p>
          </div>
        </div>
      </div>
      <div className="copy-right"><p>&copy; 2024 Portfolio. All Rights Reserved.</p></div>
    </footer>
  );
};

export default Footer;

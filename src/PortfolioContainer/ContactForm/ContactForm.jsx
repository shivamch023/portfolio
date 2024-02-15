import React, { useState } from "react";
import "./ContactForm.css";
import contactme from '../Assets/Images/contactme.png';
import axios from 'axios';

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    console.log("Sending message:", { name, email, message });

    const formData = {
      username: name,
      email: email,
      message: message
    };

    axios.post('/ContactForm', formData)
      .then(response => {
        console.log("Email sent successfully:", response);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch(error => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <div className="total-container" id="Contactme">
      <h2>Contact us</h2>
      <div className="main-container">
        <div className="card-inner">
          <form id="signUP">
            <div className="user-box">
              <input
                type="text"
                id="username"
                name="username"
                required
                onChange={handleNameChange}
                value={name}
              />
              <label>Username</label>
            </div>
            <div className="user-box">
              <input
                type="email"
                id="email"
                name="email"
                required
                onChange={handleEmailChange}
                value={email}
              />
              <label>Email</label>
            </div>
            <div className="user-box">
              <input
                type="text"
                id="message"
                name="message"
                required
                onChange={handleMessageChange}
                value={message}
              />
              <label>Message</label>

              <div className="btn">
                <button type="button" onClick={handleSendMessage}>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className="contact-image">
          <img src={contactme} alt="Contact" />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

import React, { useRef, useState } from 'react';
import dropdown_icon from '../Assets/Images/dropdown.png';
import './Navbar.css';

const Navbar = () => {
  const [menu, setMenu] = useState('home');
  const menuRef = useRef();

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMenu(sectionId); // Optional: Menu item ko highlight karne ke liye
    }
  };

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  };

  return (
    <div className='navbar'>
      <div>
        <h1>Shivam.</h1>
      </div>
      <div className='nav-dropdown' onClick={dropdown_toggle}>
        <img src={dropdown_icon} alt='' />
      </div>
      <div ref={menuRef} className='navbar-container'>
        <button onClick={() => scrollToSection('home')}>Home</button>
        <button onClick={() => scrollToSection('about')}>About Me</button>
        <button onClick={() => scrollToSection('my-skill')}>Skills</button>
        <button onClick={() => scrollToSection('projects')}>Projects</button>
        <button onClick={() => scrollToSection('Contactme')}>Contact Me</button>
      </div>
    </div>
  );
};

export default Navbar;

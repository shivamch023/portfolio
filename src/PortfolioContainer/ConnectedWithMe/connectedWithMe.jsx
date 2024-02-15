import React from 'react'
import './connectedMe.css'
import insta_icon from '../Assets/Images/insta.png';
import git_icon from '../Assets/Images/git.png';
import link_icon from '../Assets/Images/link.png';
import fb_icon from '../Assets/Images/fb.png';
import yt_icon from '../Assets/Images/yt.png'
import c_icon from '../Assets/Images/connect.png'
const connectedWithMe = () => {
  return (
    <div className='connectedwithme'>
        <h2>Connect With Me <img src={c_icon} alt="" /> Through Social Media</h2>
        <div className='social-link'>
            <div className='links'><a href="https://www.instagram.com/shivamchauhan6769?igsh=ZGE2bTFkb2gzMzk4" target='_blank'><img src={insta_icon} alt="" /></a></div>
            <div className='links'><a href="https://github.com/shivamch023" target='_blank' ><img src={git_icon} alt="" /></a></div>
            <div className='links'><a href="https://www.linkedin.com/in/shivam-chauhan-81665b279" target='_blank'><img src={link_icon} alt="" /></a></div>
            <div className='links'><a href="https://www.facebook.com/profile.php?id=100030231424422&mibextid=ZbWKwL" target='_blank'><img src={fb_icon} alt="" /></a></div>
            <div className='links'><a href="https://www.youtube.com/" target='_blank'><img src={yt_icon} alt="" /></a></div>
        </div>
    </div>
  )
}

export default connectedWithMe;
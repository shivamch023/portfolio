import React from 'react'

import Footer from './Footer/Footer'
import './Home.css'
import Navbar from '../Navbar/Navbar'
import Profile from './Profile'


const Home = () => {
  return (
    <div className='home-container'>
        <Navbar/>
        <Profile/>
        <Footer/>
    </div>
  )
}

export default Home;
import React from 'react'
import html from '../Assets/skill/html.png'
import css from '../Assets/skill/css.png'
import javascript from '../Assets/skill/javascript.png'
import react from '../Assets/skill/react.png'
import node from '../Assets/skill/nodejs.png'
import express from '../Assets/skill/express-js.png'
import mongo from '../Assets/skill/mongodb.png'
import bt from '../Assets/skill/Bootstrap.png'
import tw from '../Assets/skill/tailwind.png'
import sql from '../Assets/skill/sql.png'
import py from '../Assets/skill/python.png'
import c from  '../Assets/skill/c++.jpg'
import './MySkill.css'
import skillimg from '../Assets/skill/skillimg.png'

const MySkill = () => {
  return (
    <div className='myskills-container' id='my-skill'>
        <div className='skills-container1'>
            <h2>My Skills</h2>
            <div>
                <p>I am a full-stack web developer with expertise in React for front-end, Node.js and Express for server-side, and MongoDB for efficient data storage. My skill set enables me to create dynamic and responsive web applications seamlessly.</p>
            </div>
            <img src={skillimg}alt="" />
        </div>
        <div className='skils-container2'>
            <div className='html skill'>
                <img src={html} alt="" />
                <p>HTML is a markup language used structure web pages. It assists web browsers in understanding how to display the content.</p>
            </div>
            <div className='css skill'>
            <img src={css} alt="" />
                <p>CSS is a style sheet language used for describing the presentation of a document written in HTML or XMl.</p>
            </div>
            <div className='javascript skill'>
            <img src={javascript} alt="" />
                <p>JavaScript is a versatile programming language primarily used for creating dynamic and interactive content on websites.</p>
            </div>
            <div className='reactjs skill'>
            <img src={react} alt="" />
                <p>React is a popular JavaScript library for building user interfaces, particularly for single-page applications.</p>
            </div>
            <div className='expressjs skill'>
            <img src={express} alt="" />
                <p>Express.js is a web application framework for Node.js, designed to simplify the process of building robust and scalable web.</p>
            </div>
            <div className='nodejs skill'>
            <img src={node} alt="" />
                <p>Node.js is an open-source, server-side runtime environment built on the Chrome V8 JavaScript engine</p>
            </div>
            <div className='mongodb skill'>
            <img src={mongo} alt="" />
                <p>MongoDB is a popular, open-source NoSQL database that provides a flexible and scalable way to store and manage data. </p>
            </div>
            <div className='bootstrap skill'>
            <img src={bt} alt="" />
                <p>Bootstrap is a popular open-source front-end framework that simplifies the process of designing and developing responsive.</p>
            </div>
            <div className='tailwind-css skill'>
            <img src={tw} alt="" />
                <p>Tailwind CSS is a utility-first CSS framework that provides a set of pre-designed, low-level utility classes that you can use directly .</p>
            </div>
            <div className='sql skill'>
            <img src={sql} alt="" />
                <p>SQL is a programming language used for managing and manipulating relational databases.</p>
            </div>
            <div className='python skill'>
            <img src={py} alt="" />
                <p>Python is a high-level, interpreted programming language known for its simplicity, readability, and versatility.</p>
            </div> <div className='c++ skill'>
            <img src={c} alt="" />
                <p>C++ is a powerful, general-purpose programming language that builds on the foundation of the C programming language. </p>
            </div>
        </div>
    </div>
  )
}

export default MySkill;
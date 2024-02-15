import React from 'react'
import './ProjectSection.css'
import ecomerce from '../Assets/projectimage/ecommerce.png'
import cltr from '../Assets/projectimage/calculator.png'
import tl from '../Assets/projectimage/todo list.png'
import study from '../Assets/projectimage/study.png'

const ProjecSection = () => {
  return (
    <div className='project-section' id='projects'>
        <div className='section-header'>
            <h2>My Project's</h2>
        </div>
        <div className='project-section-card'>
            <div className='image-section'>
                <img src={ecomerce} alt="" />
            </div>
            <div className="project-details">
                <h3>ShipKart</h3>
                <p>ShipKart, an e-commerce site, boasts a sleek interface powered by React.js, backed by Express.js, MongoDB, and Node.js for a seamless shopping experience.</p>
                <div className='Skill-2'>
                    <div className='skillname-text'>
                         <p>Skill :</p>
                         <div className='skill-1'>
                            <h5>Reactjs</h5>
                            <h5>NodeJS</h5>
                            <h5>ExpressJs</h5>
                            {/* <h5>MongoDb</h5> */}
                         </div>
                    </div>
                </div>
                <div className='btn-project'>
                    <a href=""><button>Live Demo</button></a>
                    <a href="https://github.com/shivamch023/E-commerce" target='blank'><button>Git Link</button></a>
                </div>
            </div>
        </div>
        <div className='project-section-card'>
            <div className='image-section'>
                <img src={cltr} alt="" />
            </div>
            <div className="project-details">
                <h3>Calculator</h3>
                <p>This React.js calculator features basic operations: addition (+), subtraction (-), multiplication (*), and division (/) in a simple and effective design.</p>
                <div className='Skill-2'>
                    <div className='skillname-text'>
                         <p>Skill :</p>
                         <div className='skill-1'>
                            <h5>Reactjs</h5>
                         </div>
                    </div>
                </div>
                <div className='btn-project'>
                    <a href=""><button>Live Demo</button></a>
                    <a href="https://github.com/shivamch023/calculator-react" target='blank'><button>Git Link</button></a>
                </div>
            </div>
        </div>
        <div className='project-section-card'>
            <div className='image-section'>
                <img src={tl} alt="" />
            </div>
            <div className="project-details">
                <h3>TODO List</h3>
                <p>This React.js to-do list enables easy text input and saving for quick and efficient task management.</p>
                <div className='Skill-2'>
                    <div className='skillname-text'>
                         <p>Skill :</p>
                         <div className='skill-1'>
                            <h5>Reactjs</h5>
                         </div>
                    </div>
                </div>
                <div className='btn-project'>
                    <a href=""><button>Live Demo</button></a>
                    <a href=""><button>Git Link</button></a>
                </div>
            </div>
        </div>
        <div className='project-section-card'>
            <div className='image-section'>
                <img src={study} alt="" />
            </div>
            <div className="project-details">
                <h3>StudyAdda</h3>
                <p>StudyAdd is an e-learning frontend website crafted using HTML, CSS, and JavaScript, providing a user-friendly interface for a dynamic educational experience</p>
                <div className='skill-2'>
                    <div className='skillname-text'>
                        <p>Skill :</p>
                        <div className='skill-1'>
                        <h5>HTML</h5>
                        <h5>CSS</h5>
                        <h5>JavaScript</h5>
                        </div>
                    </div>
                </div>
                <div className='btn-project'>
                    <a href=""><button>Live Demo</button></a>
                    <a href=""><button>Git Link</button></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjecSection
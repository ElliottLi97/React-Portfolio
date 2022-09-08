import React from 'react';
import NoteTaker from '../media/NoteTaker.png'
import Medical from '../media/MedicalPortal.png'
import Crime from '../media/CrimeWatch.png'
import TechBlog from '../media/TechBlog.png'
import WeatherDash from '../media/WeatherDash.png'
import WorkDayScheduler from '../media/WorkDayScheduler.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
function Projects(props) {


  return (
    <div>
      <div className="ProjectsContainer">
        <div className='ProjectCard relative'>
          <img className='projectImage' src={Medical} alt="Profile Picture" />
          <div className='projectInfoContainer'>
            <div className='projectLinks'>
              <a href="https://www.w3schools.com" target="_blank" rel="noopener noreferrer">Medical Portal</a>
              <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
            <div className='projectDetails'>Express/SQL</div>
          </div>
        </div>
        <div className='ProjectCard relative'>
          <img className='projectImage' src={Crime} alt="Profile Picture" />
          <div className='projectInfoContainer'>
            <div className='projectLinks'>
              <a href="https://www.w3schools.com" target="_blank" rel="noopener noreferrer">Crime Watch</a>
              <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
            <div className='projectDetails'>Java Script</div>
          </div>
        </div>
        <div className='ProjectCard relative'>
          <img className='projectImage' src={NoteTaker} alt="Profile Picture" />
          <div className='projectInfoContainer'>
            <div className='projectLinks'>
              <a href="https://www.w3schools.com" target="_blank" rel="noopener noreferrer">Express Note Taker</a>
              <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <div className='projectDetails'>Express</div>
            </div>
          </div>
        </div>
      </div>
      <div className="ProjectsContainer">
        <div className='ProjectCard relative'>
          <img className='projectImage' src={TechBlog} alt="Profile Picture" />
          <div className='projectInfoContainer'>
            <div className='projectLinks'>
              <a href="https://www.w3schools.com" target="_blank" rel="noopener noreferrer">Tech Blog</a>
              <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
            <div className='projectDetails'>Express/SQL</div>
          </div>
        </div>
        <div className='ProjectCard relative'>
          <img className='projectImage' src={WeatherDash} alt="Profile Picture" />
          <div className='projectInfoContainer'>
            <div className='projectLinks'>
              <a href="https://www.w3schools.com" target="_blank" rel="noopener noreferrer">Weather Display</a>
              <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
            <div className='projectDetails'>Java Script</div>
          </div>
        </div>
        <div className='ProjectCard relative'>
          <img className='projectImage' src={WorkDayScheduler} alt="Profile Picture" />
          <div className='projectInfoContainer'>
            <div className='projectLinks'>
              <a href="https://www.w3schools.com" target="_blank" rel="noopener noreferrer">Schedule App</a>
              <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
            <div className='projectDetails'>Java Script</div>
          </div>
        </div>
      </div>
    </div>

  )
}
export default Projects;

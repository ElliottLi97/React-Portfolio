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
              <a href="https://medicalportalgroup2.herokuapp.com/" target="_blank" rel="noopener noreferrer">Medical Portal</a>
              <a href="https://github.com/ElliottLi97/Medical-Portal" target="_blank" rel="noopener noreferrer">
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
              <a href="https://elliottli97.github.io/Crime-Watch/" target="_blank" rel="noopener noreferrer">Crime Watch</a>
              <a href="https://github.com/ElliottLi97/Crime-Watch" target="_blank" rel="noopener noreferrer">
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
              <a href="https://peaceful-wildwood-97461.herokuapp.com/" target="_blank" rel="noopener noreferrer">Express Note Taker</a>
              <a href="https://github.com/ElliottLi97/Express-Note-Taker" target="_blank" rel="noopener noreferrer">
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
              <a href="https://techblogexpressproject.herokuapp.com/" target="_blank" rel="noopener noreferrer">Tech Blog</a>
              <a href="https://github.com/ElliottLi97/Tech-Blog" target="_blank" rel="noopener noreferrer">
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
              <a href="https://elliottli97.github.io/Weather-Display/" target="_blank" rel="noopener noreferrer">Weather Display</a>
              <a href="https://github.com/ElliottLi97/Weather-Display" target="_blank" rel="noopener noreferrer">
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
              <a href="https://elliottli97.github.io/Work-Day-Calendar/" target="_blank" rel="noopener noreferrer">Schedule App</a>
              <a href="https://github.com/ElliottLi97/Work-Day-Calendar" target="_blank" rel="noopener noreferrer">
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

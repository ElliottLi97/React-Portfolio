import React from 'react';
import {Link} from "react-router-dom"
function NavBar(props) {

  return     (
    <nav className="NavBar">
      <div id='NavTitle'>
        <div>
          Elliott Li
        </div>
        <div>
          Full Stack Developer
        </div>
      </div>
      <span className='JustifyRight'>
      <div id='NavLinkContainer'>
      <a id='NavLink' href="/">About Me</a>
      <a id='NavLink' href="/projects">Projects</a>
      <a id='NavLink' target="_blank" rel="noopener noreferrer" href="/files/ElliottsResume.pdf">Resume </a>
      <a id='NavLink' href="mailto:elliottli.job@gmail.com">elliottli.job@gmail.com</a>
      </div>
      </span>
    </nav>
)}
export default NavBar;

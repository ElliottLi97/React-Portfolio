import React from 'react';
import profileImage from '../media/profileImage.png'
function AboutMe(props) {

  return (
    <nav className="AboutMe">
      <span id="TitleAndImageContainer">
        <div id="AboutMeImage">
          <img src={profileImage} alt="Profile Picture" />
        </div>
        <div id='AboutMeTitle'>

          <h1>Elliott Li  </h1>
          <h3>Always Striving to Improve</h3>
        </div>
      </span>
      <div id='AboutMeBody'>
        <p>My name is Elliott Li and I’m currently residing in San Diego.
          I was first exposed to coding during my undergrad at UC Berkeley where I received my B.S in Physics.
          I enjoy solving complex challenges by learning new practices to add to my developer skillset.
          I've always been drawn to the idea of being able to take an idea, and build it from the ground up.
          I'm a self-taught developer with an interest in web development and embedded systems.
          I enjoy working with people to create great products and software.
          I have experience in designing and developing complex software and hardware systems as well as providing production
          support for existing systems. I am capable of managing multiple projects at once, delegating tasks to other team members,
          and coordinating activities across teams.
        </p>
        <br></br>
        <p>After years of embedded systems development, I decided to round out my skill set and take a course on
          full stack web development from the UCSD extension. I hope to hone my skills with CSS, Js,
          and React through working as a full stack software engineer.
        </p>
      </div>
    </nav>
  )
}
export default AboutMe;

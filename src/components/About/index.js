import React from 'react';
import profilePic from "../../assets/images/profile-pic.jpg";

function About() {
  return (
    <section className='my-5'>
      <h1 id= "about">Who am I?</h1>
      <p> Hello! My name is Jacqueline Merlan and I am a Full Stack Developer. I am <br></br>currently enrolled 
          in a Full Stack coding bootcamp at Michigan State University.
         <br></br> I am also a Computer Science student at Dallas College aspiring <br></br>to become a Software Engineer. </p>
      <img src={profilePic} className="my-2" style={{ width: "40%"}} alt="cover" />
    </section>
  );
}

export default About;
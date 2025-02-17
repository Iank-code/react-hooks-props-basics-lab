import React from "react";
import Links from "./Links";

function About({links, bio, linked}) {
  console.log(links)
  return (
    <div id="about">
      <h2>About Me</h2>
      
      <p>{bio}</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <Links otherLinks={links} newLink={linked}/>
    </div>
  );
}

export default About;

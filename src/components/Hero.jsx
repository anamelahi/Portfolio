import React from "react";
import "../styles/Hero.css"
import  github  from "../github.png";
import linkedin from "../linkedin.png"
import picture from "../profile2.jpg";
import TechStack from "./TechStack";


function Hero() {

  function handleClickGit(){
    window.open("https://github.com/anamelahi", "_blank");
  }
  function handleClickLinkedIn(){
    window.open("https://www.linkedin.com/in/anam-elahi-1149161a9/", "_blank");
  }
  return (
    <div className="hero" id="home">
      <div className="title">
        <h1>FRONT-END REACT<br /> DEVELOPER</h1>
        <p>
          Hello, I am Anam Elahi. <br />
          An enthusiastic front end developer based in India
        </p>
        <img onClick={handleClickGit} className="socials" src={github} alt="github" />
        <img onClick={handleClickLinkedIn} className="socials" src={linkedin} alt="linkedin" />
       <TechStack />
     </div>
      <div className="profile">
        <img className="pp" src={picture} alt="" />
      </div>  
    </div>
  );
}

export default Hero;

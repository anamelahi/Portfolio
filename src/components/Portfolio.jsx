import React , {useState} from "react";
import chatapp from "../chatapp.png";
import urlshortner from "../url-shortner.png";

function Portfolio() {

  const [isMouseOver, setMouseOver] = useState(false);

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }
  return (
    <div id="project">
      <div className="project">
        <div>
          <img className="portfolio-img" src={chatapp} alt="chatapp" />
        </div>
        <div className="portfolio-content">
          <h3>Fullstack CHAT APP - MERN STACK</h3>
          <p>
            The Chat App project aims to develop a modern and efficient chat
            application that enables users to communicate. The app will support
            one-on-one messaging functionalities, providing users with a
            seamless and interactive communication experience.
          </p>
          <button className="source-code"><a style={{color: isMouseOver? "white":"#FFF5E1"}} onMouseOut={handleMouseOut}
        onMouseOver={handleMouseOver} className="source-code" href="https://github.com/anamelahi/MinorProject">SOURCE CODE</a></button>
        </div>
      </div>

      <div className="project">
        <div className="portfolio-content">
          <h3>URL Shortner - Backend</h3>
          <p>
            Designed to streamline and simplify your online experience, our backend-based URL shortener transforms lengthy web addresses into concise, easy-to-share links. Whether you're managing social media campaigns, tracking marketing efforts, or simply
            looking to declutter your digital space. Simplify your URLs and enhance your online presence with us today!
          </p>
          <button className="source-code"><a style={{color: isMouseOver? "white":"#FFF5E1"}} onMouseOut={handleMouseOut}
        onMouseOver={handleMouseOver} className="source-code" href="https://github.com/anamelahi/url-shortner">SOURCE CODE</a></button>
        </div>
        <div>
          <img className="portfolio-img" src={urlshortner} alt="chatapp" />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;

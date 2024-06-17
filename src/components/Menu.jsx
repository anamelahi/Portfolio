import React from "react";
import "../styles/Menu.css"

function Menu(){
    return(
        <div className="menuLinks">
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#project">Project</a></li>
                <li><a className="contact" href="#contact">Contact</a></li>
            </ul>
        </div>
    )
}

export default Menu;
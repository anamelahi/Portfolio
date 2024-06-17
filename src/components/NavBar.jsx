import React from "react";
import Menu from "./Menu";
import "../styles/NavBar.css"

function NavBar(){
    return(
        <div className="navbar">
            <h2>Anam.dev</h2>
            <Menu className="navmenu" />
        </div>
    )
}

export default NavBar;
import React from "react";
import "../styles/SubHeading.css"

function SubHeading(props){
    return(
        <div className="sub">
            <h2 className="subheading">{props.text}</h2>
        </div>
    )
}

export default SubHeading;
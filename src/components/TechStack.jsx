import React from "react";
import html from "../html.png"
import css from "../css-3.png"
import js from "../js.png"
import python from "../python.png"
import reactlogo from "../react-logo.png"
import nodejs from "../nodejs.png"
import mongodb from "../mongo.png"
import express from "../express.png"

function TechStack(){
    return(
        <div style={{display:"flex", flexDirection:"row"}} className="techstack-div">
            <h2 style={{marginLeft:"0px"}}>TECH STACK  |</h2>
            <img style={{width:"30px",height:"30px",margin:"10px 5px 5px 10px"}} src={html} alt="" />
            <img style={{width:"30px",height:"30px",margin:"10px 5px 5px 10px"}} src={css} alt="" />
            <img style={{width:"30px",height:"30px",margin:"10px 5px 5px 10px"}} src={js} alt="" />
            <img style={{width:"30px",height:"30px",margin:"10px 5px 5px 10px"}} src={reactlogo} alt="" />
            <img style={{width:"30px",height:"30px",margin:"10px 5px 5px 10px"}} src={nodejs} alt="" />
            <img style={{width:"30px",height:"30px",margin:"10px 5px 5px 10px"}} src={express} alt="" />

            <img style={{width:"30px",height:"30px",margin:"10px 5px 5px 10px"}} src={mongodb} alt="" />
            <img style={{width:"30px",height:"30px",margin:"10px 5px 5px 10px"}} src={python} alt="" />



        </div>
    )
}

export default TechStack;
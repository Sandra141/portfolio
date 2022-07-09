import React from "react";
import './../cssFiles/project.css';
import Slider from "./Slider";

const Project = () => {
    return(
        <div className="projectContainer">
            <p>---- What I do ----</p>
            <h2>My Projects</h2>
            <Slider />
        </div>
    );
}

export default Project;
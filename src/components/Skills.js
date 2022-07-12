import React from "react";
import Sphere from "./Sphere";
import './../cssFiles/skills.css'

const Skills = () => {
    return(
        <div className="skillContainer">
            <p>------ What I use ------</p>
            <h2>My Skills</h2>
            <Sphere />
        </div>
    );
}

export default Skills;
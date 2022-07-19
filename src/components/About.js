import React from "react";
import './../cssFiles/about.css';
import frame from './../images/frame.png';
import picture from './../images/picture.jpg';

const Contact = () => {
    return (
        <div className="aboutContainer">
            <div className="pictureContainer">
                <img src={frame} id='frame' alt="" />
                <div className="picture"> <img src={picture} alt="profile" /></div>
            </div>
            <div className="aboutInfo">
                <p id='about'>------ Who I am ------</p>
                <h2>About Me</h2>
                <p>
                    Hi, I am Sandra Müller. I studied at the University of Business and Society in Ludwigshafen for four interesting and challenging semesters and was able to gain many insights into the diverse Japanese culture. Since then, I have fallen in love with programming. <br /><br />
                    But why web development? I started working with HTML and CSS while I was still at school. At the time, I was writing my seminar paper and had trouble organising my sources, so I created a simple but structured website. <br /><br />
                    The final trigger for my passion, however, was my working student job in a small company, where I got to know the work of a web developer, which is why I took part in a bootcamp shortly afterwards and why programming now won't let me go.
                </p>
                <a href="#contact">
                    <button>Contact Me</button> {/* For later: Download CV */}
                </a>
            </div>
        </div>
    );
}

export default Contact;
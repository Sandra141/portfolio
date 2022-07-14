import React from "react";
import './../cssFiles/about.css';
import frame from './../images/frame.png';
import picture from './../images/picture.jpg';

const Contact = () => {
    return (
        <div className="aboutContainer">
            <div className="pictureContainer">
                <img src={frame} id='frame' />
                <div className="picture"> <img src={picture} /></div>
            </div>
            <div className="aboutInfo">
                <p id='about'>------ Who I am ------</p>
                <h2>About Me</h2>
                <p>
                    I am Sandra Müller. I dropped out of my interesting and challenging studies at the Ludwigshafen University of Business and Society because I was able to gain many insights into the diverse Japanese culture there. Since then, I have fallen in love with programming. <br /><br />
                    So why web development? I started working with HTML and CSS while I was still at school. At the time, I was writing my seminar paper and had trouble organising my sources, so I created a simple but structured website. <br /><br />
                    The final trigger for my passion, however, was my working student job in a small company, where I got to know the work of a web developer, which is why I took part in a bootcamp shortly afterwards and why programming now won't let me go.
                </p>
                <button>Download CV</button>
            </div>
        </div>
    );
}

export default Contact;
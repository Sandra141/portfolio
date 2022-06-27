import React from "react";
import './contact.css';
import frame from './../images/frame.png'

const Contact = () => {
    return (
        <div className="contactContainer">
            <div className="pictureContainer">
                <img src={frame} id='frame' />
                <div className="picture"></div>
            </div>
            <p>---- Who I am ----</p>
            <h2>About Me</h2>
            <p>I am Sandra Müller...</p>
            <button>Download CV</button>
        </div>
    );
}

export default Contact;
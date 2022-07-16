import React from "react";
import './../cssFiles/contact.css';
import gitHub from './../images/gitHub.png';
import linkedIn from './../images/linkedIn.png';

const Contact = () => {
    return(
        <div className="ContactContainer" id='contact'>
            <p>------ Contact Me ------</p>
            <h2>Get in Touch</h2>
            <p>I'm just a few clicks away...</p>
            <div className="iconContainer">
                <a href='https://github.com/Sandra141' target='_blanc' ><img src={gitHub} alt="Github Icon" /></a>
                <a href='https://www.linkedin.com/in/sandramüller/' target='_blanc' ><img src={linkedIn} alt="LinkedIn Icon" /></a>
            </div>
            <p>E-Mail: <br /> muelsand20@gmail.com</p>
        </div>
    );
}

export default Contact;
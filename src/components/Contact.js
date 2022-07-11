import React from "react";
import './../cssFiles/contact.css';
import gitHub from './../images/gitHub.png';
import linkedIn from './../images/linkedIn.png';
import xing from './../images/xing.png';

const Contact = () => {
    return(
        <div className="ContactContainer" id='contact'>
            <p>------ Contact Me ------</p>
            <h2>Get in Touch</h2>
            <p>I am just a few clicks away...</p>
            <div className="iconContainer">
                <a href='https://github.com/Sandra141' target='_blanc' ><img src={gitHub} /></a>
                <a href='#' target='_blanc' ><img src={linkedIn} /></a>
                <a href='#' target='_blanc' ><img src={xing} /></a>
            </div>
            <p>E-Mail: <br /> muelsand20@gmail.com</p>
        </div>
    );
}

export default Contact;
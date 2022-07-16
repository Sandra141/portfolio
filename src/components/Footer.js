import React from "react";
import './../cssFiles/footer.css';
import logo from './../images/logo.png';

const Footer = () => {

    return(
        <div className="footerContainer">
            <div className="logoContainer">
                <img src={logo} id="footerlogo" alt="Webpage Logo" />
            </div>
            <p>© Copyright 2022 - Sandra Müller</p>
        </div>
    );
}

export default Footer;
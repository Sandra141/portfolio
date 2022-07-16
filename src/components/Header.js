import React from "react";
import './../cssFiles/header.css';
import logo from './../images/logo.png';
import gitHub from './../images/gitHub.png';
import linkedIn from './../images/linkedIn.png';
import MobileMenuButton from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";
import Sphere from './Sphere';

const Header = () => {
    return (
        <>
        <header className="headerContainer" id='home'>
            <div className="headerTopPart">
                <div className="logoContainer">
                    <img src={logo} id='headerlogo' alt="Webpage Logo" />
                </div>
                <MobileMenuButton />
                <DesktopMenu />
            </div>
            <div className="headerLowerPart">
                <div className="headerInfo">
                    <div className="headerInfoBorder">
                        <h3>HI THERE, I'M</h3>
                        <h1 id='sandra' >Sandra</h1>
                        <h1 id='mueller' >Müller</h1>
                        <h3>JUNIOR FULL-STACK DEVELOPER</h3>
                        <div className="iconContainer">
                            <a href='https://github.com/Sandra141' target='_blanc'><img src={gitHub} id="githubIcon" alt="Github Icon" /></a>
                            <a href='https://www.linkedin.com/in/sandramüller/' target='_blanc' ><img src={linkedIn} alt="LinkedIn Icon" /></a>
                        </div>
                    </div>
                </div>
                <div className="headerSphere">
                    <Sphere />
                </div>
            </div>
        </header>
        </>
    );
}

export default Header;
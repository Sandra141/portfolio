import React from "react";
import './../cssFiles/header.css';
import logo from './../images/logo.png';
import gitHub from './../images/gitHub.png';
import linkedIn from './../images/linkedIn.png';
import xing from './../images/xing.png';
import MobileMenuButton from "./MobileMenu";

const Header = () => {
    return (
        <>
        <header className="headerContainer" id='home'>
            <div className="headerTopPart">
                <div className="logoContainer">
                    <img src={logo} id='headerlogo' />
                </div>
                <MobileMenuButton />
            </div>
            <div className="headerLowerPart">
                <h3>HI THERE, I'M</h3>
                <h1 id='sandra' >Sandra</h1>
                <h1 id='mueller' >Müller</h1>
                <h3>A FULL-STACK DEVELOPER</h3>
                <div className="iconContainer">
                    <a href='https://github.com/Sandra141' target='_blanc' ><img src={gitHub} /></a>
                    <a href='#' target='_blanc' ><img src={linkedIn} /></a>
                    <a href='#' target='_blanc' ><img src={xing} /></a>
                </div>
            </div>
        </header>
        </>
    );
}

export default Header;
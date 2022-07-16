import React, { useState } from "react";
import "./../cssFiles/mobileMenu.css";
import gitHub from './../images/gitHub.png';
import linkedIn from './../images/linkedIn.png';
import xing from './../images/xing.png';

const MobileMenu = () => {
      const [active, setActive] = useState(false);

      const handleMobileMenu = (e) => {
            const target0 = document.querySelector('.ham' && '.hamRotate');
            const target1 = document.querySelector('.line' && '.top');
            const target2 = document.querySelector('.line' && '.middle');
            const target3 = document.querySelector('.line' && '.bottom');
            const mobileMenu = document.querySelector('.mobileMenuContainer');
            const headerLogo = document.querySelector('#headerlogo');
            if(active === false){
                  target0.setAttribute('class', 'ham hamRotate active');
                  target1.setAttribute('class', 'line top active');
                  target2.setAttribute('class', 'line middle active');
                  target3.setAttribute('class', 'line bottom active');
                  mobileMenu.setAttribute('class', 'mobileMenuContainer activeMenu');
                  headerLogo.setAttribute('class', 'activeLogo');
                  setActive(true);
            } else {
                  target0.setAttribute('class', 'ham hamRotate');
                  target1.setAttribute('class', 'line top');
                  target2.setAttribute('class', 'line middle');
                  target3.setAttribute('class', 'line bottom');
                  mobileMenu.setAttribute('class', 'mobileMenuContainer');
                  headerLogo.removeAttribute('class');
                  setActive(false);
            }
      };

      //onclick="this.classList.toggle('active')"
      return (
            <>
            <svg
                  className="ham hamRotate"
                  viewBox="0 0 100 100"
                  width="80"
                  onClick={handleMobileMenu}
            >
                  <path
                  className="line top"
                  d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"
                  />
                  <path className="line middle" d="m 30,50 h 40" />
                  <path
                  className="line bottom"
                  d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
                  />
            </svg>
            <div className="mobileMenuContainer">
                  <div className="backgroundMobileMenu">
                        <p><a href='#home' onClick={handleMobileMenu} >Home</a></p>
                        <p><a href='#about' onClick={handleMobileMenu} >About Me</a></p>
                        <p><a href='#projects' onClick={handleMobileMenu} >My Projects</a></p>
                        <p><a href='#contact' onClick={handleMobileMenu} >Get In Touch</a></p>
                        <div className="iconContainer" id="iconContainerMobileMenu">
                              <a href='https://github.com/Sandra141' target='_blanc' ><img src={gitHub} /></a>
                              <a href='https://www.linkedin.com/in/sandramüller/' target='_blanc' ><img src={linkedIn} /></a>
                        </div>
                  </div>
            </div>
            </>
      );
};

export default MobileMenu;

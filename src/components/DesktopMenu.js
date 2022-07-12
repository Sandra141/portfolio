import React from "react";
import './../cssFiles/desktopMenu.css';

const DesktopMenu = () => {
    return(
        <div className="desktopMenuContainer">
            <p><a href='#home' >Home</a></p>
            <p><a href='#about' >About Me</a></p>
            <p><a href='#projects' >My Projects</a></p>
            <p><a href='#contact' >Get In Touch</a></p>
        </div>
    );
}

export default DesktopMenu;
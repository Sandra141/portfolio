import { hover } from '@testing-library/user-event/dist/hover';
import React, { useState } from 'react';
import './../cssFiles/slider.css';
import projectsArray from './projectsArray';

const comingSoonProjects = projectsArray.slice(1);

const Slider = () => {
    const [isShown, setIsShown] = useState(false);

    const handleSlider = (e) => {
        const buttonsWrapper = document.querySelector(".map");
        const slides = document.querySelector(".inner");
        if (e.target.nodeName === "BUTTON") {
            Array.from(buttonsWrapper.children).forEach(item =>
              item.classList.remove("active")
            );
            if (e.target.classList.contains("first")) {
              slides.style.transform = "translateX(-0%)";
              e.target.classList.add("active");
            } else if (e.target.classList.contains("second")) {
              slides.style.transform = "translateX(-80vw) translateX(-1em)";
              e.target.classList.add("active");
            } else if (e.target.classList.contains('third')){
              slides.style.transform = 'translatex(-160vw) translateX(-2em)';
              e.target.classList.add('active');
            }
        }
    }

    const handleOnMouseEnter = (e) => {
        const ImageKeyInArray = e.target.id - 1;
        if(isShown) {
            setIsShown(false) //for mobile version
            const hoveredCard = e.target;
            hoveredCard.setAttribute('src', projectsArray[ImageKeyInArray].imgSrc);
        } else {
            setIsShown(true) //for mobile version
            const hoveredCard = e.target;
            e.target.setAttribute('src', projectsArray[ImageKeyInArray].gifSrc);
        }
    }

    const handleOnMouseLeave = (e) => {
        const ImageKeyInArray = e.target.id - 1;
        setIsShown(false) //for mobile version
        const hoveredCard = e.target;
        hoveredCard.setAttribute('src', projectsArray[ImageKeyInArray].imgSrc);
    }

    const handleClick = (e) => {
        const ImageKeyInArray = e.target.id - 1;
        if(isShown) {
            setIsShown(false)
            const hoveredCard = e.target;
            hoveredCard.setAttribute('src', projectsArray[ImageKeyInArray].imgSrc);
        } else {
            setIsShown(true)
            const hoveredCard = e.target;
            e.target.setAttribute('src', projectsArray[ImageKeyInArray].gifSrc);
        }
    }

    return(
        <div className="center">
            <div className="wrapper">
                <div className="inner">

                    <div className="card" key={projectsArray[1].id} >
                        <div className="cardImgContainer" >
                            <img src={projectsArray[1].imgSrc} id={projectsArray[1].id} alt="Demo of Popup Game" onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave} onClick={handleClick} />
                        </div>
                        <div className="content">
                            <h1>{projectsArray[1].headline}</h1>
                            <h3>{projectsArray[1].description}</h3>
                        </div>
                    </div>

                    <div className="card" key={projectsArray[0].id} >
                        <div className="cardImgContainer" >
                            <img src={projectsArray[0].imgSrc} id={projectsArray[0].id} alt="Demo of Memory Game" onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave} onClick={handleClick} />
                        </div>
                        <div className="content">
                            <h1>{projectsArray[0].headline}</h1>
                            <h3>{projectsArray[0].description}</h3>
                        </div>
                    </div>

                    {/* Coming Soon slide */}
                    <div className="card" key={projectsArray[2].id} >
                        <div id="temporaryHeadingContainer"><h3>Coming Soon</h3></div>
                        <div className="content">
                            <h1>{projectsArray[2].headline}</h1>
                            <h3>{projectsArray[2].description}</h3>
                        </div>
                    </div>

                </div>
            </div>
            
            <div className="map" onClick={handleSlider} >
                <button className="active first"></button>
                <button className="second"></button>
                <button className="third"></button>
            </div>
        </div>
    );
}

export default Slider;
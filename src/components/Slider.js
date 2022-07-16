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
        if(isShown) {
            setIsShown(false) //for mobile version
            const hoveredCard = e.target;
            hoveredCard.setAttribute('src', projectsArray[0].imgSrc);
        } else {
            setIsShown(true) //for mobile version
            const hoveredCard = e.target;
            e.target.setAttribute('src', projectsArray[0].gifSrc);
        }
    }

    const handleOnMouseLeave = (e) => {
        setIsShown(false) //for mobile version
        const hoveredCard = e.target;
        hoveredCard.setAttribute('src', projectsArray[0].imgSrc);
    }

    const handleClick = (e) => {
        if(isShown) {
            setIsShown(false)
            const hoveredCard = e.target;
            hoveredCard.setAttribute('src', projectsArray[0].imgSrc);
        } else {
            setIsShown(true)
            const hoveredCard = e.target;
            e.target.setAttribute('src', projectsArray[0].gifSrc);
        }
    }

    return(
        <div className="center">
            <div className="wrapper">
                <div className="inner">


                    <div className="card" key={projectsArray[0].id} >
                        <div className="cardImgContainer" >
                            <img src={projectsArray[0].imgSrc} alt="Demo of Memory Game" onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave} onClick={handleClick} />
                        </div>
                        <div className="content">
                            <h1>{projectsArray[0].headline}</h1>
                            <h3>{projectsArray[0].description}</h3>
                        </div>
                    </div>


                    {
                        comingSoonProjects.map(slide => {
                            return(
                            <div className="card" key={slide.id} >
                                {/*<img src={slide.src} />*/}
                                <div id="temporaryHeadingContainer"><h3>Coming Soon</h3></div> {/* remove this line when projects are added */}
                                <div className="content">
                                    <h1>{slide.headline}</h1>
                                    <h3>{slide.description}</h3>
                                </div>
                            </div> 
                            );
                        })
                    }
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
import React from 'react';
import './../cssFiles/slider.css';
import projectsArray from './projectsArray';

const Slider = () => {
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
              slides.style.transform = "translateX(-33.9%)";
              e.target.classList.add("active");
            } else if (e.target.classList.contains('third')){
              slides.style.transform = 'translatex(-67.7%)';
              e.target.classList.add('active');
            }
        }
    }

    return(
        <div className="center">
            <div className="wrapper">
                <div className="inner">
                    {
                        projectsArray.map(slide => {
                            return(
                            <div className="card" key={slide.id} >
                                <img src={slide.src} />
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
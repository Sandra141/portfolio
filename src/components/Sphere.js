import './../cssFiles/sphere.css';
import React, {useEffect} from 'react';
const TagCloud = require('TagCloud');


const Sphere = () => {
    const myTags = [
        'JavaScript', 'CSS', 'HTML','React', 'Node.js', 'Express', 'MongoDB', 'Bootstrap'
    ];

    useEffect(() => {
        const tagCloud = TagCloud('.sphereContent', myTags,{
            radius: 200
        });

        const myElement = document.querySelector('.sphereContent');
        for (let i = 0; i < myElement.children.length; i++) {
            if(i != 0) {
                myElement.children[i].remove();
            }
        }
    }, []);

    return (
        <div className="sphereContainer">
            <p>------ What I use ------</p>
            <h2>My Skills</h2>
            <div className="sphereContent"></div>
        </div>
    );
}

export default Sphere;
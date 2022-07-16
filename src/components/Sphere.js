import './../cssFiles/sphere.css';
import React, {useEffect} from 'react';
const TagCloud = require('TagCloud');

const myTags = [
    'JavaScript', 'CSS', 'HTML','React', 'Node.js', 'Express', 'MongoDB', 'Bootstrap'
];

const Sphere = () => {
    
    useEffect(() => {
        TagCloud('.sphereContent', myTags, {
            radius: 200
        });

        const firstSphere = document.querySelector('.headerSphere').querySelector('.sphereContent');
        for (let i = 0; i < firstSphere.children.length; i++) {
            if(i !== 0) {
                firstSphere.children[i].remove();
            }
        }
        const secondSphere = document.querySelector('.skillContainer').querySelector('.sphereContent');
        for (let i = 0; i < secondSphere.children.length; i++) {
            if(i !== 0) {
                secondSphere.children[i].remove();
            }
        }
    }, []);

    return (
        <div className="sphereContent"></div>
    );
}

export default Sphere;
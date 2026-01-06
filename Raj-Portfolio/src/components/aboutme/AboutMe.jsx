import React, { use } from "react";
import './AboutMe.css';

import aboutMeTextFile from '../../assets/texts/aboutme.txt?raw';

import {useState, useEffect} from 'react';

const AboutMe = () => {
    const text = "Hello. This is just a placeholder for the About Me section.";
    const filepath = '../../assets/files/aboutme.txt';

    const [aboutMeText, setAboutMeText] = useState('');

    // useEffect(() => {
    //         // The path is relative to the 'public' folder
    //     fetch(filepath)
    //     .then((response) => response.text())
    //     .then((textContent) => {
    //         setAboutMeText(textContent);
    //     })
    //     .catch((error) => {
    //         console.error("Error fetching file:", error);
    //         setAboutMeText('Could not get About Me text. I am Rajbir Bains, a software developer though.');
    //     });
    // }, [aboutMeText]);
     
    return (
        <div className="about-me" id="about">
            <div className="about-me-container">
                <h2 className="about-me-header">About Me</h2>
                <p className="about-me-text">{aboutMeTextFile}</p>
                <div className="skills-container">
                    <h3 className="skills-header">Skills</h3>
                    <ul className="skills-items">
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>HTML & CSS</li>
                    </ul>
                </div>
            </div>  
            <div className="about-me-spacer"></div>
        </div>

    )
}

export default AboutMe;
import React from "react";
import './AboutMe.css';

const AboutMe = () => {
    return (
        <div className="about-me">
            <div className="about-me-container">
                <h2 className="about-me-header">About Me</h2>
                <p className="about-me-text">Hello. This is just a placeholder for the About Me section.</p>
                <div className="skills-container">
                    <h3 className="skills-header">Skills</h3>
                    <ul className="skills-items">
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>HTML & CSS</li>
                    </ul>
                </div>
            </div>  
        </div>

    )
}

export default AboutMe;
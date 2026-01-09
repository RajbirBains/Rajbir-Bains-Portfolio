import React, { use } from "react";
import './AboutMe.css';

import aboutMeTextFile from '../../assets/texts/aboutme.txt?raw';

import githubLogo from '../../assets/images/github-mark-white.png';
import linkedInLogo from '../../assets/images/linkedIn-icon.svg';

import SQLServerLogo from '../../assets/images/SQLServer-icon.svg';
import IntelliJLogo from '../../assets/images/IntelliJ-icon.svg';

import StackIcon from "tech-stack-icons";

import {useState, useEffect} from 'react';

const AboutMe = () => {
    const text = "Hello. This is just a placeholder for the About Me section.";
    const filepath = '../../assets/files/aboutme.txt';

    const [aboutMeText, setAboutMeText] = useState('');


    const normalized = aboutMeTextFile
                                        .replace(/\r\n/g, '\n')            // normalize
                                        .replace(/\n{2,}/g, '¶')           // TEMP marker for paragraph break
                                        .replace(/\n/g, ' ')               // single newline → space
                                        .replace(/¶/g, '\n\n')             // restore paragraph break
                                        .trimStart();
    const paragraphs = normalized.split('\n\n');

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
        <div className="about-me-section" id="about">
            <div className="about-me-container">
                <h2 className="about-me-header">About Me</h2>
                <p className="about-me-text">{normalized}</p>
            </div>
            <div className="skills-container">
                    <h2 className="skills-header">Technical Skills</h2>
                    <h4 className="skills-subheader skills-subheader-languages">Languages</h4>
                    <ul className="skills-items skills-items-languages">
                        <li>
                            <StackIcon name="python" className="tech-icon"/>
                            <p>Python</p>
                        </li>
                        <li>
                            <StackIcon name="c++" className="tech-icon"/>
                            <p>C++</p>
                        </li>
                        <li>
                            <StackIcon name="java" className="tech-icon"/>
                            <p>Java</p>
                        </li>
                        {/* <li>
                            <StackIcon name="sql" className="tech-icon"/>
                            <p>SQL</p>
                        </li> */}
                        <li>
                            <StackIcon name="html5" className="tech-icon"/>
                            <p>HTML</p>
                        </li>
                        <li>
                            <StackIcon name="css3" className="tech-icon"/>
                            <p>CSS</p>
                        </li>
                        <li>
                            <StackIcon name="js" className="tech-icon"/>
                            <p>Javascript</p>
                        </li>
                    </ul>

                    <h4 className="skills-subheader skills-subheader-databases">Databases</h4>
                    <ul className="skills-items skills-items-databases">
                        <li>
                            <StackIcon name="mongodb" className="tech-icon"/>
                            <p>MongoDB</p>
                        </li>
                        <li>
                            <StackIcon name="postgresql" className="tech-icon"/>
                            <p>Postgres</p>
                        </li>
                        <li>
                            <StackIcon name="firebase" className="tech-icon"/>
                            <p>Firebase</p>
                        </li>
                        <li>
                            <img src={SQLServerLogo} alt="SQL Server Logo" className="tech-icon"/>
                            {/* <StackIcon name="sqlserver" className="tech-icon"/> */}
                            <p>SQL Server</p>
                        </li>
                    </ul>

                    <h4 className="skills-subheader skills-subheader-frameworks">Technologies/Frameworks</h4>
                    <ul className="skills-items skills-items-frameworks">
                        <li>
                            <StackIcon name="react" className="tech-icon"/>
                            <p>React</p>
                        </li>
                        <li>
                            <StackIcon name="git" className="tech-icon"/>
                            <p>Git</p>
                        </li>
                        <li>
                            <StackIcon name="docker" className="tech-icon"/>
                            <p>Docker</p>
                        </li>
                        <li>
                            <StackIcon name="postman" className="tech-icon"/>
                            <p>Postman</p>
                        </li>
                        <li>
                            <StackIcon name="flask" className="tech-icon"/>
                            <p>Flask</p>
                        </li>
                    </ul>

                    <h4 className="skills-subheader skills-subheader-dev-tools">Developer Tools</h4>
                    <ul className="skills-items skills-items-dev-tools">
                        <li>
                            <StackIcon name="vscode" className="tech-icon"/>
                            <p>VS Code</p>
                        </li>
                        <li>
                            <img src={IntelliJLogo} alt="IntelliJ Logo" className="tech-icon"/>
                            <StackIcon name="intellij" className="tech-icon"/>
                            <p>IntelliJ</p>
                        </li>
                        <li>
                            <StackIcon name="android" className="tech-icon"/>
                            <p>Android Studio</p>
                        </li>
                        {/* <li>
                            <StackIcon name="cursor" className="tech-icon"/>
                            <p>Cursor</p>
                        </li> */}
                    </ul>
            </div>
            {/* <div className='about-links'>
                <a href='https://github.com/RajbirBains' title='Github Repo' target='_blank' rel='noopener noreferrer'>
                    <img className='home-github-icon' src = {githubLogo} alt='github' height="100px" width="100px"></img>
                </a>
                <a href='www.linkedin.com/in/rajbir-bains-4b7a7a215' title='LinkedIn Profile' target='_blank' rel='noopener noreferrer'>
                    <img className='home-linkedin-icon' src = {linkedInLogo} alt='linkedin' height="100px" width="100px"></img>
                </a>
                <button className="download-resume-button">Download Resume</button>
            </div>   */}
            <div className="about-me-spacer"></div>
        </div>

    )
}

export default AboutMe;
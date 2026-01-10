import './Projects.css';

import PlaceholderImg from '../../assets/images/placeholder.png';
import SecurityPic from '../../assets/images/securityPic.png';
import FormTrainerPic from '../../assets/images/form-trainer.png';
import NHLDataPic from '../../assets/images/NHL-Data-Extractor.png';
import ReviewSitePic from '../../assets/images/movieReviewSite.jpg';
import DiscordBotPic from '../../assets/images/discord-bot.png';
import MobileBingoPic from '../../assets/images/Mobile-Bingo.jpg';
import GameEnginePic from '../../assets/images/game-engine.png'; /*TODO: Update this pic to something that fits better */

const Projects = ()=> {
    return (
        <div className='projects-section' id='projects'>
            <div className="projects-container">
                <h2 className='project-section-header'>Projects</h2>

                <div className='project-item'>
                    <div className='img-contain'>
                        <img className='project-img' src={NHLDataPic} alt='NHL Data Extractor'></img>
                    </div>
                    <h4 className='project-name'>NHL Data Extractor</h4>
                    <p className='project-description'>Freelance project that extracts specific NHL data, transforms it and inserts it into and Excel sheet</p>
                    <p className='project-tech-stack'>Python</p>
                </div>


                <div className='project-item'>
                    <div className='img-contain'>
                        <img className='project-img' src={ReviewSitePic} alt='Review Site'></img>
                    </div>
                    <h4 className='project-name'>Movie Review Site</h4>
                    <p className='project-description'>Full-stack website where users can give reviews to a selection of movies</p>
                    <p className='project-tech-stack'>React, Java, Spring Boot, MongoDB, CSS</p>
                </div>


                <div className='project-item'>
                    <div className='img-contain'>
                        <img className='project-img' src={SecurityPic} alt='Camera Security System'></img>
                    </div>
                    <h4 className='project-name'>Camera Security System</h4>
                    <p className='project-description'>Real time security system mounted on a BeagleY-AI board. 
                        Sends photo and notifications when unauthorized people are detected</p>
                    <p className='project-tech-stack'>C, C++, CMake, Python, Discord API </p>
                </div>

                <div className='project-item'>
                    <div className='img-contain'>
                        <img className='project-img' src={FormTrainerPic} alt='AI Form Trainer'></img>
                    </div>
                    <h4 className='project-name'>A.I. Form Trainer</h4>
                    <p className='project-description'>Web app where users can upload a video of themselves doing select exercises and get feedback based 
                        on form and correctness</p>
                    <p className='project-tech-stack'>Python, React, Flask</p>
                </div>

                <div className='project-item'>
                    <div className='img-contain'>
                        <img className='project-img' src={MobileBingoPic} alt='Mobile Bingo'></img>
                    </div>
                    <h4 className='project-name'>Bingo With Friends</h4>
                    <p className='project-description'>Mobile Android application where users can create and join multiplayer Bingo lobbies</p>
                    <p className='project-tech-stack'>Java, Android Studio, Google Firebase</p>
                </div>

                <div className='project-item'>
                    <div className='img-contain'>
                        <img className='project-img' src={GameEnginePic} alt='Placeholder img'></img>
                    </div>
                    <h4 className='project-name'>Terminal Game Engine</h4>
                    <p className='project-description'>A jackbox style app where users can host or join listed games and play together</p>
                    <p className='project-tech-stack'>C++</p>
                </div>

                <div className='project-item'>
                    <div className='img-contain'>
                        <img className='project-img' src={DiscordBotPic} alt='Discord Bot img'></img>
                    </div>
                    <h4 className='project-name'>Discord Bot</h4>
                    <p className='project-description'>Fun discord bot with miscellaneous commands</p>
                    <p className='project-tech-stack'>Python</p>
                </div>
            </div>
            <div className="projects-spacer"></div>
        </div>
    )
}

export default Projects;
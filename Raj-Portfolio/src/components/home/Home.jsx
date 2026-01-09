import './Home.css'
import githubLogo from '../../assets/images/github-mark-white.png';
import linkedInLogo from '../../assets/images/linkedIn-icon.svg';

import Resume from '../../assets/Rajbir_Bains_Resume.pdf';

const Home = () => {
    return (
        <div className='home-section' id='home'>
            <div className="home-container">
                <h1 className='home-name-header'>Rajbir Bains</h1>
                <h2 className='home-location-text'>Location</h2>
                <p className='home-description'>Software Developer</p>
            </div>
            {/* <div className='home-links'>
                <a href='https://github.com/RajbirBains' title='Github Repo' target='_blank' rel='noopener noreferrer'>
                    <img className='home-github-icon' src = {githubLogo} alt='github' height="100px" width="100px"></img>
                </a>
                <a href='www.linkedin.com/in/rajbir-bains-4b7a7a215' title='LinkedIn Profile' target='_blank' rel='noopener noreferrer'>
                    <img className='home-linkedin-icon' src = {linkedInLogo} alt='linkedin' height="100px" width="100px"></img>
                </a>
            </div> */}
            <div className='home-resume-button-container'>
                <a href={Resume} target='_blank' rel='noopener noreferrer'>
                    <button className='download-resume-button'>Download Resume</button>
                </a>
            </div>
            <div className='home-spacer'></div>
        </div>


    )
}

export default Home;
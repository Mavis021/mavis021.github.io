import './Hirosection.scss'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import AnimatedLetters from './AnimatedLetters'

import myImage from '../assets/images/me1.jpeg'

const Hirosection = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['M', 'a', 'm', 'a', 't', 'a', ' ', 'M', 'a', 'h', 'a', 'r', 'j', 'a', 'n']

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3500);

        return () => {
            clearTimeout(timeoutId); // Clear the timeout when the component unmounts
        };
    }, []);

    return (
        <div className="home-page container" id='Home'>
            <div className="hero-inner">
                <div className="text-zone">
                    <span className="eyebrow"> Hello World!, I&apos;m</span>

                    <h1>
                        <AnimatedLetters letterClass={letterClass}
                        strArray={nameArray}
                        idx={1}/>
                    </h1>

                    <h2>AI/ML Engineer — Medical LLMs &amp; Agentic AI</h2>

                    <div className="hero-socials">
                        <a target="_blank" rel="noreferrer" aria-label="LinkedIn" href="https://www.linkedin.com/in/mamatamaharjan/">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a target="_blank" rel="noreferrer" aria-label="GitHub" href="https://github.com/Mavis021">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a target="_blank" rel="noreferrer" aria-label="Instagram" href="https://www.instagram.com/mavis021_/">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a target="_blank" rel="noreferrer" aria-label="X (Twitter)" href="https://twitter.com/mavis021_">
                            <FontAwesomeIcon icon={faXTwitter} />
                        </a>
                        <a aria-label="Email" href="mailto:maharjanmamata21@gmail.com">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </a>
                    </div>
                </div>

                <div className="hero-image">
                    <img src={myImage} alt="Mamata Maharjan" />
                </div>
            </div>
        </div>
    );
}

export default Hirosection;

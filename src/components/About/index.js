import './index.scss';
import AnimatedLetters from "../AnimatedLetters";
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faHtml5, faJs, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';
import { faC } from '@fortawesome/free-solid-svg-icons';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
    
        return () => {
            clearTimeout(timeoutId); // Clear the timeout when the component unmounts
        };
    }, []);

    return (
        <>
        <div className="about-page container">
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['A', 'b', 'o', 'u', 't',' ', 'm', 'e']}
                    idx={15}
                    />
                </h1>
                <p>Currently studying computer engineering at IOE, pulchowk campus</p>
                <p>Currently studying computer engineering at IOE, pulchowk campus</p>
            </div>

            <div className="stage-cube-cont">
                <div className="cubespinner">
                        <div className='cube-face cube-face-front'>
                           <FontAwesomeIcon icon={faC} color="#00aeff"/></div>

                        <div className='cube-face cube-face-back'>
                        <FontAwesomeIcon icon={faPython} color="#00aeff"/></div>

                        <div className='cube-face cube-face-right'>
                        <FontAwesomeIcon icon={faJs} color="#00aeff"/></div>
                        
                        <div className='cube-face cube-face-left'>
                        <FontAwesomeIcon icon={faReact} color="#00aeff"/></div>
                       
                        <div className='cube-face cube-face-top'>
                        <FontAwesomeIcon icon={faGithub} color="#00aeff"/></div>
                        
                        <div className='cube-face cube-face-bottom'>
                        <FontAwesomeIcon icon={faHtml5} color="#00aeff"/></div>
                </div>
            </div>
        </div>
        <Loader type="pacman" />
        </>
    );
}

export default About;
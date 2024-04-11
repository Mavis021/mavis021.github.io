import './Hirosection.scss'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logoM.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPython, faJs, faReact, faGithub} from '@fortawesome/free-brands-svg-icons'
import AnimatedLetters from './AnimatedLetters'
import { faC } from '@fortawesome/free-solid-svg-icons'

import myImage from '../assets/images/me1.jpg'

const Hirosection = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['a', 'm', 'a', 't', 'a', ' ', 'M', 'a', 'h', 'a', 'r', 'j', 'a', 'n']
    
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);
    
        return () => {
            clearTimeout(timeoutId); // Clear the timeout when the component unmounts
        };
    }, []);

    return (
        <>
        <div className="home-page container">
            <div className="text-zone">
                <h1>
                <span className={letterClass} style={{fontSize:'25px', fontFamily: 'La Belle Aurore', letterSpacing: '0.5px'} }>Hello</span>
                <span className={`${letterClass} _1`}> {' '}</span>
                <span className={`${letterClass} _12`} style={{fontSize:'25px', fontFamily: 'La Belle Aurore', letterSpacing: '0.5px'}}>World!</span>
                    <br/>
                <span className={`${letterClass} _13`} style={{color: '#00aeff'}}>I</span>
                <span className={`${letterClass} _14`}> {' '} </span>
                <span className={`${letterClass} _15`} style={{color: '#00aeff'}}> am</span>

                <img src={logo} alt="Mamata Maharjan" />

                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15}/>

                </h1>
                <h2>Computer Engineering Undergraduate</h2>
                <Link to='/contact' className='flat-button'> CONTACT ME</Link>
                
            </div>
            <div className="stage-cube-cont">
                <div className="cubespinner">
                        <div className='cube-face cube-face-front'>
                        <img className='myImg' src={myImage} alt= "Mavis021"/></div>

                        <div className='cube-face cube-face-back'>
                        <FontAwesomeIcon icon={faPython} color="#00aeff"/></div>

                        <div className='cube-face cube-face-right'>
                        <FontAwesomeIcon icon={faC} color="#00aeff"/></div>
                        
                        <div className='cube-face cube-face-left'>
                        <FontAwesomeIcon icon={faReact} color="#00aeff"/></div>
                       
                        <div className='cube-face cube-face-top'>
                        <FontAwesomeIcon icon={faGithub} color="#00aeff"/></div>
                        
                        <div className='cube-face cube-face-bottom'>
                        <FontAwesomeIcon icon={faJs} color="#00aeff"/></div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Hirosection;
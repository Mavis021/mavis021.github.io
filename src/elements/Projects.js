import AnimatedLetters from './AnimatedLetters';
import './Projects.scss'
import { useState, useEffect } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import DrawTect from '../assets/images/logoWhite.png'
import TheLostSpectrum from '../assets/images/chromaterrabw.jpg'
import Vizuo from '../assets/images/image.png'
import hogwarts from '../assets/images/hogwarts.jpg'

const Projects = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
    
        return () => {
            clearTimeout(timeoutId); // Clear the timeout when the component unmounts
        };
    }, []);

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };      

    return (
        <div className='Projects' id='ProjectSection'>
            <h1>
                <AnimatedLetters 
                letterClass={letterClass}
                strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
                idx={15}
                />
            </h1>
            <div className='project-container'>
            <Carousel responsive={responsive} infinite={true} className='project-slider'>
                
            <a target="_blank" rel='noreferrer' href='https://github.com/Mavis021/DrawTect'> 
            
            <div className='project'>
             
                <h2 style={{position: 'relative', top: '0%', textAlign: 'center'}}>
                <div className='title' >DrawTect</div> 
                <FontAwesomeIcon className='github' icon={faGithub} color='#d4d4d4'/> </h2>
                <img  style={{width: '100%',height: '32%', marginTop: '5px'}} src={DrawTect} alt='DrawTect'/>
                    
                <p>A VS Code Extension | Drawing support | Scribble when Coding</p>
            </div></a>

            <a target="_blank" rel='noreferrer' href='https://github.com/Mavis021/TheLostSpectrum'>

            <div className='project'>
            <div className='masktop'>
            <div className='mask'>
            
            <img src={TheLostSpectrum} alt='TheLostSpectrum'/>
            </div></div>
                <h2> <div className='title' >The Lost Spectrum</div> 
                <FontAwesomeIcon className='github' icon={faGithub} color='#d4d4d4'/> </h2>
                <p>2D Top Down Adventure Game | C++ with Raylib | Indie Games</p>
            </div></a>

            <a target="_blank" rel='noreferrer' href='https://github.com/Mavis021/Vizuo'>

            <div className='project'>
            <div className='masktop'>
            <div className='mask'>
    
            <img src={Vizuo} alt='Vizuo'/>
            </div></div>
                <h2><div className='title' >VIZUO</div> 
                <FontAwesomeIcon className='github' icon={faGithub} color='#d4d4d4'/> </h2>
                <p>Web Application | Visualizating Algorithms | Sorting | Searching </p>
           
            </div></a>

            <a target="_blank" rel='noreferrer' href='https://github.com/Mavis021/Hogwarts_0.3'>
           
            <div className='project'>
             <div className='masktop'>
            <div className='mask'>
            <img src={hogwarts} alt='Hogwarts_0.3'/>
            </div></div>
                <h2><div className='title' >Hogwarts_0.3</div> 
                <FontAwesomeIcon className='github' icon={faGithub} color='#d4d4d4'/> </h2>
                <p>2D Game | C++ with SDL </p>
           
            </div></a>

            </Carousel>
            </div>
        </div>
    )
}

export default Projects;
import AnimatedLetters from './AnimatedLetters';
import './Projects.scss'
import { useState, useEffect } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEye, faLandmark, faLanguage, faCommentSlash, faIdCard } from '@fortawesome/free-solid-svg-icons'

import DrawTect from '../assets/images/logoWhite.png'

const projectData = [
    {
        name: 'Evision',
        description: 'AR mobile app | Scene description for low-vision users | Unity + Llama + TTS',
        href: 'https://github.com/Mavis021/Evision',
        icon: faEye,
    },
    {
        name: 'MUSE',
        description: 'Fusemachines AI Fellowship | RAG-powered museum guide | Multi-label image recognition',
        icon: faLandmark,
    },
    {
        name: 'XenoLingo',
        description: 'Winner, MBM IDEAX 2023 with UNESCO Nepal | Preserving Indigenous languages',
        href: 'https://github.com/Mavis021/XenoLingo',
        icon: faLanguage,
    },
    {
        name: 'SWEEP',
        description: 'Toxic Comments Classification | Fine-tuned BERT for content moderation',
        href: 'https://github.com/Mavis021/Sweep_Toxic_Comments_Classification',
        icon: faCommentSlash,
    },
    {
        name: 'PhotoValidationSystem',
        description: 'Web app streamlining photo validation for online forms | Django + OpenCV',
        href: 'https://github.com/Mavis021/PhotoValidationSystem',
        icon: faIdCard,
    },
    {
        name: 'DrawTect',
        description: 'A VS Code Extension | Drawing support | Scribble when Coding',
        href: 'https://github.com/Mavis021/DrawTect',
        image: DrawTect,
    },
];

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

    const renderCard = (project) => (
        <div className='project'>
            {project.image ? (
                <div className='masktop'>
                    <div className='mask'>
                        <img src={project.image} alt={project.name} />
                    </div>
                </div>
            ) : (
                <div className='icon-face'>
                    <FontAwesomeIcon icon={project.icon} />
                </div>
            )}
            <h2>
                <div className='title'>{project.name}</div>
                {project.href && <FontAwesomeIcon className='github' icon={faGithub} color='#d4d4d4' />}
            </h2>
            <p>{project.description}</p>
        </div>
    );

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
                {projectData.map((project) => (
                    project.href ? (
                        <a target="_blank" rel='noreferrer' href={project.href} key={project.name}>
                            {renderCard(project)}
                        </a>
                    ) : (
                        <div key={project.name}>
                            {renderCard(project)}
                        </div>
                    )
                ))}
            </Carousel>
            </div>
        </div>
    )
}

export default Projects;

import './About.scss'
import { useState, useEffect } from 'react';
import AnimatedLetters from './AnimatedLetters';

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

        <div className='About'>
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['A', 'b', 'o', 'u', 't',' ', 'm', 'e']}
                    idx={15}
                    />
                </h1>
                <p>Computer Engineering Undergraduate passionate about learning and seeking corporate experience to 
                    implement the skills learned through academic knowledge and improvise the skills into expertise goals. 
                    </p> 
                <p>
                     A curious learner seeking an opportunity to challenge herself with 
                    new quests, learn new ways of solving, and become a better version of herself through coordination and 
                    learning with other like-minds.</p>
               </div>
    )
}

export default About;
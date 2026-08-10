import './Certifications.scss'
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCertificate, faTrophy } from '@fortawesome/free-solid-svg-icons'
import AnimatedLetters from './AnimatedLetters';

const certifications = [
    'AWS Certified AI Practitioner — Issued Apr 2026, Expires Apr 2029',
    '5-day AI Agents Intensive course by Kaggle x Google — Dec 2025',
    'Microdegree in Artificial Intelligence — Fusemachines AI Fellowship 2024',
    'AWS Academy Graduate — AWS Academy Data Engineering',
    'Machine Learning Practical Workout, 8 Real-World Projects — Udemy',
    'Image Processing with Python — DataCamp',
    'Samsung Innovation Campus - AI Course 2024',
];

const awards = [
    'Country Rank 1 — IEEE Xtreme 2024',
    'Winner — MBM IdeaX Hackathon 2023, with UNESCO Nepal',
    'First Runner-up — Start-Up Challenge, ANAIS 2024, NAAMII',
    'Student Ambassador — ANAIS 2024, NAAMII',
    'NPL Coder Fellow 2025 — Full-Stack Multi-Agentic AI',
    'Data Fellow 2023 — Code for Nepal',
    'Growthzilla Udemy Scholar 2024',
    'GitHub Fielder Nepal 2023',
];

const Certifications = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

    return (
        <div className='Certifications' id='CertificationsSection'>
            <h1>
                <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['C', 'r', 'e', 'd', 'e', 'n', 't', 'i', 'a', 'l', 's']}
                    idx={15}
                />
            </h1>
            <div className='credentials-columns'>
                <div className='credentials-column'>
                    <h4><FontAwesomeIcon icon={faCertificate} color='#6E56A8' /> Certifications</h4>
                    <ul>
                        {certifications.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className='credentials-column'>
                    <h4><FontAwesomeIcon icon={faTrophy} color='#6E56A8' /> Awards &amp; Recognition</h4>
                    <ul>
                        {awards.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Certifications;

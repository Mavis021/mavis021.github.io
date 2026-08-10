import './Experience.scss'
import { useState, useEffect } from 'react';
import AnimatedLetters from './AnimatedLetters';

const experienceData = [
    {
        role: 'Chief Product Officer',
        org: 'AI Lab',
        type: 'Part-time',
        period: 'Jul 2026 – Present',
        points: [
            'Own product strategy, roadmap, and UX for doctor/customer-facing workflows; drive product documentation and customer feedback loops',
            'Conduct medical LLM research — clinical accuracy/safety evaluation, benchmarking, and model behavior analysis for healthcare use cases',
            'Design and build AI agents and agentic workflows',
        ],
    },
    {
        role: 'AI/ML Engineer',
        org: 'REG-1',
        type: 'Full-time',
        period: 'Jul 2025 – Present',
        points: [
            'Build and deploy AI agents and agentic architectures/workflows',
            'Backend engineering for production AI systems',
        ],
    },
    {
        role: 'Technical Coordinator',
        org: 'B.P. Eye Foundation',
        type: 'Part-time',
        period: 'Jun 2025 – Dec 2025',
        points: [
            'Contributed to an AI-in-healthcare research project for early screening of diseases related to eye, ENT, and oral health',
            'Full-stack development, DevOps, and data collection coordination',
        ],
    },
    {
        role: 'Research Intern',
        org: 'NAAMII',
        type: 'Internship',
        period: 'Feb 2025 – May 2025',
        points: [
            'Formulated the AI problem and studied the clinical background of OPMD and oral cancer, and the role of AI in early-diagnosis practices',
            'Built and evaluated an AI model pipeline, reproducing results from the literature',
        ],
    },
];

const Experience = () => {
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
        <div className='Experience' id='ExperienceSection'>
            <h1>
                <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e']}
                    idx={15}
                />
            </h1>
            <div className='experience-timeline'>
                {experienceData.map((item, i) => (
                    <div className='experience-item' key={item.role + i}>
                        <div className='experience-dot' />
                        <div className='experience-card'>
                            <div className='experience-header'>
                                <h3>{item.role}</h3>
                                <span className='experience-period'>{item.period}</span>
                            </div>
                            <p className='experience-org'>{item.org} · {item.type}</p>
                            <ul>
                                {item.points.map((point, j) => (
                                    <li key={j}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Experience;

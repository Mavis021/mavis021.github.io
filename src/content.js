// All site copy lives here. Edit this file to update the website.
//
// Ground rules (keep these when editing):
// - AI Lab: only "Research Collaborator (Voluntary)" (optionally "& Shareholder").
//   No product/roadmap/UX/engineering work, no investment terms.
// - REG-1: describe only at the level below (NDA).
// - Papers: honest status only — in preparation / preprint / under review / accepted.
// - No phone number on the site.

export const profile = {
    name: 'Mamata Maharjan',
    honorific: 'Er.',
    location: 'Lalitpur, Nepal',
    email: 'maharjanmamata21@gmail.com',
    links: {
        linkedin: 'https://www.linkedin.com/in/mamatamaharjan/',
        github: 'https://github.com/Mavis021',
        medium: 'https://medium.com/@mavis021',
        instagram: 'https://www.instagram.com/mavis021_/',
        x: 'https://twitter.com/mavis021_',
    },
};

export const hero = {
    intro: 'I’m an AI/ML engineer in Nepal, working between research and engineering.',
    // Shown one at a time on a loop. `where` is the work or achievement behind each question.
    // An item with `quote` instead of `q` is shown as a quote.
    questions: [
        { q: 'Is a medical LLM’s answer clinically accurate, and is it safe?', where: 'Medical LLM research · AI Lab' },
        { q: 'Can AI help catch oral potentially malignant disorders early?', where: 'AI Research Intern · NAAMII' },
        { q: 'Can early screening for eye, ENT and oral-health conditions reach more people?', where: 'Technical Coordinator · B.P. Eye Foundation' },
        { q: 'Can an agentic NLP system read and reason through legal documents, reliably?', where: 'Agentic architectures for legal document processing · AI/ML Engineer, REG-1' },
        { q: 'Can a phone describe the world, in Nepali, to someone with low vision?', where: 'Evision · AR app' },
        { q: 'Can technology help keep Newari alive?', where: 'XenoLingo · Winner, MBM IdeaX 2023' },
        { q: 'How far can I push a hard problem in 24 hours?', where: 'Country Rank 1 · IEEE Xtreme 2024' },
        { quote: 'Rewrite your rules.' },
    ],
};

export const about = [
    'I studied Computer Engineering at Pulchowk Campus (IOE, Tribhuvan University) and am a licensed engineer with the Nepal Engineering Council. My first AI projects came out of hackathons and student communities: an AR app that describes scenes for Nepal’s low-vision community, and a tool for learning Indigenous languages like Newari.',
    'Research drew me toward medicine. At NAAMII, I studied the clinical background of oral potentially malignant disorders and oral cancer, then built and evaluated an imaging pipeline. At the B.P. Eye Foundation, I contributed to a project on early screening for eye, ENT, and oral-health conditions. Today I build agentic AI systems as an engineer and, as a voluntary research collaborator, evaluate medical LLMs for clinical accuracy and safety.',
    'Working in Nepal keeps one question in front of me: will a model be right, and safe, for the patients it actually meets, in settings with limited resources?',
];

export const researchInterests = [
    'Medical large language models',
    'Clinical accuracy and safety evaluation of LLMs',
    'Benchmarking and model-behaviour analysis for healthcare',
    'AI for early disease screening and medical imaging',
    'Agentic AI systems',
    'AI for low-resource settings such as Nepal',
];

// The Publications block stays hidden while this list is empty.
// Once a paper is out, add it like this:
// { title: 'Paper title', authors: 'A. Author, M. Maharjan, …', venue: 'Venue, 2027', status: 'Published', href: 'https://…' }
export const publications = [];

export const experience = [
    {
        role: 'AI/ML Engineer',
        org: 'REG-1',
        orgNote: 'Full-time',
        period: 'Jul 2025 – Present',
        points: [
            'Build and deploy AI agents and agentic workflows; backend engineering.',
        ],
        stack: 'Python · LangChain · AI agents · Agentic architectures',
    },
    {
        role: 'Research Collaborator (Voluntary)',
        org: 'AI Lab',
        orgNote: 'a healthcare AI startup in Nepal',
        period: 'Jul 2026 – Present',
        points: [
            'Medical LLM research: clinical accuracy and safety evaluation, benchmarking, and model-behaviour analysis for healthcare use cases.',
            'Co-authoring research papers on medical LLM evaluation (in preparation).',
            'Also an angel investor in the company.',
        ],
    },
    {
        role: 'Technical Coordinator',
        org: 'B.P. Eye Foundation',
        orgNote: 'Part-time',
        period: 'Jun 2025 – Dec 2025',
        points: [
            'Contributed to an AI-in-healthcare research project for early screening of eye, ENT, and oral-health conditions.',
            'Full-stack development, DevOps, data collection, and coordination.',
        ],
    },
    // An entry with `roles` is shown as one organisation with several roles.
    {
        org: 'NAAMII',
        orgNote: 'Lalitpur, Nepal',
        period: 'Sep 2024 – May 2025',
        roles: [
            {
                role: 'AI Research Intern',
                type: 'Internship · Hybrid',
                period: 'Feb 2025 – May 2025',
                points: [
                    'Studied the clinical context of oral potentially malignant disorders (OPMD) and oral cancer, and formulated the AI problem.',
                    'Preprocessed public medical imaging datasets, chose a YOLO-based model architecture, and built an evaluation pipeline against a baseline.',
                    'Reproduced results from the literature and reported the findings.',
                ],
                stack: 'PyTorch Lightning · Hydra · YOLO · Medical image processing',
            },
            {
                role: 'Student Ambassador',
                type: '5th Annual Nepal AI School (ANAIS)',
                period: 'Sep 2024 – Apr 2025',
                points: [
                    'Promoted the program and engaged applicants through personalised outreach; led AI discussions.',
                    'Recognised as Student Ambassador of the Day.',
                ],
            },
            {
                role: '“AI in Healthcare” Workshop',
                type: 'NAAMII × B.P. Eye Foundation',
                period: 'Dec 2024',
                points: [
                    'Two-day technical workshop: research paper presentation, the mathematical foundations of AI/ML, the basic ML pipeline, medical data acquisition and annotation, and the ethical and regulatory challenges of AI in healthcare, with hands-on coding.',
                ],
            },
        ],
    },
];

// Healthcare and social-impact projects first.
export const projects = [
    {
        name: 'Evision',
        label: 'Accessibility · AR',
        description:
            'An AR mobile app for Nepal’s low-vision community. A Llama-based model describes the scene and a Nepali text-to-speech system reads it aloud. Started at Shequal, Nepal’s largest all-female hackathon.',
        stack: 'Unity · C# · Flask · Llama · Nepali TTS',
        href: 'https://github.com/Mavis021/Evision',
        video: 'https://www.youtube.com/watch?v=_Y-ga5o2W5c',
    },
    {
        name: 'XenoLingo',
        label: 'Winner, MBM IdeaX 2023 · with UNESCO Nepal',
        description:
            'Helps learners pick up Indigenous languages such as Newari, using image recognition and open-source Nepali text-to-speech.',
        stack: 'Unity · C# · Flask · Python',
        href: 'https://github.com/Mavis021/XenoLingo',
    },
    {
        name: 'MUSE',
        label: 'Fusemachines AI Fellowship',
        description:
            'A conversational museum guide. A multi-label image classifier recognises exhibits from photos, and retrieval-augmented generation answers visitors’ questions, with text-to-speech.',
        stack: 'Flask · React · RAG · AWS',
        video: 'https://www.youtube.com/watch?v=mObhz98m0iQ',
    },
    {
        name: 'SWEEP',
        label: 'Samsung Innovation Campus · AI Course',
        description:
            'Multi-label toxic-comment classification that hides hateful content from users. Compares classical baselines with a fine-tuned BERT model.',
        stack: 'Python · PyTorch · Scikit-Learn · BERT',
        href: 'https://github.com/Mavis021/Sweep_Toxic_Comments_Classification',
    },
    {
        name: 'DrawTect',
        label: 'VS Code Marketplace',
        description:
            'A VS Code extension that adds drawing to the editor, for sketching diagrams and notes next to the code they explain.',
        stack: 'TypeScript · JavaScript · HTML · CSS',
        href: 'https://github.com/Mavis021/DrawTect',
    },
    {
        name: 'PhotoValidationSystem',
        label: 'Deployed on the college server',
        description:
            'A web app that checks photos submitted with online forms, so invalid uploads are caught automatically.',
        stack: 'Python · Django · OpenCV',
        href: 'https://github.com/Mavis021/PhotoValidationSystem',
    },
];

export const writing = [
    {
        title: 'Nowhere and Everywhere',
        publication: 'Zerone Magazine',
        note: 'Honorary mention · Printed in Zerone Magazine 2026',
        date: 'Dec 2025',
        description: 'A reflective essay on information overload, told through the image of a quiet avalanche.',
        href: 'https://medium.com/zerone-magazine/nowhere-and-everywhere-5d024eff833e',
    },
    {
        title: 'AWS Student Community Day 2025, Nepal',
        publication: 'Medium',
        date: 'Dec 2025',
        description: 'Notes from a day of sessions across the AWS ecosystem, from cloud security to agentic AI.',
        href: 'https://medium.com/@mavis021/aws-student-community-day-2025-nepal-13683c958b89',
    },
    {
        title: 'From Prompt to Production: Hosting an LLM on AWS SageMaker',
        publication: 'Medium',
        date: 'Jan 2025',
        description: 'A beginner-friendly walkthrough of deploying a foundation model on SageMaker and serving it through Lambda and API Gateway.',
        href: 'https://medium.com/@mavis021/from-prompt-to-production-hosting-an-llm-on-aws-sagemaker-7fd342805eb5',
    },
    {
        title: 'Cloud First Steps: What I Learned About EC2 and High Availability',
        publication: 'Medium',
        date: 'Nov 2023',
        description: 'How running a workload on EC2 across availability zones removes a single point of failure.',
        href: 'https://medium.com/@mavis021/cloud-first-steps-what-i-learned-about-ec2-and-high-availability-876ac2557c55',
    },
];

export const education = [
    {
        title: 'B.E. Computer Engineering',
        place: 'Pulchowk Campus, IOE, Tribhuvan University',
        period: '2021 – 2025',
        note: 'Licensed Engineer (Er.), Nepal Engineering Council',
    },
    {
        title: 'Science Stream',
        place: 'Omega International College',
        period: '2018 – 2020',
    },
];

export const awards = [
    { title: 'Country Rank 1', detail: 'IEEE Xtreme 2024' },
    { title: 'First Runner-up', detail: 'ANAIS 2024 Start-Up Challenge, NAAMII' },
    { title: 'Winner', detail: 'MBM IdeaX Hackathon 2023, with UNESCO Nepal' },
    { title: 'NPL Coder Fellow 2025', detail: 'Full-stack multi-agentic AI' },
    { title: 'Data Fellow 2023', detail: 'Code for Nepal' },
    { title: 'Finalist, Game Dev', detail: 'Hack-A-Week, LOCUS 2024' },
    { title: 'Growthzilla Udemy Scholar', detail: '2024' },
    { title: 'GitHub Fielder Nepal', detail: '2023' },
];

export const certifications = [
    { title: 'AWS Certified AI Practitioner', detail: '2026' },
    { title: 'AI Agents Intensive', detail: 'Kaggle × Google, 2025' },
    { title: 'Microdegree in Artificial Intelligence', detail: 'Fusemachines AI Fellowship, 2024' },
    { title: 'AWS Academy Graduate', detail: 'Data Engineering' },
];

export const leadership = [
    { title: 'Mentor', detail: 'NASA Space Apps Challenge 2026, Khwopa Engineering College', period: 'Nov 2026' },
    { title: 'Campus Strategist', detail: 'Perplexity, Nepal-APAC', period: '2025' },
    { title: 'Class Representative', detail: 'Samsung Innovation Campus AI Course, Pulchowk', period: '2024' },
    { title: 'Instructor', detail: 'LOCUS Software Fellowship', period: '2024' },
    { title: 'Executive Member', detail: 'IT Club, Pulchowk Campus (1000+ members)', period: '2023 – 2024' },
    { title: 'Design Chief', detail: 'LOCUS 2024, Pulchowk Campus', period: '2023 – 2024' },
];

export const contact = {
    line: 'Open to research collaborations and graduate study in AI for healthcare.',
};

// Navigation order: Research ahead of Projects.
export const nav = [
    { id: 'about', label: 'About' },
    { id: 'research', label: 'Research' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'writing', label: 'Writing' },
    { id: 'background', label: 'Background' },
    { id: 'contact', label: 'Contact' },
];

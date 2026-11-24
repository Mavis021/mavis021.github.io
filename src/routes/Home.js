import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from '../elements/NavBar';
import Footer from '../elements/Footer';
import {
    Hero, About, Research, Experience, Projects, Writing, Background, ContactCTA,
} from '../elements/Sections';

const Home = () => {
    const { hash } = useLocation();

    // Scroll to the section in the URL hash (e.g. arriving from /contact via /#research).
    useEffect(() => {
        if (!hash) return;
        const el = document.getElementById(hash.slice(1));
        if (el) el.scrollIntoView();
    }, [hash]);

    return (
        <>
            <NavBar />
            <main>
                <Hero />
                <About />
                <Research />
                <Experience />
                <Projects />
                <Writing />
                <Background />
                <ContactCTA />
            </main>
            <Footer />
        </>
    );
};

export default Home;

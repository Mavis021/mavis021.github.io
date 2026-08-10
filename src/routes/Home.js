import React from "react";
import NavBar from "../elements/NavBar";
import ParticlesComponent from "../elements/Particles";
import Hirosection from "../elements/Hirosection";
import Footer from "../elements/Footer";
import Experience from "../elements/Experience";
import Projects from "../elements/Projects";
import Certifications from "../elements/Certifications";

const Home = () => {
    return (
        <>

        <ParticlesComponent />
        <div>
            <NavBar />
            <Hirosection />
            <Experience />
            <Projects />
            <Certifications />
            <Footer />
        </div>

        </>
    );
}

export default Home;
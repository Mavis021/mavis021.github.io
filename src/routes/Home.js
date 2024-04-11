import React from "react";
import NavBar from "../elements/NavBar";
import ParticlesComponent from "../elements/Particles";
import Hirosection from "../elements/Hirosection";
import Footer from "../elements/Footer";
import About from "../elements/About";
import Projects from "../elements/Projects";

const Home = () => {
    return (
        <>
        
        <ParticlesComponent />
        <div>
            <NavBar />
            <Hirosection />
            <About />
            <Projects />
            <Footer />
        </div>

        </>
    );
}

export default Home;
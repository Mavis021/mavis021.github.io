import React from "react"
import NavBar from "../elements/NavBar"
import Footer from "../elements/Footer"
import ParticlesComponent from "../elements/Particles"
import Contacts from "../elements/Contacts"


const Contact = () => {
    return (
        <>

        <ParticlesComponent />
        <div>
            <NavBar />
            <Contacts />
            <Footer />
        </div>
        </>
    );
}

export default Contact;
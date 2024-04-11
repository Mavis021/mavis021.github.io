import React from 'react';
import './index.scss';
import ParticlesComponent from '../Particles';
import Home from '../Home';
import Footer from '../Footer';
import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar';

const Layout = () => {

    return (
        <>
        <ParticlesComponent />
    <div>
        <NavBar />
        <Home />
        <Footer />

        </div>
        </>
    );
    }

export default Layout;
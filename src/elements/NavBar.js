import './NavBar.scss'
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/images/logoM.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCodeMerge, faEnvelope, faHome, faProjectDiagram, faTimes, faUser, faX } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';


const NavBar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [color, setColor] = useState(false);
    const changeColor = () => {
        if(window.scrollY >= 80){
            setColor(true);
        } else {
            setColor(false);
        }
    }

    window.addEventListener('scroll', changeColor);

    return (
        <div className={color ? "nav-bar nav-bar-bg" : "nav-bar"}>
            <Link to="/" className="logo">
                <img src={logo} alt="Logo" />
            </Link>
            <div className={click? "nav active" : "nav"}>
                <a href="../#Home" activeclassname="active" className='list'>
                    <FontAwesomeIcon icon={faHome} color='#d4d4d4'/>
                </a>
                <a href="../#AboutSection" activeclassname="active" className='list about-link'>
                    <FontAwesomeIcon icon={faUser} color='#d4d4d4'/>
                </a>
                <a href="../#ProjectSection" activeclassname="active" className='list project-link'>
                    <FontAwesomeIcon icon={faCodeMerge} color='#d4d4d4'/>
                </a>
                <NavLink exact="true" activeclassname="active" className="list contact-link" to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color='#d4d4d4'/>
                </NavLink>

            </div>
            <div className='Hamburger' onClick={handleClick}>
                    {click ? (
                        <FontAwesomeIcon icon={faTimes} color='#d4d4d4'/>
                    ) : (
                        <FontAwesomeIcon icon={faBars} color='#d4d4d4'/>
                    )}
            </div>
        </div>
        );
}

export default NavBar;
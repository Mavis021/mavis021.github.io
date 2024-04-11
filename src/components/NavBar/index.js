import './index.scss'
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/logoM.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faEnvelope, faHome, faTimes, faUser, faX } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';


const NavBar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <div className="nav-bar">
            <Link to="/" className="logo">
                <img src={logo} alt="Logo" />
            </Link>
            <div className={click? "nav active" : "nav"}>
                <NavLink exact="true" activeclassname="active" className="list" to="/">
                    <FontAwesomeIcon icon={faHome} color='#d4d4d4'/>
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="list about-link" to="/about">
                    <FontAwesomeIcon icon={faUser} color='#d4d4d4'/>
                </NavLink>
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

    
            {/* <ul>
                <li>
                    <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/mamata-maharjan0021/'>
                        <FontAwesomeIcon icon={faLinkedin} color='#d4d4d4'/>
                    </a>
                    <a target="_blank" rel='noreferrer' href='https://github.com/Mavis021'>
                        <FontAwesomeIcon icon={faGithub} color='#d4d4d4'/>
                    </a>
                    <a target="_blank" rel='noreferrer' href='https://twitter.com/mavis021_'>
                        <FontAwesomeIcon icon={faX} color='#d4d4d4'/>
                    </a>
                </li>
            </ul> */}
        </div>
        );
}

export default NavBar;
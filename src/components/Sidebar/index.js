import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import logo from '../../assets/images/logoM.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser, faX } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (

    <div className="nav-bar">
        <Link to="/" className="logo">
            <img src={logo} alt="Logo" />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color='#d4d4d4'/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color='#d4d4d4'/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color='#d4d4d4'/>
            </NavLink>
        </nav>

        <ul>
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
        </ul>
    </div>
)

export default Sidebar
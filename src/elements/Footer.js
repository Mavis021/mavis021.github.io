import './Footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faHome, faMailBulk, faX } from '@fortawesome/free-solid-svg-icons'


const Footer = () => {
    return (
        <footer className='Footer'>
            <div className='footer-content'>
                <div className= 'left'>
                    <div className= "location">
                    <FontAwesomeIcon icon={faHome} color='#d4d4d4'/>
                    
                    <p>Aadinath Marga, Lalitpur, Nepal</p>
                    
                    </div>

                    <div className= "email">
                       <p> <FontAwesomeIcon icon={faMailBulk} color='#d4d4d4'/>
                            {' '} maharjanmamata21@gmail.com </p>
                    </div>
                </div>
                <div className= 'right'>
                    <p style={{color:'#00aeff'}}>Let's Connect</p>
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
            </div>
            <div className='footer-bottom'>
            <p>© 2024 Mamata Maharjan </p>
            </div>
        </footer>
    )
}

export default Footer;
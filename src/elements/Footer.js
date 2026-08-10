import './Footer.scss'

const Footer = () => {
    return (
        <footer className='Footer'>
            <div className='footer-bottom'>
                <p>Copyright © {new Date().getFullYear()} Mamata Maharjan</p>
            </div>
        </footer>
    )
}

export default Footer;

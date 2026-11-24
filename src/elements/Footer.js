import './Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faMedium, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { profile } from '../content';

const socials = [
    { icon: faLinkedin, href: profile.links.linkedin, label: 'LinkedIn' },
    { icon: faGithub, href: profile.links.github, label: 'GitHub' },
    { icon: faMedium, href: profile.links.medium, label: 'Medium' },
    { icon: faInstagram, href: profile.links.instagram, label: 'Instagram' },
    { icon: faXTwitter, href: profile.links.x, label: 'X' },
];

const Footer = () => (
    <footer className="footer">
        <div className="footer-inner">
            <p>© {new Date().getFullYear()} {profile.name}</p>
            <div className="footer-socials">
                {socials.map((s) => (
                    <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}>
                        <FontAwesomeIcon icon={s.icon} />
                    </a>
                ))}
            </div>
        </div>
    </footer>
);

export default Footer;

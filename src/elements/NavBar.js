import './NavBar.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import logo from '../assets/images/sunflower.svg';
import { nav } from '../content';

const NavBar = () => {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <nav className={`nav-bar${scrolled ? ' scrolled' : ''}`}>
            <div className="nav-inner">
                <Link to="/" className="logo" aria-label="Home" onClick={() => setOpen(false)}>
                    <img src={logo} alt="" />
                </Link>
                <div className={`nav-links${open ? ' open' : ''}`}>
                    {nav.map((item) => (
                        <Link
                            key={item.id}
                            to={`/#${item.id}`}
                            onClick={() => {
                                setOpen(false);
                                document.getElementById(item.id)?.scrollIntoView();
                            }}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
                <button
                    className="nav-toggle"
                    aria-label={open ? 'Close menu' : 'Open menu'}
                    aria-expanded={open}
                    onClick={() => setOpen(!open)}
                >
                    <FontAwesomeIcon icon={open ? faTimes : faBars} />
                </button>
            </div>
        </nav>
    );
};

export default NavBar;

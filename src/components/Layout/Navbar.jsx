import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/logo.png';
import './Navbar.css';
import { servicesData } from '../../data/servicesData';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false); // State for mega menu
    const { pathname } = useLocation();
    const isHome = pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-container">
                <NavLink to="/" className="logo" style={isHome && !scrolled ? { opacity: 0, pointerEvents: 'none', transition: 'opacity 0.3s ease' } : { opacity: 1, transition: 'opacity 0.3s ease' }}>
                    <img src={logo} alt="CAPS" className="navbar-logo" />
                </NavLink>

                <div className="desktop-menu">
                    {navLinks.map((link) => {
                        if (link.name === 'Services') {
                            return (
                                <div
                                    key={link.name}
                                    className="nav-item-dropdown"
                                    onMouseEnter={() => setIsServicesOpen(true)}
                                    onMouseLeave={() => setIsServicesOpen(false)}
                                >
                                    <NavLink
                                        to={link.path}
                                        className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                                        onClick={() => setIsServicesOpen(false)}
                                    >
                                        {link.name}
                                    </NavLink>
                                    <div className={`mega-menu ${isServicesOpen ? 'visible' : ''}`}>
                                        <div className="mega-menu-grid">
                                            {servicesData.map(svc => (
                                                <NavLink
                                                    key={svc.id}
                                                    to={`/services/${svc.id}`}
                                                    className={`mega-menu-item ${pathname === `/services/${svc.id}` ? 'active' : ''}`}
                                                    onClick={() => setIsServicesOpen(false)}
                                                >
                                                    <div className="mega-icon-box">
                                                        <svc.icon size={20} />
                                                    </div>
                                                    <div className="mega-text">
                                                        <h5>{svc.title}</h5>
                                                        <span>{svc.subtitle.substring(0, 40)}...</span>
                                                    </div>
                                                </NavLink>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                        return (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                            >
                                {link.name}
                            </NavLink>
                        );
                    })}
                    <NavLink to="/contact" className="cta-button">Get Started</NavLink>
                </div>

                <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="mobile-menu glass-panel">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                className="mobile-link"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;

import React from 'react';
import './Footer.css';
import { Mail, Phone, MapPin } from 'lucide-react';
import logo from '../../assets/logo.png';
import { servicesData } from '../../data/servicesData';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-grid">
                <div className="footer-col">
                    <img src={logo} alt="CAPS" className="footer-logo-img" />
                    <p className="footer-desc">Intelligent Arrangements for Your Workflow and Workforce.</p>
                </div>

                <div className="footer-col">
                    <h4>Company</h4>
                    <ul>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/insights">Insights</a></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Services</h4>
                    <ul>
                        {servicesData.map(svc => (
                            <li key={svc.id}>
                                <a href={`/services/${svc.id}`}>{svc.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Contact</h4>
                    <ul className="contact-list">
                        <li><MapPin size={18} /> 14071 Peyton Dr Unit 992, Chino Hills, CA 91709</li>
                        <li><Phone size={18} /> 909-292-XXXX</li>
                        <li><Mail size={18} /> info@caps-email.com</li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; 2026 CAPS. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

import React from 'react';
import HeroSection from '../components/UI/HeroSection';
import './Contact.css'; // New dedicated CSS
import './Pages.css'; // Shared page styles
import contactHero from '../assets/images/contact_support_3d_1769510307552.png';
import logo from '../assets/logo.png';
import { Mail, Phone, MapPin, Send, Clock, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/UI/SectionHeader';
import { servicesData } from '../data/servicesData';

const Contact = () => {
    return (
        <div className="page-contact">
            <HeroSection
                logo={logo}
                PageIcon={<MessageSquare size={64} />}
                title="Contact Us"
                subtitle="We're here to help you optimize your intelligent arrangements."
                ctaText="Scroll Down"
                ctaLink="#contact-form"
                image="/images/assets/contact-hero.jpg"
            />

            <div className="container contact-container">
                <div className="contact-wrapper glass-panel">

                    {/* Contact Info Sidebar */}
                    <div className="contact-info">
                        <h3>Get in Touch</h3>
                        <p className="contact-desc">Ready to start your journey with CAPS? Reach out to us for a consultation.</p>

                        <div className="info-item">
                            <div className="icon-box"><MapPin size={20} /></div>
                            <div>
                                <h5>Visit Us</h5>
                                <p>14071 Peyton Dr Unit 992<br />Chino Hills, CA 91709</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="icon-box"><Phone size={20} /></div>
                            <div>
                                <h5>Call Us</h5>
                                <p>909-292-XXXX</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="icon-box"><Mail size={20} /></div>
                            <div>
                                <h5>Email Us</h5>
                                <p>info@caps-email.com</p>
                            </div>
                        </div>



                        <div className="contact-illustration">
                            <img src={contactHero} alt="Contact Illustration" />
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="contact-form-section" id="contact-form">
                        <div className="form-header">
                            <motion.div
                                className="header-icon-badge"
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, repeatDelay: 2 }}
                            >
                                <Send size={24} />
                            </motion.div>
                            <h2 className="header-title">Send a Message</h2>
                            <p className="header-subtitle">We usually respond within 24 hours.</p>

                            <div className="header-decoration">
                                <motion.div
                                    className="deco-line"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "100px" }}
                                    transition={{ delay: 0.3, duration: 0.8 }}
                                    viewport={{ once: true }}
                                />
                            </div>
                        </div>

                        <form className="modern-form">
                            <div className="form-row">
                                <div className="form-group">
                                    <label>First Name</label>
                                    <input type="text" placeholder="Jane" />
                                </div>
                                <div className="form-group">
                                    <label>Last Name</label>
                                    <input type="text" placeholder="Doe" />
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Email Address</label>
                                <div className="input-with-icon">
                                    <Mail size={18} className="input-icon" />
                                    <input type="email" placeholder="jane@example.com" />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label>Company Name</label>
                                    <input type="text" placeholder="Your Company" />
                                </div>
                                <div className="form-group">
                                    <label>Company Size</label>
                                    <input type="text" placeholder="e.g. 1-50, 50-200" />
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Role / Job Title</label>
                                <input type="text" placeholder="e.g. CTO, Claims Manager" />
                            </div>

                            <div className="form-group">
                                <label>Service of Interest</label>
                                <div className="input-with-icon">
                                    <MessageSquare size={18} className="input-icon" />
                                    <select>
                                        <option value="">Select a service...</option>
                                        {servicesData.map(service => (
                                            <option key={service.id} value={service.id}>{service.title}</option>
                                        ))}
                                        <option value="other">Other Inquiry</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Subject</label>
                                <input type="text" placeholder="Brief summary of your inquiry" />
                            </div>

                            <div className="form-group">
                                <label>Message</label>
                                <textarea rows="5" placeholder="How can we help you?"></textarea>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="cta-button primary-btn submit-btn"
                                type="button"
                            >
                                Send Message <Send size={18} />
                            </motion.button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;

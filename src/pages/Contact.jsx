import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, Globe, ArrowRight } from 'lucide-react';
import HeroSection from '../components/UI/HeroSection';
import logo from '../assets/logo.png';
import { servicesData } from '../data/servicesData';
import './Contact.css';
import './Pages.css';

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [formStatus, setFormStatus] = useState('idle');

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormStatus('sending');
        setTimeout(() => {
            setFormStatus('success');
        }, 1500);
    };


    const contactInfo = [
        {
            icon: MapPin,
            title: "Visit Us",
            desc: "Come say hello at our headquarters.",
            address: "14071 Peyton Dr Unit 992, Chino Hills, CA 91709",
            color: "var(--brand-green)"
        },
        {
            icon: Mail,
            title: "Sales Inquiries",
            desc: "For project quotes and service information.",
            email: "sales@caps-email.com",
            phone: "909-292-XXXX",
            color: "var(--brand-blue)"
        },
        {
            icon: Globe,
            title: "Global Support",
            desc: "For existing clients and general queries.",
            email: "support@caps-email.com",
            phone: "909-292-XXXX",
            color: "var(--brand-green)"
        },
        {
            icon: MessageSquare,
            title: "General Inquiries",
            desc: "Just want to say hello or ask a question?",
            email: "info@caps-email.com",
            phone: "909-292-XXXX",
            color: "var(--brand-yellow)"
        }
    ];

    return (
        <div className="page-contact redesign">
            <HeroSection
                logo={logo}
                PageIcon={<MessageSquare size={64} />}
                title="Let's Talk Business"
                subtitle="Whether you're interested in our services, looking for advice, or just want to say hello, we'd love to hear from you."
                ctaText="Send Message"
                ctaLink="#contact-form"
                image="/images/assets/contact-hero.jpg"
            />

            <div className="container contact-main-container">
                <div className="contact-grid-layout">

                    {/* LEFT: Contact Info Cards */}
                    <motion.div
                        className="contact-cards-column"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        {contactInfo.map((item, idx) => (
                            <div key={idx} className="modern-contact-card">
                                <div className="card-icon-wrapper" style={{ background: `${item.color}15`, color: item.color }}>
                                    <item.icon size={24} />
                                </div>
                                <div className="card-content">
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
                                    {item.address ? (
                                        <p className="card-address">{item.address}</p>
                                    ) : (
                                        <>
                                            <a href={`mailto:${item.email}`} className="card-email">{item.email}</a>
                                            <span className="card-phone">{item.phone}</span>
                                        </>
                                    )}
                                </div>
                            </div>
                        ))}
                    </motion.div>

                    {/* RIGHT: Contact Form Card */}
                    <motion.div
                        className="contact-form-column"
                        id="contact-form"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="modern-form-card glass-panel">
                            {formStatus === 'success' ? (
                                <div className="form-success-state">
                                    <div className="success-icon-box">
                                        <Send size={48} />
                                    </div>
                                    <h2>Message Sent!</h2>
                                    <p>Thank you for reaching out. We usually respond within 24 hours.</p>
                                    <button onClick={() => setFormStatus('idle')} className="btn-reset">Send another message</button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="premium-form">
                                    <div className="form-header-simple">
                                        <span className="form-badge">Get in Touch</span>
                                        <h2>Send a Message</h2>
                                    </div>

                                    <div className="form-row-grid">
                                        <div className="form-input-group">
                                            <label>First Name</label>
                                            <input type="text" placeholder="Jane" required />
                                        </div>
                                        <div className="form-input-group">
                                            <label>Last Name</label>
                                            <input type="text" placeholder="Doe" required />
                                        </div>
                                    </div>

                                    <div className="form-input-group">
                                        <label>Email Address</label>
                                        <input type="email" placeholder="jane@example.com" required />
                                    </div>

                                    <div className="form-row-grid">
                                        <div className="form-input-group">
                                            <label>Company Name</label>
                                            <input type="text" placeholder="Your Company" />
                                        </div>
                                        <div className="form-input-group">
                                            <label>Company Size</label>
                                            <input type="text" placeholder="e.g. 1-50, 50-200" />
                                        </div>
                                    </div>

                                    <div className="form-row-grid">
                                        <div className="form-input-group">
                                            <label>Role / Job Title</label>
                                            <input type="text" placeholder="e.g. CTO, Claims Manager" />
                                        </div>
                                        <div className="form-input-group">
                                            <label>Service of Interest</label>
                                            <select required>
                                                <option value="">Select a service...</option>
                                                {servicesData.map(service => (
                                                    <option key={service.id} value={service.id}>{service.title}</option>
                                                ))}
                                                <option value="other">Other Inquiry</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="form-input-group">
                                        <label>Subject</label>
                                        <input type="text" placeholder="Brief summary of your inquiry" />
                                    </div>

                                    <div className="form-input-group">
                                        <label>Message</label>
                                        <textarea rows="4" placeholder="How can we help you?" required></textarea>
                                    </div>

                                    <button type="submit" className="premium-submit-btn" disabled={formStatus === 'sending'}>
                                        {formStatus === 'sending' ? 'Sending...' : <>Send Message <ArrowRight size={20} /></>}
                                    </button>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;

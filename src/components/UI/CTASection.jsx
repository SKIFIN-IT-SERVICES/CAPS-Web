import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './CTASection.css';

const CTASection = ({
    title = "Ready to Transform Your Operations?",
    subtitle = "Get a custom roadmap formatted for your organization's specific needs.",
    btnText = "Get in Touch",
    link = "/contact"
}) => {
    return (
        <section className="cta-full-section">
            <div className="container">
                <div className="cta-content-full">
                    <h2>{title}</h2>
                    <p>{subtitle}</p>
                    <Link to={link} className="cta-button-large display-inline-flex align-center gap-2">
                        {btnText} <ArrowRight size={20} />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CTASection;

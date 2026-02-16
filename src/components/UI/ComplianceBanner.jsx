import React from 'react';
import { ShieldCheck, Lock, Globe, Award } from 'lucide-react';
import { certs } from '../../data/homeData';
import './ComplianceBanner.css';

const ComplianceBanner = () => {
    return (
        <section className="compliance-banner-section">
            <div className="container">
                <div className="compliance-row">
                    <div className="compliance-intro">
                        <h3>Uncompromising Compliance</h3>
                        <p>Exceeding the most stringent standards in healthcare data security.</p>
                    </div>
                    <div className="compliance-logos">
                        {certs.map((cert, index) => {
                            const Icon = cert.icon;
                            return (
                                <div key={index} className="compliance-item">
                                    <Icon size={24} className="compliance-icon" />
                                    <span>{cert.name}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ComplianceBanner;

import React from 'react';
import { ShieldCheck } from 'lucide-react';
import './ComplianceBadges.css';

const ComplianceBadges = ({ badges }) => {
    if (!badges || badges.length === 0) return null;

    return (
        <div className="compliance-badges-container">
            {badges.map((badge, index) => (
                <div key={index} className="compliance-badge">
                    <ShieldCheck size={16} />
                    <span>{badge}</span>
                </div>
            ))}
        </div>
    );
};

export default ComplianceBadges;

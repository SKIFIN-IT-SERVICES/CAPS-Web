import {
    Building2,
    Stethoscope,
    ShieldCheck,
    Landmark,
    Users,
    Briefcase,
    Globe,
    Award,
    Lock
} from 'lucide-react';

export const industries = [
    {
        id: 'health-plans',
        title: 'Health Plans & Payers',
        icon: Building2,
        desc: 'Streamlining claims adjudication and member management for regional and national payers.',
        link: '/services'
    },
    {
        id: 'dental',
        title: 'Dental Networks',
        icon: Stethoscope,
        desc: 'Specialized CDT coding accuracy and rapid pre-determination for dental support organizations.',
        link: '/services/dental-claims-processing'
    },
    {
        id: 'pnc',
        title: 'P&C Insurers',
        icon: ShieldCheck,
        desc: 'Accelerating FNOL intake and liability assessment for property and casualty carriers.',
        link: '/services/property-casualty-insurance'
    },
    {
        id: 'tpas',
        title: 'Third-Party Administrators',
        icon: Users,
        desc: 'Flexible, scalable workforce solutions to handle seasonal enrollment and claims spikes.',
        link: '/services'
    },
    {
        id: 'govt',
        title: 'Government & Public Sector',
        icon: Landmark,
        desc: 'Secure, compliant processing for Medicaid, Medicare, and public health initiatives.',
        link: '/services'
    },
    {
        id: 'healthcare',
        title: 'Healthcare Providers',
        icon: Briefcase,
        desc: 'Revenue cycle management optimization to reduce denials and accelerate cash flow.',
        link: '/services/provider-management'
    }
];

export const caseStudies = [
    {
        id: 1,
        title: "Regional Health Plan Transformation",
        category: "Claims Management",
        stat: "40%",
        statContext: "Reduction in OpEx",
        desc: "How a mid-sized payer automated 85% of their claims workflow using CAPS AI, achieving 99.5% accuracy.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070",
        link: "/services/health-claims-management"
    },
    {
        id: 2,
        title: "National Dental Carrier Scale-Up",
        category: "Dental Processing",
        stat: "24h",
        statContext: "Pre-D Turnaround",
        desc: "Scaling operations to handle 50k+ daily claims while maintaining CDT-2025 compliance.",
        image: "https://images.unsplash.com/photo-1606811842783-5f78005fae3e?auto=format&fit=crop&q=80&w=2070",
        link: "/services/dental-claims-processing"
    },
    {
        id: 3,
        title: "P&C Liability Defense",
        category: "Risk Management",
        stat: "$12M",
        statContext: "Annual Savings",
        desc: "Implementing AI-driven fraud detection and liability analysis to reduce improper payouts.",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=2070",
        link: "/services/property-casualty-insurance"
    }
];

export const insights = [
    {
        id: 1,
        title: "The Future of Claims Adjudication: AI vs. Human-in-the-Loop",
        category: "Industry Trends",
        date: "October 15, 2025",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1488229297570-58520851e868?auto=format&fit=crop&q=80&w=2069",
        desc: "Why the most effective systems combine predictive algorithms with expert human oversight."
    },
    {
        id: 2,
        title: "Preparing for the 2026 Regulatory Landscape",
        category: "Compliance",
        date: "November 2, 2025",
        readTime: "7 min read",
        image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=2072",
        desc: "Key changes in CMS and HIPAA regulations that every payer needs to anticipate."
    },
    {
        id: 3,
        title: "Optimizing Provider Networks for Value-Based Care",
        category: "Provider Management",
        date: "November 10, 2025",
        readTime: "4 min read",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2070",
        desc: "Strategies to ensure your provider directory is accurate, compliant, and high-performing."
    }
];

export const certs = [
    { name: "HIPAA Compliant", icon: ShieldCheck },
    { name: "SOC 2 Type II", icon: Lock },
    { name: "ISO 27001", icon: Globe },
    { name: "URAC Accredited", icon: Award }
];

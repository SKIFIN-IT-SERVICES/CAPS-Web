import { Users, Globe, Award, Briefcase, Shield, Activity } from 'lucide-react';

export const aboutData = {
    stats: [
        { value: "20+", label: "Years of Excellence" },
        { value: "500+", label: "Clients Served" },
        { value: "50M+", label: "Claims Processed/Year" },
        { value: "99.9%", label: "SLA Adherence" }
    ],
    leadership: [
        {
            name: "Sarah Jenkins",
            title: "CEO & Founder",
            bio: "25+ years in healthcare administration. Former V.P. of Operations at Major Health Plan.",
            image: "/images/assets/leader1.jpg" // Placeholder
        },
        {
            name: "David Chen",
            title: "Chief Technology Officer",
            bio: "Expert in AI/ML and HIPAA compliance. Led digital transformation for Fortune 500 insurers.",
            image: "/images/assets/leader2.jpg" // Placeholder
        },
        {
            name: "Dr. Emily Carter",
            title: "Chief Medical Officer",
            bio: "Board-certified physician ensuring clinical integrity in all adjudication processes.",
            image: "/images/assets/leader3.jpg" // Placeholder
        }
    ],
    methodology: [
        {
            step: "01",
            title: "Analyze",
            desc: "We allow for deep-dive assessment of your current workflows and pain points.",
            icon: Activity
        },
        {
            step: "02",
            title: "Strategize",
            desc: "Custom solution design leveraging our AI modules and expert workforce.",
            icon: Briefcase
        },
        {
            step: "03",
            title: "Implement",
            desc: "Seamless integration with your legacy systems using our 'Wrapper' tech.",
            icon: Globe
        },
        {
            step: "04",
            title: "Optimize",
            desc: "Continuous improvement through real-time analytics and regular reviews.",
            icon: TrendingUp
        }
    ],
    certifications: [
        {
            title: "SOC 2 Type II",
            desc: "Audited annually to ensure maximum security and privacy controls.",
            icon: Shield
        },
        {
            title: "HIPAA Compliant",
            desc: "Full adherence to Privacy, Security, and Breach Notification Rules.",
            icon: Shield
        },
        {
            title: "ISO 27001",
            desc: "International standard for Information Security Management Systems.",
            icon: Shield
        },
        {
            title: "URAC Accredited",
            desc: "Recognized for excellence in Health Utilization Management.",
            icon: Award
        }
    ],
    locations: [
        { city: "Chino Hills, CA", type: "Headquarters" },
        { city: "Dallas, TX", type: "Operations Center" },
        { city: "Hyderabad, India", type: "Global Delivery Center" },
        { city: "Manila, Philippines", type: "Support Hub" }
    ],
    partners: [
        "Microsoft Azure",
        "UiPath",
        "AWS",
        "Salesforce Health Cloud"
    ]
};

// Start of Selection
// Need to import TrendingUp locally since I used it above
import { TrendingUp } from 'lucide-react';

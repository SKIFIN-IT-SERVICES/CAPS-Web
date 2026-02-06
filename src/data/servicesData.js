import healthImg from '../assets/images/health_claims_1769508347659.png';
import dentalImg from '../assets/images/dental_claims_1769508502905.png';
import pncImg from '../assets/images/pnc_insurance_1769508676533.png';
import memberImg from '../assets/images/members_management_1769508885858.png';
import providerImg from '../assets/images/provider_management_1769508987089.png';
import fsaImg from '../assets/images/fsa_account_1769509124084.png';
import { Activity, ClipboardList, ShieldCheck, Users, Wallet, FileText, Database, GitMerge, Server, CheckCircle, Layers, Monitor } from 'lucide-react';

export const servicesData = [
    {
        id: "health-claims-management",
        title: "Health Claims Management",
        subtitle: "The AI-Driven Lifecycle: Precision, Speed, and Revenue Integrity.",
        icon: Server,
        image: healthImg,
        shortDesc: "Achieve 98% clean claim rates with our AI-powered adjudication engine. We flag errors pre-submission to accelerate cash flow.",
        fullDesc: [
            "Stop reacting to denials and start predicting payment. Our Health Claims Management service transforms the traditional manual processing cycle into an intelligent, data-driven revenue engine. By leveraging predictive algorithms, we identify potential coding errors and eligibility mismatches in CMS-1500 and UB-04 forms before they ever reach the payer.",
            "Our multi-layer decision engine automates adjudication against complex plan benefits, ensuring that every claim is paid accurately according to the latest 2025 policy terms. This 'Predictive Adjudication' model significantly reduces administrative overhead and minimizes the risk of costly audits.",
            "Beyond mere processing, we integrate pro-active Case Management. We align clinical necessity with financial efficiency, ensuring that high-cost treatments are medically warranted and cost-effective, turning your claims department into a strategic asset."
        ],
        features: [
            { title: "Predictive Adjudication", desc: "AI forecasts denial risks pre-submission for 98% clean claim rates." },
            { title: "Intelligent Intake", desc: "Automated scrubbing of electronic claims for instant error detection." },
            { title: "Real-Time Eligibility", desc: "Instant verification to prevent coverage-related rejections." },
            { title: "Recall & Recovery", desc: "Automated workflows to recover revenue from underpaid claims." }
        ],
        acronyms: [
            { term: "CMS-1500", definition: "Standard claim form for non-institutional providers." },
            { term: "UB-04", definition: "Standard claim form for institutional providers." },
            { term: "CPT", definition: "Current Procedural Terminology for coding medical services." }
        ]
    },
    {
        id: "dental-claims-processing",
        title: "Dental Claims Processing",
        subtitle: "Specialization at Scale: CDT 2025 Compliance & Accuracy.",
        icon: ClipboardList,
        image: dentalImg,
        shortDesc: "Master the latest CDT codes and UCR fee schedules. We automate radiographic reviews for faster, accurate dental reimbursements.",
        fullDesc: [
            "Dental billing is nuanced and constantly evolving. Our specialized processing unit stays ahead of the curve, fully mastering the latest annual CDT code transitions—including the 2025 updates—so your practice never suffers from 'obsolete code' denials.",
            "We bring transparency to the forefront with real-time Pre-Determination of benefits. Patients receive accurate out-of-pocket estimates for major restorative work before the procedure begins, drastically improving collection rates and patient trust.",
            "Our system also manages UCR (Usual, Customary, and Reasonable) fee schedules with precision. We analyze fee logic to ensure your reimbursements remain competitive and consistent, protecting your practice's bottom line against stagnant rates."
        ],
        features: [
            { title: "CDT Code Expertise", desc: "100% compliance with the latest annual ADA procedure codes." },
            { title: "Painless Pre-Determinations", desc: "Instant out-of-pocket estimates for complex procedures." },
            { title: "UCR Fee Integrity", desc: "Logic-based analysis to maximize competitive reimbursement areas." },
            { title: "Smart Attachments", desc: "Seamless integration of x-rays and periodontal charts." }
        ],
        acronyms: [
            { term: "CDT", definition: "Current Dental Terminology." },
            { term: "UCR", definition: "Usual, Customary, and Reasonable fees." },
            { term: "ADA", definition: "American Dental Association." }
        ]
    },
    {
        id: "property-casualty-insurance",
        title: "P&C Insurance",
        subtitle: "Asset & Liability Mastery: Digital-First Risk Resolution.",
        icon: ShieldCheck,
        image: pncImg,
        shortDesc: "Rapid Digital FNOL intake and AI-driven liability analytics. Protect assets and settle claims faster with data-backed confidence.",
        fullDesc: [
            "In Property & Casualty, every hour of delay increases costs. Our Digital-First intake reduces FNOL (First-Notice-of-Loss) cycle times by up to 50%. Whether it's storm damage or theft, we facilitate rapid assessment to settle property claims with speed and empathy.",
            "For liability management, we deploy advanced analytics to protect your bottom line. Our 'Liability Shield' protocols assess risks early, helping you avoid 'nuclear verdicts' in complex litigation by identifying fair settlement values quickly using historical data.",
            "We also leverage next-gen fraud detection. Our systems analyze patterns to flag digitally altered evidence or inconsistent statements, ensuring that you only pay legitimate claims while aggressively defending against abuse."
        ],
        features: [
            { title: "Digital FNOL Intake", desc: "Mobile-first reporting reduces initial processing time by 50%." },
            { title: "Liability Shield", desc: "Analytics to assess litigation risk and optimize settlements." },
            { title: "Virtual Adjuster Desk", desc: "Remote image assessment for faster property claim resolution." },
            { title: "Fraud Defense", desc: "AI detection of manipulated images and suspicious patterns." }
        ],
        acronyms: [
            { term: "FNOL", definition: "First Notice of Loss." },
            { term: "P&C", definition: "Property and Casualty Insurance." },
            { term: "SIU", definition: "Special Investigation Unit (Fraud)." }
        ]
    },
    {
        id: "member-management",
        title: "Member Management",
        subtitle: "The Digital Experience: Seamless Enrollment & Retention.",
        icon: Users,
        image: memberImg,
        shortDesc: "A 'One-Stop' digital portal for enrollment, ID cards, and billing. Enhance member satisfaction and reduce call center volume.",
        fullDesc: [
            "The member experience is your brand's defining feature. We provide the modern, 24/7 digital touchpoints that today's members expect. Our platform consolidates everything—from paperless enrollment and ID cards to real-time accumulators—into a single, intuitive 'Digital Front Door.'",
            "We support the diverse needs of modern plans, including ICHRA (Individual Coverage HRA) management. Our self-service tools empower members to update their own data and view transparent billing, which directly reduces your call center volume by up to 30%.",
            "Beyond administration, we drive engagement. Our AI-driven proactive communication tools nurture members with personalized benefit reminders, helping them make smarter health choices that drive better outcomes for everyone."
        ],
        features: [
            { title: "Zero-Friction Enrollment", desc: "Paperless, real-time onboarding and eligibility syncing." },
            { title: "Unified Member Portal", desc: "One app for ID cards, claims, and benefit tracking." },
            { title: "Financial Transparency", desc: "Clear, understandable billing and premium collection tools." },
            { title: "Proactive Engagement", desc: "Automated communication to drive healthy member behaviors." }
        ],
        acronyms: [
            { term: "ICHRA", definition: "Individual Coverage Health Reimbursement Arrangement." },
            { term: "EOB", definition: "Explanation of Benefits." },
            { term: "HRA", definition: "Health Reimbursement Arrangement." }
        ]
    },
    {
        id: "provider-management",
        title: "Provider Management",
        subtitle: "Network Integrity: Automated Compliance & Credentialing.",
        icon: FileText,
        image: providerImg,
        shortDesc: "Automate primary source verification and monthly monitoring. Meet NCQA & URAC standards with a pristine, compliant network.",
        fullDesc: [
            "Compliance isn't a once-a-year event; it's a daily necessity. Our Provider Management suite automates the heavy lifting of credentialing, ensuring you meet the new 2025 NCQA timelines (120-day cycles) with ease.",
            "We move beyond static verification to 'Continuous Network Monitoring.' Our system performs monthly checks against OIG, SAM, and state exclusion lists, ensuring your network remains pristine and your audits remain clean at all times.",
            "Solve the puzzle of network adequacy with real-time intelligence. We map provider accessibility to identify care gaps instantly, allowing you to build a robust, compliant network that meets both regulatory standards and patient needs."
        ],
        features: [
            { title: "Rapid Credentialing", desc: "Automated PSV to meet 120-day verification standards." },
            { title: "Monthly Monitoring", desc: "Continuous checks against OIG/SAM exclusion lists." },
            { title: "Network Intelligence", desc: "Real-time mapping to ensure adequacy and close care gaps." },
            { title: "Audit-Ready Data", desc: "Centralized, compliant repository for all provider documentation." }
        ],
        acronyms: [
            { term: "NCQA", definition: "National Committee for Quality Assurance." },
            { term: "URAC", definition: "Utilization Review Accreditation Commission." },
            { term: "PSV", definition: "Primary Source Verification." },
            { term: "OIG", definition: "Office of Inspector General." }
        ]
    },
    {
        id: "fsa-administration",
        title: "FSA Administration",
        subtitle: "Pre-Tax Precision: Smart Substantiation & AI.",
        icon: Wallet,
        image: fsaImg,
        shortDesc: "Boost participation with 'Smart Substantiation.' Our AI auto-verifies 85% of claims, reducing receipt headaches and saving taxes.",
        fullDesc: [
            "Take the headache out of the 'Use-it-or-lose-it' rule. Our FSA Administration platform uses 'Smart Substantiation' AI to automatically verify up to 85% of transactions without requiring a manual receipt, significantly improving the employee experience.",
            "We turn FSAs into a strategic financial tool. By educating employees on tax savings and offering seamless debit card integration, we boost participation rates—which in turn lowers your employer FICA tax burden.",
            "Our mobile-first design puts control in employees' hands. They can snap photos of receipts, track balances in real-time, and manage Carryover or Grace Period options effortlessly, ensuring 100% compliance with IRS Section 125 regulations."
        ],
        features: [
            { title: "Smart Substantiation", desc: "AI auto-verifies claims to reduce manual receipt requests." },
            { title: "Mobile-First UX", desc: "Snap-and-submit receipt management for instant claims." },
            { title: "Tax Savings Focus", desc: "Tools to maximize participation and employer FICA reductions." },
            { title: "Debit Card Access", desc: "Seamless point-of-sale use for eligible medical expenses." }
        ],
        acronyms: [
            { term: "FSA", definition: "Flexible Spending Account." },
            { term: "FICA", definition: "Federal Insurance Contributions Act." },
            { term: "IRS", definition: "Internal Revenue Service." }
        ]
    },
    {
        id: "data-conversions",
        title: "Data Conversions",
        subtitle: "Safe Passage for Critical Data: Legacy to Modern.",
        icon: Database,
        image: "/images/assets/data-server.jpg", // Data/Server
        shortDesc: "Securely migrate legacy claims and clinical data to modern standards (HL7, FHIR). We ensure 100% data integrity and compliance.",
        fullDesc: [
            "Migrating from legacy systems is high-stakes. Our Data Conversion service ensures that your critical historical claims, patient records, and provider data are transferred securely and accurately to your new platforms.",
            "We handle the complexities of mapping non-standard legacy data to modern formats like HL7 v2, C-CDA, and FHIR. Our proprietary validation engines check every record before and after migration to guarantee 100% integrity.",
            "Beyond simple transfer, we cleanse and enrich your data during the process, eliminating duplicates and correcting formatting errors, so your new system starts with a pristine 'Single Source of Truth'."
        ],
        features: [
            { title: "Legacy Extraction", desc: "Safe decoding of data from mainframe and obsolete SQL architectures." },
            { title: "Standardization", desc: "Mapping proprietary formats to interoperable industry standards (FHIR)." },
            { title: "Data Cleansing", desc: "Automated deduplication and error correction during transit." },
            { title: "Audit Trail", desc: "Complete chain-of-custody logging for HIPAA compliance." }
        ],
        acronyms: [
            { term: "HL7", definition: "Health Level Seven International." },
            { term: "FHIR", definition: "Fast Healthcare Interoperability Resources." },
            { term: "C-CDA", definition: "Consolidated Clinical Document Architecture." }
        ]
    },
    {
        id: "consulting-restructuring",
        title: "Consulting for Dept. Restructuring",
        subtitle: "Operational Agility: Realigning People & Process.",
        icon: GitMerge,
        image: "/images/assets/consulting.jpg", // Consulting
        shortDesc: "Navigate financial pressures and regulatory shifts. We guide healthcare departments through strategic restructuring to maximize efficiency.",
        fullDesc: [
            "Market forces and regulatory changes often demand internal evolution. Our Consulting Consultants act as strategic partners to help payer and provider organizations restructure their departments for financial stability and operational agility.",
            "We analyze your current workforce distribution and workflows to identify bottlenecks and redundancies. Whether merging departments or streamlining leadership, we provide a roadmap that aligns your human capital with your strategic goals.",
            "Our approach minimizes disruption. We help manage the change curve, ensuring that restructuring leads to measurable efficiency gains—cost reduction, faster decision making, and improved service delivery—without sacrificing employee morale."
        ],
        features: [
            { title: "Workflow Analysis", desc: "Identifying inefficiencies and 'heavy' processes for streamlining." },
            { title: "Change Management", desc: "Strategic communication plans to guide teams through transition." },
            { title: "Role Alignment", desc: "Redefining job functions to match modern operational needs." },
            { title: "Financial Optimization", desc: "Structuring departments to reduce overhead and improve ROI." }
        ],
        acronyms: [
            { term: "ROI", definition: "Return on Investment." },
            { term: "KPI", definition: "Key Performance Indicator." },
            { term: "SME", definition: "Subject Matter Expert." }
        ]
    },
    {
        id: "it-co-management",
        title: "High-level IT Support Co-management",
        subtitle: "Hybrid Power: Extending Your Internal IT.",
        icon: Server,
        image: "/images/assets/it-support.jpg", // IT Support
        shortDesc: "Scale your IT capabilities without headcount. We provide specialized cybersecurity, cloud, and infrastructure support to augment your team.",
        fullDesc: [
            "The complexity of healthcare IT often outpaces the capacity of internal teams. Our Co-managed IT service offers a hybrid model, letting you keep control of daily operations while we handle critical backend infrastructure, security, and specialized projects.",
            "We plug the skills gap. If you need advanced cybersecurity threat hunters or cloud architects, you get instant access to our experts without the recruiting costs. We monitor your systems 24/7/365 to prevent downtime.",
            "This partnership allows your internal IT staff to focus on strategic, user-facing initiatives that improve patient care, while we ensure the 'lights stay on' with robust compliance, patching, and disaster recovery protocols."
        ],
        features: [
            { title: "24/7 Monitoring", desc: "Round-the-clock eyes on critical infrastructure and uptime." },
            { title: "Cybersecurity Shield", desc: "Advanced threat detection and HIPAA compliance enforcement." },
            { title: "Skill Augmentation", desc: "Instant access to specialized cloud and network engineers." },
            { title: "Cost Efficiency", desc: "Enterprise-grade support for a fraction of full-time hiring costs." }
        ],
        acronyms: [
            { term: "HIPAA", definition: "Health Insurance Portability and Accountability Act." },
            { term: "SOC2", definition: "Service Organization Control 2." },
            { term: "NOC", definition: "Network Operations Center." }
        ]
    },
    {
        id: "claims-adjudication",
        title: "Claims Adjudication Services",
        subtitle: "Outsourced Excellence: Speed, Accuracy, Scale.",
        icon: CheckCircle,
        image: "/images/assets/medical-checklist.jpg", // Medical Checklist // Placeholder
        shortDesc: "Eliminate backlogs and reduce overhead. Our dedicated adjudication experts process claims with speed and 99% accuracy.",
        fullDesc: [
            "Scalability is the biggest challenge in claims processing. Our outsourced Adjudication Services provide you with an on-demand workforce of experienced claims examiners who can handle spikes in volume without compromising quality.",
            "We function as a seamless extension of your team. Utilizing your specific business rules and platforms, our experts manually review complex claims that fail auto-adjudication, ensuring fair and accurate payment decisions.",
            "By outsourcing the 'grunt work' of high-volume processing, your internal team can focus on high-value tasks like provider relationships and case management. We deliver faster reimbursements and reduced administrative costs instantly."
        ],
        features: [
            { title: "On-Demand Scale", desc: "Flexibly ramp up staff to handle seasonal enrollment spikes." },
            { title: "Cost Reduction", desc: "Save 30-40% on operational costs vs. internal hiring." },
            { title: "Backlog Elimination", desc: "Rapid processing to clear aged claims and improve cash flow." },
            { title: "Quality Assurance", desc: "Rigorous tiered review process to ensure 99% payment accuracy." }
        ],
        acronyms: [
            { term: "TPA", definition: "Third Party Administrator." },
            { term: "SLA", definition: "Service Level Agreement." },
            { term: "QA", definition: "Quality Assurance." }
        ]
    },
    {
        id: "claims-management-system-reseller",
        title: "Claims Management System Reseller",
        subtitle: "Best-in-Class Platforms: Curated & Compliant.",
        icon: Layers,
        image: "/images/assets/dashboard.jpg", // Dashboard
        shortDesc: "Stop searching. We resell and implement the industry's top-rated, HIPAA-compliant claims platforms tailored to your size.",
        fullDesc: [
            "Choosing the right CMS (Claims Management System) is daunting. As an authorized reseller of the industry's leading platforms, we help you select and license software that perfectly matches your organization's complexity and budget.",
            "We don't just sell licenses; we ensure success. Our team handles the configuration, implementation, and training, ensuring you get the most out of your investment from Day 1. We curate platforms known for automation, compliance, and ease of use.",
            "Whether you are a TPA or a growing health plan, we provide access to enterprise-grade tools that might otherwise be out of reach, often with preferred pricing and enhanced support packages exclusive to our partners."
        ],
        features: [
            { title: "Curated Selection", desc: "Access to top-tier, pre-vetted claims management platforms." },
            { title: "Expert Implementation", desc: "Configuration and setup by certified system architects." },
            { title: "Preferred Pricing", desc: "Leverage our partnership volume for better license rates." },
            { title: "Training & Support", desc: "Comprehensive onboarding to ensure staff adoption." }
        ],
        acronyms: [
            { term: "CMS", definition: "Claims Management System." },
            { term: "SaaS", definition: "Software as a Service." },
            { term: "API", definition: "Application Programming Interface." }
        ]
    },
    {
        id: "modern-legacy-web-wrapper",
        title: "Modern Web Wrapper for Legacy",
        subtitle: "Modernize Without Rebuilding: The UI Lift.",
        icon: Monitor,
        image: "/images/assets/code-screen.jpg", // Code/Screen // Placeholder
        shortDesc: "Give your legacy green-screen system a modern web interface. Improve UX and accessibility without a risky backend rewrite.",
        fullDesc: [
            "You don't have to rip and replace your stable legacy system to get a modern user experience. Our 'Website Wrapper' service encapsulates your existing mainframe or legacy claims application in a responsive, modern web interface.",
            "This 'Headless' approach extends the life of your core technology. We build a sleek, intuitive frontend that interacts with your legacy backend via APIs or screen-scraping tech, improving employee productivity and enabling remote work access.",
            "It's the fastest, safest path to modernization. You gain the benefits of a cloud-accessible, user-friendly dashboard for your team or members, while keeping the trusted, battle-tested logic of your core system intact."
        ],
        features: [
            { title: "UX Transformation", desc: "Convert complex legacy screens into intuitive web dashboards." },
            { title: "Risk-Free Modernization", desc: "Update the look and feel without touching critical backend logic." },
            { title: "Remote Accessibility", desc: "Enable secure access to on-prem systems via modern web browsers." },
            { title: "Extended Lifespan", desc: "Add years of value to your existing infrastructure investments." }
        ],
        acronyms: [
            { term: "UX/UI", definition: "User Experience / User Interface." },
            { term: "SPA", definition: "Single Page Application." },
            { term: "HTML5", definition: "Hypertext Markup Language 5." }
        ]
    }
];

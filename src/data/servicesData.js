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
        category: "healthcare-operations",
        subtitle: "Automated Adjudication: Speed, Accuracy, Savings.",
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
        ],
        subProcesses: [
            { title: "Intake & Indexing", desc: "AI-driven OCR and data ingestion from paper or digital sources.", icon: FileText },
            { title: "Eligibility Check", desc: "Real-time verification of member benefits and coverage.", icon: Users },
            { title: "Coding & Review", desc: "Automated CPT/ICD-10 validation against policy rules.", icon: CheckCircle },
            { title: "Adjudication", desc: "Rules-based engine for payment determination.", icon: Server },
            { title: "Payment & EOB", desc: "Generation of remittances and explanation of benefits.", icon: Wallet }
        ],
        processSteps: [
            { step: 1, title: "Receive", desc: "Claims intake via EDI/paper" },
            { step: 2, title: "Validate", desc: "Auto-scrub for errors" },
            { step: 3, title: "Adjudicate", desc: "Apply benefit rules" },
            { step: 4, title: "Payment", desc: "Issue payment/remittance" },
            { step: 5, title: "Reporting", desc: "Analytics & insights" }
        ],
        // NEW: Visual Process Steps for the alternate layout
        // Premium Visual Process Steps
        processImages: [
            "/images/process/health-claims-management-step-1.jpg",
            "/images/process/health-claims-management-step-2.jpg",
            "/images/process/health-claims-management-step-3.jpg",
        ],
        visualSteps: [
            { title: "Intake & Indexing", desc: "Automated ingestion of claims via EDI or OCR, with immediate validation." },
            { title: "Smart Adjudication", desc: "AI-driven rules engine processes claims against benefit plans in real-time." },
            { title: "Payment & Reporting", desc: "Accurate remittance generation and deep-dive analytics for financial insight." }
        ],
        // NEW: Mermaid Flowchart Data
        flowchart: {
            title: "AI-Driven Claims Lifecycle",
            code: `
            graph TD
                A[Intake: EDI/Paper] -->|OCR & Validation| B{Clean Claim?}
                B -->|Yes| C[Auto-Adjudication Engine]
                B -->|No| D[Exception Queue]
                D -->|Manual Review| C
                C -->|Rules Check| E{Approved?}
                E -->|Yes| F[Payment & Remittance]
                E -->|No| G[Denial Management]
                F --> H[Reconciliation & Reporting]
                G --> H
                style A fill:#f1f5f9,stroke:#334155,stroke-width:2px
                style C fill:#dbeafe,stroke:#2563eb,stroke-width:2px
                style F fill:#dcfce7,stroke:#16a34a,stroke-width:2px
            `
        },
        // NEW: Chart Data
        charts: {
            costLimit: [
                { month: 'Jan', value: 100 }, { month: 'Feb', value: 90 }, { month: 'Mar', value: 85 },
                { month: 'Apr', value: 78 }, { month: 'May', value: 72 }, { month: 'Jun', value: 65 }
            ],
            accuracyComparison: [
                { name: 'Manual', Market: 85, CAPS: 0 },
                { name: 'Traditional BPO', Market: 92, CAPS: 0 },
                { name: 'CAPS AI', Market: 0, CAPS: 99.5 }
            ]
        },
        // NEW: Tech Stack attributes
        techStack: ["Python", "TensorFlow", "Azure Cloud", "UiPath", "React", "PostgreSQL"],
        caseStudy: {
            clientType: "Regional Health Plan",
            challenge: "High administrative costs and slow turnaround times for manual claims processing.",
            solution: "Implemented CAPS AI-driven adjudication engine with auto-validation.",
            results: [
                { metric: "40%", desc: "Reduction in processing costs" },
                { metric: "2 Days", desc: "Average turnaround time (down from 1 week)" },
                { metric: "99%", desc: "First-pass accuracy rate" }
            ]
        },
        faqs: [
            { q: "How quickly can you process claims?", a: "Our AI-driven system typically processes clean claims within 24-48 hours." },
            { q: "What claim forms do you support?", a: "We support all standard forms including CMS-1500, UB-04, and ADA dental forms." },
            { q: "Is your system HIPAA compliant?", a: "Yes, our entire platform and workforce operations are fully HIPAA compliant and SOC 2 Type II certified." }
        ],
        relatedServices: ["dental-claims-processing", "claims-adjudication", "member-management"],
        compliance: ["HIPAA", "CMS", "EDI X12", "SOC 2"],
        industryContext: "With denial rates reaching 29% and $44B wasted on admin overhead annually, efficient claims management is critical for financial health."
    },
    {
        id: "dental-claims-processing",
        title: "Dental Claims Processing",
        category: "healthcare-operations",
        subtitle: "Precision CDT Coding & Rapid Pre-Determination.",
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
        ],
        processImages: [
            "/images/process/dental-claims-processing-step-1.jpg",
            "/images/process/dental-claims-processing-step-2.jpg",
            "/images/process/dental-claims-processing-step-3.jpg",
        ],
        subProcesses: [
            { title: "Intake & Indexing", desc: "Automated ingestion of dental claims and x-rays.", icon: FileText },
            { title: "Code Validation", desc: "Immediate check against latest CDT procedure codes.", icon: CheckCircle },
            { title: "Pre-Determination", desc: "Real-time cost estimates for patients.", icon: Activity },
            { title: "Adjudication", desc: "Rules-based logic for benefit determination.", icon: Server },
            { title: "Payment", desc: "Electronic remittance and provider payment.", icon: Wallet }
        ],
        techStack: ["Python", "OpenCV", "AWS", "React", "Node.js"],
        caseStudy: {
            clientType: "Large Dental DSO",
            challenge: "High denial rates on complex restorative procedures due to coding errors.",
            solution: "Deployed CAPS automated CDT validation and pre-determination engine.",
            results: [
                { metric: "20%", desc: "Increase in net revenue" },
                { metric: "5 Days", desc: "Faster average payment cycle" },
                { metric: "95%", desc: "Pre-D accuracy" }
            ]
        },
        compliance: ["HIPAA", "ADA Compliant", "SOC 2 Type II", "PCI DSS"],
        industryContext: "Dental coding errors cost practices billions annually. Automated validation prevents revenue leakage.",
        visualSteps: [
            { title: "Intake & Code Validation", desc: "Automated ingestion of dental claims with immediate CDT-2025 code validation to prevent downstream rejections." },
            { title: "Smart Pre-Determination", desc: "Real-time analysis of benefits to provide patients with accurate out-of-pocket estimates before treatment." },
            { title: "Payment & EOB", desc: "Swift adjudication and electronic remittance generation, ensuring providers are paid correctly and on time." }
        ],
        stats: [
            { value: "99.2%", label: "Accuracy Rate" },
            { value: "24h", label: "Pre-D Turnaround" },
            { value: "15%", label: "Cost Savings" }
        ],
        charts: {
            costLimit: [
                { month: 'Jan', value: 100 }, { month: 'Feb', value: 92 }, { month: 'Mar', value: 88 },
                { month: 'Apr', value: 82 }, { month: 'May', value: 75 }, { month: 'Jun', value: 68 }
            ],
            accuracyComparison: [
                { name: 'Manual', Market: 82, CAPS: 0 },
                { name: 'Standard BPO', Market: 90, CAPS: 0 },
                { name: 'CAPS AI', Market: 0, CAPS: 99.2 }
            ],
            pieChartData: [
                { name: 'Preventive', value: 45 },
                { name: 'Restorative', value: 30 },
                { name: 'Major', value: 15 },
                { name: 'Ortho', value: 10 }
            ]
        },
        faqs: [
            { q: "Do you handle pre-determinations?", a: "Yes, we provide real-time pre-determinations to give patients accurate cost estimates before treatment." },
            { q: "How do you handle the annual CDT updates?", a: "Our system is automatically updated with the latest CDT codes every year to ensure compliance." },
            { q: "Can you process orthodontic claims?", a: "Absolutely, we have specialized workflows for complex ortho and perio treatment plans." }
        ],
        relatedServices: ["health-claims-management", "member-management", "fsa-administration"]
    },
    {
        id: "property-casualty-insurance",
        title: "P&C Insurance Support",
        category: "insurance-solutions",
        subtitle: "Accelerated FNOL & Liability Assessment.",
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
        ],
        processImages: [
            "/images/process/property-casualty-insurance-step-1.jpg",
            "/images/process/property-casualty-insurance-step-2.jpg",
            "/images/process/property-casualty-insurance-step-3.jpg",
        ],
        subProcesses: [
            { title: "FNOL Intake", desc: "Digital first notice of loss via mobile or portal.", icon: FileText },
            { title: "Fraud Detection", desc: "AI analysis of images and metadata for red flags.", icon: ShieldCheck },
            { title: "Liability Check", desc: "Automated assessment of fault and coverage.", icon: Activity },
            { title: "Adjuster Review", desc: "Expert review for complex or high-value claims.", icon: Users },
            { title: "Settlement", desc: "Rapid payout for approved property claims.", icon: Wallet }
        ],
        techStack: ["TensorFlow", "Google Cloud Vision", "Python", "Tableau", "Guidewire API"],
        caseStudy: {
            clientType: "National Auto Insurer",
            challenge: "Slow FNOL processes and rising soft fraud costs.",
            solution: "Implemented AI-driven intake and fraud detection protocols.",
            results: [
                { metric: "50%", desc: "Reduction in FNOL cycle time" },
                { metric: "12%", desc: "Reduction in fraudulent payouts" },
                { metric: "4.5/5", desc: "Customer satisfaction score" }
            ]
        },
        compliance: ["GDPR", "ISO 27001", "SOC 2", "State Dept of Ins."],
        industryContext: "Speed is the #1 driver of satisfaction in P&C. Delayed settlements increase churn and litigation risk.",
        visualSteps: [
            { title: "Digital FNOL Intake", desc: "Mobile-first reporting allows policyholders to submit First Notice of Loss instantly with photos and location data." },
            { title: "AI Liability Analysis", desc: "Our Liability Shield analytics assess fault and fraud risk in real-time, triaging complex claims to senior adjusters." },
            { title: "Rapid Settlement", desc: "Automated payouts for clear-liability claims, reducing cycle time and improving customer satisfaction." }
        ],
        stats: [
            { value: "50%", label: "Faster FNOL" },
            { value: "30%", label: "Litigation Drop" },
            { value: "95%", label: "Fraud Detection" }
        ],
        charts: {
            costLimit: [
                { month: 'Jan', value: 100 }, { month: 'Feb', value: 95 }, { month: 'Mar', value: 88 },
                { month: 'Apr', value: 80 }, { month: 'May', value: 70 }, { month: 'Jun', value: 60 }
            ],
            accuracyComparison: [
                { name: 'Manual', Market: 75, CAPS: 0 },
                { name: 'Legacy IT', Market: 85, CAPS: 0 },
                { name: 'CAPS AI', Market: 0, CAPS: 98 }
            ],
            pieChartData: [
                { name: 'Property', value: 40 },
                { name: 'Auto', value: 35 },
                { name: 'Liability', value: 15 },
                { name: 'Workers Comp', value: 10 }
            ]
        },
        faqs: [
            { q: "Can you integrate with our existing FNOL tool?", a: "Yes, we have API connectors for most major policy admin systems and FNOL apps." },
            { q: "How fast is the turnaround for property claims?", a: "Simple property claims can be settled in as little as 24 hours with our virtual desk." },
            { q: "Do you handle subrogation?", a: "Yes, our liability team actively identifies and pursues subrogation opportunities." }
        ],
        relatedServices: ["claims-adjudication", "it-co-management", "data-conversions"]
    },
    {
        id: "member-management",
        title: "Member Management",
        category: "healthcare-operations",
        subtitle: "Enrollment & Engagement: Seamless Member Journeys.",
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
        ],
        processImages: [
            "/images/process/member-management-step-1.jpg",
            "/images/process/member-management-step-2.jpg",
            "/images/process/member-management-step-3.jpg",
        ],
        subProcesses: [
            { title: "Enrollment", desc: "Paperless onboarding and verified data capture.", icon: FileText },
            { title: "Eligibility Sync", desc: "Real-time updates to payer and provider systems.", icon: Database },
            { title: "Portal Access", desc: "SSO enable access to benefits and ID cards.", icon: Monitor },
            { title: "Engagement", desc: "Proactive health reminders and alerts.", icon: Activity },
            { title: "Support", desc: "AI chatbot and live agent integration.", icon: Users }
        ],
        techStack: ["React Native", "Node.js", "Firebase", "Twilio", "Salesforce"],
        caseStudy: {
            clientType: "Regional Health Plan",
            challenge: "High call center volume for basic eligibility and ID card requests.",
            solution: "Launched self-service member portal and mobile app.",
            results: [
                { metric: "30%", desc: "Reduction in call volume" },
                { metric: "4.8/5", desc: "App Store rating" },
                { metric: "85%", desc: "Digital adoption rate" }
            ]
        },
        compliance: ["HIPAA", "WCAG 2.1 (A11y)", "SOC 2", "HITECH"],
        industryContext: "Modern members expect a retail-like digital experience. Friction in enrollment drives member churn.",
        visualSteps: [
            { title: "Seamless Enrollment", desc: "Paperless, wizard-driven onboarding that captures all necessary data and creates digital IDs instantly." },
            { title: "Member Portal Access", desc: "Members gain 24/7 access to benefits, claims status, and telehealth via a unified, branded dashboard." },
            { title: "Proactive Engagement", desc: "AI-driven prompts remind members of check-ups and preventative care, boosting health outcomes." }
        ],
        stats: [
            { value: "30%", label: "Fewer Calls" },
            { value: "4.8/5", label: "Member Sat." },
            { value: "100%", label: "Digital IDs" }
        ],
        charts: {
            costLimit: [
                { month: 'Jan', value: 100 }, { month: 'Feb', value: 90 }, { month: 'Mar', value: 82 },
                { month: 'Apr', value: 75 }, { month: 'May', value: 68 }, { month: 'Jun', value: 60 }
            ],
            accuracyComparison: [
                { name: 'Paper', Market: 60, CAPS: 0 },
                { name: 'Basic Web', Market: 80, CAPS: 0 },
                { name: 'CAPS Portal', Market: 0, CAPS: 98 }
            ],
            pieChartData: [
                { name: 'Mobile App', value: 55 },
                { name: 'Web Portal', value: 30 },
                { name: 'Call Center', value: 10 },
                { name: 'Paper', value: 5 }
            ]
        },
        faqs: [
            { q: "Is there a mobile app for members?", a: "Yes, we offer a white-labeled mobile app for iOS and Android." },
            { q: "Can members print their own ID cards?", a: "Yes, members can view, print, or email digital ID cards instantly from the portal." },
            { q: "Do you support Spanish language?", a: "Our portal and support center are fully bilingual (English/Spanish)." }
        ],
        relatedServices: ["fsa-administration", "health-claims-management", "modern-legacy-web-wrapper"]
    },
    {
        id: "provider-management",
        title: "Provider Management",
        category: "healthcare-operations",
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
        ],
        processImages: [
            "/images/process/provider-management-step-1.jpg",
            "/images/process/provider-management-step-2.jpg",
            "/images/process/provider-management-step-3.jpg",
        ],
        subProcesses: [
            { title: "Application Intake", desc: "Digital provider portal for document upload.", icon: FileText },
            { title: "Primary Verification", desc: "Automated checks against boards and education.", icon: CheckCircle },
            { title: "Sanctions Check", desc: "Monthly screen against OIG/SAM lists.", icon: ShieldCheck },
            { title: "Committee Review", desc: "Streamlined workflow for medical director sign-off.", icon: Users },
            { title: "Roster Update", desc: "Real-time sync to provider directories.", icon: Database }
        ],
        techStack: ["UiPath", "Salesforce Health Cloud", "Python", "Tableau", "MuleSoft"],
        caseStudy: {
            clientType: "State Medicaid Plan",
            challenge: "Failed consecutive audits due to inaccurate provider rosters and missing PSV.",
            solution: "Implemented CAPS continuous monitoring and automated credentialing.",
            results: [
                { metric: "100%", desc: "Audit pass rate" },
                { metric: "0", desc: "Sanction misses" },
                { metric: "10 Days", desc: "Avg credentialing time" }
            ]
        },
        compliance: ["NCQA Accredited", "URAC", "CMS", "OIG Compliant"],
        industryContext: "Provider data decays at 2% per month. Static directories lead to surprise billing and heavy fines.",
        visualSteps: [
            { title: "Application Intake", desc: "Providers submit data once via a centralized portal, eliminating redundant paperwork and errors." },
            { title: "Automated PSV", desc: "Bots instantly verify licenses, DEA, and board certifications against primary sources." },
            { title: "Continuous Monitoring", desc: "Monthly automated sweeps of OIG/SAM lists ensure ongoing compliance without manual effort." }
        ],
        stats: [
            { value: "10 Days", label: "Credentialing" },
            { value: "100%", label: "Audit Pass" },
            { value: "0", label: "Sanction Misses" }
        ],
        charts: {
            costLimit: [
                { month: 'Jan', value: 100 }, { month: 'Feb', value: 85 }, { month: 'Mar', value: 75 },
                { month: 'Apr', value: 65 }, { month: 'May', value: 55 }, { month: 'Jun', value: 45 }
            ],
            accuracyComparison: [
                { name: 'Manual', Market: 70, CAPS: 0 },
                { name: 'SaaS Tool', Market: 85, CAPS: 0 },
                { name: 'CAPS Auto', Market: 0, CAPS: 99.9 }
            ],
            pieChartData: [
                { name: 'MD/DO', value: 40 },
                { name: 'RN/NP/PA', value: 35 },
                { name: 'Specialists', value: 15 },
                { name: 'Facility', value: 10 }
            ]
        },
        faqs: [
            { q: "How often does monitoring occur?", a: "We perform automated checks monthly against all primary sources (OIG, SAM, licensing boards)." },
            { q: "Is this NCQA compliant?", a: "Yes, our process is built to meet and exceed NCQA and URAC credentialing standards." },
            { q: "How fast is the turnaround?", a: "We typically complete primary source verification within 7-10 days, compared to the industry average of 45+ days." }
        ],
        relatedServices: ["health-claims-management", "member-management", "it-support-co-management"]
    },
    {
        id: "fsa-administration",
        title: "FSA Administration",
        category: "healthcare-operations",
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
        ],
        processImages: [
            "/images/process/fsa-administration-step-1.jpg",
            "/images/process/fsa-administration-step-2.jpg",
            "/images/process/fsa-administration-step-3.jpg",
        ],
        subProcesses: [
            { title: "Transaction", desc: "Debit card swipe at point-of-sale.", icon: Wallet },
            { title: "AI Validation", desc: "Real-time check of merchant and product codes.", icon: Server },
            { title: "Receipt Match", desc: "Mobile app snap-and-match for unverified swipes.", icon: FileText },
            { title: "Reimbursement", desc: "ACH transfer for out-of-pocket claims.", icon: Activity },
            { title: "Tax Reporting", desc: "Automated generation of IRS forms.", icon: CheckCircle }
        ],
        techStack: ["Azure AI", "React Native", "SQL Server", "Mastercard API", ".NET Core"],
        caseStudy: {
            clientType: "Tech Enterprise (5k Employees)",
            challenge: "Low FSA adoption and high HR burden from manual receipt reviews.",
            solution: "Rolled out CAPS Smart Substantiation debit cards and mobile app.",
            results: [
                { metric: "20%", desc: "Increase in participation" },
                { metric: "85%", desc: "Auto-substantiation rate" },
                { metric: "$100k", desc: "Payroll tax savings" }
            ]
        },
        compliance: ["IRS Sec 125", "HIPAA", "PCI DSS", "ERISA"],
        industryContext: "Employees leave $3B in FSA funds on the table annually due to complex substantiation rules.", visualSteps: [
            { title: "Swipe & Capture", desc: "Employees use debit cards for eligible expenses or snap photos of receipts via mobile app." },
            { title: "Smart Substantiation", desc: "AI analyzes transaction data and receipts to auto-approve eligible expenses instantly." },
            { title: "Reimbursement", desc: "Approved funds are released immediately, or denied claims are flagged with clear instructions." }
        ],
        stats: [
            { value: "85%", label: "Auto-Approval" },
            { value: "20%", label: "Higher Participation" },
            { value: "100%", label: "IRS Compliant" }
        ],
        charts: {
            costLimit: [
                { month: 'Jan', value: 100 }, { month: 'Feb', value: 95 }, { month: 'Mar', value: 90 },
                { month: 'Apr', value: 85 }, { month: 'May', value: 80 }, { month: 'Jun', value: 75 }
            ],
            accuracyComparison: [
                { name: 'Manual', Market: 65, CAPS: 0 },
                { name: 'Outsourced', Market: 80, CAPS: 0 },
                { name: 'CAPS AI', Market: 0, CAPS: 99 }
            ],
            pieChartData: [
                { name: 'Auto-Approved', value: 85 },
                { name: 'Receipt Review', value: 10 },
                { name: 'Ineligible', value: 3 },
                { name: 'More Info', value: 2 }
            ]
        },
        faqs: [
            { q: "What is smart substantiation?", a: "It's our AI technology that automatically verifies card transactions without needing a receipt." },
            { q: "Is there a debit card included?", a: "Yes, every participant receives a CAPS benefits debit card." },
            { q: "How do you handle the Carryover rule?", a: "We fully support the $640 carryover (indexed for inflation) automatically." }
        ],
        relatedServices: ["member-management", "health-claims-management", "modern-legacy-web-wrapper"]
    },
    {
        id: "data-conversions",
        title: "Data Conversions",
        category: "technology-services",
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
        ],
        processImages: [
            "/images/process/data-conversions-step-1.jpg",
            "/images/process/data-conversions-step-2.jpg",
            "/images/process/data-conversions-step-3.jpg",
        ],
        subProcesses: [
            { title: "Extraction", desc: "Pulling data from legacy mainframes/SQL.", icon: Database },
            { title: "Mapping", desc: "Translating schema to target standard (FHIR).", icon: GitMerge },
            { title: "Cleansing", desc: "Deduplication and error correction.", icon: CheckCircle },
            { title: "Enrichment", desc: "Adding missing NPI or zip code data.", icon: Activity },
            { title: "Loading", desc: "Secure import into new platform.", icon: Server }
        ],
        techStack: ["Informatica", "Python", "Hadoop", "FHIR Server", "AWS Glue"],
        caseStudy: {
            clientType: "Multi-Hospital System",
            challenge: "Merging 3 disparate EMR systems into a single Epic instance.",
            solution: "Deployed automated ETL pipeline with clinical data validation.",
            results: [
                { metric: "50TB", desc: "Data migrated with 0 loss" },
                { metric: "100%", desc: "Patient record integrity" },
                { metric: "On Time", desc: "Launch achieved" }
            ]
        },
        compliance: ["HIPAA", "HITECH", "GDPR", "HL7 Compliance"],
        industryContext: "Legacy data migration fails 40% of the time. Data integrity is non-negotiable in healthcare transitions.",
        visualSteps: [
            { title: "Secure Extraction", desc: "Safe decoding of data from mainframe and obsolete SQL architectures without disrupting ongoing operations." },
            { title: "Transformation & Cleansing", desc: "Mapping proprietary formats to interoperable industry standards (FHIR) while removing duplicates and errors." },
            { title: "Validation & Loading", desc: "Rigorous testing of every record against the new schema to guarantee 100% data integrity upon go-live." }
        ],
        stats: [
            { value: "100%", label: "Data Integrity" },
            { value: "50TB+", label: "Migrated" },
            { value: "0", label: "Downtime" }
        ],
        charts: {
            costLimit: [
                { month: 'Jan', value: 100 }, { month: 'Feb', value: 80 }, { month: 'Mar', value: 60 },
                { month: 'Apr', value: 40 }, { month: 'May', value: 20 }, { month: 'Jun', value: 0 }
            ],
            accuracyComparison: [
                { name: 'Manual', Market: 80, CAPS: 0 },
                { name: 'Scripted', Market: 90, CAPS: 0 },
                { name: 'CAPS Engine', Market: 0, CAPS: 100 }
            ],
            pieChartData: [
                { name: 'Clinical', value: 40 },
                { name: 'Claims', value: 35 },
                { name: 'Provider', value: 15 },
                { name: 'Financial', value: 10 }
            ]
        },
        faqs: [
            { q: "Do you support FHIR standards?", a: "Yes, we specialize in mapping legacy data to the latest FHIR resources." },
            { q: "How long does a typical migration take?", a: "Timelines vary, but we often complete migrations 40% faster than internal teams." },
            { q: "Is the data secure during transit?", a: "We use military-grade encryption for all data in transit and at rest." }
        ],
        relatedServices: ["modern-legacy-web-wrapper", "it-co-management", "consulting-restructuring"]
    },
    {
        id: "consulting-restructuring",
        title: "Consulting for Dept. Restructuring",
        category: "consulting-advisory",
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
        ],
        processImages: [
            "/images/process/consulting-restructuring-step-1.jpg",
            "/images/process/consulting-restructuring-step-2.jpg",
            "/images/process/consulting-restructuring-step-3.jpg",
        ],
        subProcesses: [
            { title: "Discovery", desc: "Stakeholder interviews and data gathering.", icon: FileText },
            { title: "Workflow Mapping", desc: "Visualizing current vs. future state processes.", icon: Activity },
            { title: "Org Redesign", desc: "Structuring roles for efficiency and clarity.", icon: GitMerge },
            { title: "Change Mgmt", desc: "Training and communication to ensure adoption.", icon: Users },
            { title: "Monitoring", desc: "Tracking KPIs to validate improvements.", icon: Monitor }
        ],
        techStack: ["Celonis", "Visio", "Tableau", "PowerBI", "Jira"],
        caseStudy: {
            clientType: "Academic Medical Center",
            challenge: "Bloated administrative structure following a rapid merger.",
            solution: "Data-driven reorganization of Revenue Cycle and IT departments.",
            results: [
                { metric: "$5M", desc: "Annual operational savings" },
                { metric: "15%", desc: "Faster decision-making loops" },
                { metric: "90%", desc: "Key talent retention" }
            ]
        },
        compliance: ["Labor Laws", "HIPAA", "JCAHO Standards"],
        industryContext: "Healthcare margins are under siege. Survival requires operational agility, not just cost cutting.",
        visualSteps: [
            { title: "Assessment & Analysis", desc: "Deep dive into current workforce distribution and workflows to identify bottlenecks and redundancies." },
            { title: "Strategy Development", desc: "Collaborative design of a new organizational structure that aligns human capital with strategic goals." },
            { title: "Implementation & Monitoring", desc: "Guided execution of the restructuring plan with change management support to ensure adoption." }
        ],
        stats: [
            { value: "25%", label: "Efficiency Gain" },
            { value: "15%", label: "Cost Reduction" },
            { value: "90%", label: "Staff Retention" }
        ],
        charts: {
            costLimit: [
                { month: 'Jan', value: 100 }, { month: 'Feb', value: 95 }, { month: 'Mar', value: 90 },
                { month: 'Apr', value: 85 }, { month: 'May', value: 80 }, { month: 'Jun', value: 75 }
            ],
            accuracyComparison: [
                { name: 'Pre-Consult', Market: 60, CAPS: 0 },
                { name: 'Avg Reform', Market: 75, CAPS: 0 },
                { name: 'CAPS Model', Market: 0, CAPS: 95 }
            ],
            pieChartData: [
                { name: 'Operations', value: 40 },
                { name: 'IT/Tech', value: 25 },
                { name: 'Sales/Mktg', value: 20 },
                { name: 'Admin', value: 15 }
            ]
        },
        faqs: [
            { q: "How long is a typical engagement?", a: "Engagements typically range from 3 to 6 months depending on scope." },
            { q: "Do you only recommend layoffs?", a: "No, our primary goal is efficiency, which often means retraining and role realignment, not just cuts." },
            { q: "Do you help with implementation?", a: "Yes, we don't just deliver a report; we stay to help execute the changes." }
        ],
        relatedServices: ["it-co-management", "claims-adjudication", "claims-management-system-reseller"]
    },
    {
        id: "it-support-co-management",
        title: "IT Support Co-management",
        category: "technology-services",
        subtitle: "Uptime Assurance: Your Extended IT Workbench.",
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
        ],
        processImages: [
            "/images/process/it-support-co-management-step-1.jpg",
            "/images/process/it-support-co-management-step-2.jpg",
            "/images/process/it-support-co-management-step-3.jpg",
        ],
        subProcesses: [
            { title: "Assess & Onboard", desc: "Gap analysis and secure tool deployment.", icon: CheckCircle },
            { title: "Network Monitor", desc: "24/7 eyes on up/down status.", icon: Monitor },
            { title: "Threat Hunting", desc: "Proactive search for hidden IOCs.", icon: ShieldCheck },
            { title: "Patch Mgmt", desc: "Automated updates for server health.", icon: Server },
            { title: "Helpdesk Esc.", desc: "Level 2/3 support for complex tickets.", icon: Users }
        ],
        techStack: ["CrowdStrike", "Splunk", "Azure Sentinel", "ServiceNow", "Cisco Meraki"],
        caseStudy: {
            clientType: "Rural Hospital Network",
            challenge: "Frequent downtime and lack of 24/7 security monitoring.",
            solution: "Implemented Co-managed model with CAPS SOC/NOC.",
            results: [
                { metric: "99.99%", desc: "Uptime achieved" },
                { metric: "15 Min", desc: "Avg threat response time" },
                { metric: "30%", desc: "IT budget savings" }
            ]
        },
        compliance: ["HIPAA Security Rule", "NIST CSF", "SOC 2 Type II"],
        industryContext: "Cyberattacks on healthcare are up 45%. Internal teams are overwhelmed. We are your shield.",
        visualSteps: [
            { title: "Onboarding & Integration", desc: "Seamless connection of our expert teams with your internal IT, establishing secure access and protocols." },
            { title: "24/7 Monitoring", desc: "Continuous surveillance of critical infrastructure, ensuring rapid detection of anomalies or threats." },
            { title: "Proactive Resolution", desc: "Issues are resolved before they impact users, with detailed reporting on system health and security." }
        ],
        stats: [
            { value: "99.99%", label: "Uptime" },
            { value: "15min", label: "Response Time" },
            { value: "0", label: "Breaches" }
        ],
        charts: {
            costLimit: [
                { month: 'Jan', value: 100 }, { month: 'Feb', value: 90 }, { month: 'Mar', value: 80 },
                { month: 'Apr', value: 70 }, { month: 'May', value: 60 }, { month: 'Jun', value: 50 }
            ],
            accuracyComparison: [
                { name: 'Internal', Market: 95, CAPS: 0 },
                { name: 'MSP', Market: 98, CAPS: 0 },
                { name: 'Co-Managed', Market: 0, CAPS: 99.99 }
            ],
            pieChartData: [
                { name: 'User Support', value: 50 },
                { name: 'Security', value: 20 },
                { name: 'Network', value: 15 },
                { name: 'Projects', value: 15 }
            ]
        },
        faqs: [
            { q: "Do you replace our internal IT team?", a: "No, we co-manage. We handle the heavy lifting (backend/security) so your team can focus on users." },
            { q: "Is support available 24/7?", a: "Yes, our NOC and Security Operations Center operate 24/7/365." },
            { q: "Do you support remote workers?", a: "Yes, we provide secure VPN and remote desktop solutions for distributed teams." }
        ],
        relatedServices: ["data-conversions", "modern-legacy-web-wrapper", "consulting-restructuring"]
    },
    {
        id: "claims-adjudication-services",
        title: "Claims Adjudication Services",
        category: "healthcare-operations",
        subtitle: "Backlog Busting: Scalable Adjudication Teams.",
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
        ],
        processImages: [
            "/images/process/claims-adjudication-services-step-1.jpg",
            "/images/process/claims-adjudication-services-step-2.jpg",
            "/images/process/claims-adjudication-services-step-3.jpg",
        ],
        subProcesses: [
            { title: "Intake", desc: "Digital receipt of pended claims.", icon: FileText },
            { title: "Med Review", desc: "Clinical analysis by nurses/coders.", icon: Activity },
            { title: "Policy Check", desc: "Verification against benefit terms.", icon: CheckCircle },
            { title: "Determination", desc: "Final open/pay/deny decision.", icon: Server },
            { title: "QA Audit", desc: "Random sampling for quality control.", icon: ShieldCheck }
        ],
        techStack: ["Facets", "QNXT", "HealthEdge", "Pega", "OnBase"],
        caseStudy: {
            clientType: "TPA for Self-Insured",
            challenge: "50k claim backlog after rapid enrollment growth.",
            solution: "Deployed 25-person adjudication team in 2 weeks.",
            results: [
                { metric: "45 Days", desc: "Backlog cleared" },
                { metric: "99.5%", desc: "Payment accuracy" },
                { metric: "Flexible", desc: "Staffing model" }
            ]
        },
        compliance: ["HIPAA", "DOL Guidelines", "SOC 2 Type II", "URAC"],
        industryContext: "Claims backlogs create compliance risks and dissatisfied members. Flexible staffing is the cure.",
        visualSteps: [
            { title: "Claims Intake", desc: "Secure receipt of pended or complex claims directly from your adjudication platform." },
            { title: "Expert Manual Review", desc: "Experienced examiners review medical records and policy documents to determine liability." },
            { title: "Final Determination", desc: "Accurate payment or denial decisions are entered directly into your system, clearing the backlog." }
        ],
        stats: [
            { value: "99.5%", label: "Accuracy" },
            { value: "2 Days", label: "Turnaround" },
            { value: "40%", label: "Cost Savings" }
        ],
        charts: {
            costLimit: [
                { month: 'Jan', value: 100 }, { month: 'Feb', value: 80 }, { month: 'Mar', value: 60 },
                { month: 'Apr', value: 40 }, { month: 'May', value: 20 }, { month: 'Jun', value: 10 }
            ],
            accuracyComparison: [
                { name: 'Temp Staff', Market: 92, CAPS: 0 },
                { name: 'Internal', Market: 95, CAPS: 0 },
                { name: 'CAPS Team', Market: 0, CAPS: 99.5 }
            ],
            pieChartData: [
                { name: 'Complex Med', value: 45 },
                { name: 'Appeals', value: 25 },
                { name: 'COB', value: 20 },
                { name: 'Eligibility', value: 10 }
            ]
        },
        faqs: [
            { q: "What is your average turnaround time?", a: "We typically turn around claims within 2 business days." },
            { q: "Are your adjusters US-based?", a: "We have both domestic and global delivery centers to match your budget and requirements." },
            { q: "How do you ensure quality?", a: "Every claim goes through a 2-tier review process, and we audit 10% of all finalized claims." }
        ],
        relatedServices: ["health-claims-management", "dental-claims-processing", "claims-management-system-reseller"]
    },
    {
        id: "claims-management-system-reseller",
        title: "Claims Management System Reseller",
        category: "technology-services",
        subtitle: "Best-in-Class Tech: Platforms That Power Growth.",
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
        ],
        processImages: [
            "/images/process/claims-management-system-reseller-step-1.jpg",
            "/images/process/claims-management-system-reseller-step-2.jpg",
            "/images/process/claims-management-system-reseller-step-3.jpg",
        ],
        subProcesses: [
            { title: "Needs Analysis", desc: "Matching requirements to platform features.", icon: FileText },
            { title: "Licensing", desc: "Negotiating volume-based contracts.", icon: CheckCircle },
            { title: "Config", desc: "Customizing rules and workflows.", icon: Server },
            { title: "Data Migration", desc: "Importing historical claims history.", icon: Database },
            { title: "Training", desc: "Workshops for end-user adoption.", icon: Users }
        ],
        techStack: ["Oracle Health", "Salesforce", "MuleSoft", "AWS", "Azure"],
        caseStudy: {
            clientType: "Startup Health Plan",
            challenge: "Need for a scalable core admin system in 4 months.",
            solution: "Resold and implemented cloud-native CMS with rapid config.",
            results: [
                { metric: "3.5 Mos", desc: "Time to go-live" },
                { metric: "40%", desc: "Savings vs Direct" },
                { metric: "100%", desc: "Compliance ready" }
            ]
        },
        compliance: ["HIPAA", "HITECH", "ISO 27001", "NIST"],
        industryContext: "Buying enterprise software is risky. Implementation failure happens in 30% of projects.",
        visualSteps: [
            { title: "Requirements Analysis", desc: "We audit your workflows to identify the ideal Claims Management System for your specific needs." },
            { title: "System Configuration", desc: "Our architects configure the platform, migrating data and setting up business rules for day-one readiness." },
            { title: "Go-Live & Support", desc: "Structured launch with ongoing training ensures your team adopts the new system smoothly." }
        ],
        stats: [
            { value: "3 Months", label: "Avg Go-Live" },
            { value: "100%", label: "User Adoption" },
            { value: "20%", label: "License Savings" }
        ],
        charts: {
            costLimit: [
                { month: 'Jan', value: 100 }, { month: 'Feb', value: 90 }, { month: 'Mar', value: 80 },
                { month: 'Apr', value: 70 }, { month: 'May', value: 60 }, { month: 'Jun', value: 50 }
            ],
            accuracyComparison: [
                { name: 'Self-Impl', Market: 60, CAPS: 0 },
                { name: 'VendorDirect', Market: 80, CAPS: 0 },
                { name: 'CAPS Partner', Market: 0, CAPS: 95 }
            ],
            pieChartData: [
                { name: 'Software', value: 40 },
                { name: 'Impl Services', value: 30 },
                { name: 'Training', value: 20 },
                { name: 'Support', value: 10 }
            ]
        },
        faqs: [
            { q: "Which platforms do you resell?", a: "We partner with leading platforms like Facets, QNXT, and HealthEdge." },
            { q: "Do you provide training?", a: "Yes, comprehensive training for your staff is included in every implementation." },
            { q: "Can we migrate our old data?", a: "Yes, our Data Conversion team can migrate your history to the new platform." }
        ],
        relatedServices: ["data-conversions", "claims-adjudication", "consulting-restructuring"]
    },
    {
        id: "modern-legacy-web-wrapper",
        title: "Modern Web Wrapper for Legacy",
        category: "technology-services",
        subtitle: "UX Facelift: Modernizing Mainframes without Migration.",
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
        ],
        processImages: [
            "/images/process/modern-legacy-web-wrapper-step-1.jpg",
            "/images/process/modern-legacy-web-wrapper-step-2.jpg",
            "/images/process/modern-legacy-web-wrapper-step-3.jpg",
        ],
        subProcesses: [
            { title: "Scraper Setup", desc: "Connecting to mainframe sessions.", icon: Server },
            { title: "API Mapping", desc: "Translating screen fields to JSON.", icon: GitMerge },
            { title: "UI Design", desc: "Creating modern React components.", icon: Monitor },
            { title: "Build", desc: "Developing the single page app.", icon: Activity },
            { title: "Deploy", desc: "Secure hosting and access control.", icon: CheckCircle }
        ],
        techStack: ["React", "Node.js", "GraphQL", "Legacy Scrapers", "Docker"],
        caseStudy: {
            clientType: "National Dental Plan",
            challenge: "Call center slowed by complex mainframe green screens.",
            solution: "Modern Web Wrapper for Member Service Reps.",
            results: [
                { metric: "50%", desc: "Reduced training time" },
                { metric: "20%", desc: "Faster call handling" },
                { metric: "100%", desc: "Data accuracy" }
            ]
        },
        compliance: ["Section 508", "HIPAA", "WCAG 2.1", "SOC 2"],
        industryContext: "Green screens kill productivity. Modern UI/UX extends system life by 10+ years.",
        visualSteps: [
            { title: "API/Scraper Connect", desc: "We securely interface with your legacy backend using non-invasive APIs or screen-scraping technology." },
            { title: "UI Generation", desc: "A modern, responsive web interface is generated, providing a clean user experience over the old data." },
            { title: "Deploy & Access", desc: "Users access the new dashboard via any web browser, enabling remote work without VPN headaches." }
        ],
        stats: [
            { value: "4 Weeks", label: "To Launch" },
            { value: "50%", label: "Training Reduction" },
            { value: "100%", label: "Mobile Ready" }
        ],
        charts: {
            costLimit: [
                { month: 'Jan', value: 100 }, { month: 'Feb', value: 80 }, { month: 'Mar', value: 60 },
                { month: 'Apr', value: 40 }, { month: 'May', value: 20 }, { month: 'Jun', value: 10 }
            ],
            accuracyComparison: [
                { name: 'Green Screen', Market: 40, CAPS: 0 },
                { name: 'Rewrite', Market: 80, CAPS: 0 },
                { name: 'Wrapper', Market: 0, CAPS: 95 }
            ],
            pieChartData: [
                { name: 'Desktop', value: 60 },
                { name: 'Tablet', value: 25 },
                { name: 'Mobile', value: 15 },
                { name: 'Terminal', value: 0 }
            ]
        },
        faqs: [
            { q: "Does this replace our mainframe?", a: "No, it sits on top of it. Your backend logic remains untouched." },
            { q: "Is it secure?", a: "Yes, we use secure APIs and banking-grade encryption to pass data to the web interface." },
            { q: "Does it work on mobile?", a: "Yes, the new interface is fully responsive and works on tablets and phones." }
        ],
        relatedServices: ["data-conversions", "it-co-management", "member-management"]

    }
];
// Force HMR Refresh 2

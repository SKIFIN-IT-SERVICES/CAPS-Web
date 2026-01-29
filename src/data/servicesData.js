import healthImg from '../assets/images/health_claims_1769508347659.png';
import dentalImg from '../assets/images/dental_claims_1769508502905.png';
import pncImg from '../assets/images/pnc_insurance_1769508676533.png';
import memberImg from '../assets/images/members_management_1769508885858.png';
import providerImg from '../assets/images/provider_management_1769508987089.png';
import fsaImg from '../assets/images/fsa_account_1769509124084.png';
import { Activity, ClipboardList, ShieldCheck, Users, Wallet, FileText } from 'lucide-react';

export const servicesData = [
    {
        id: "claims",
        title: "Health Claims Management",
        subtitle: "The AI-Driven Lifecycle: Precision, Speed, and Revenue Integrity.",
        icon: Activity,
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
        ]
    },
    {
        id: "dental",
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
        ]
    },
    {
        id: "pnc",
        title: "P&C Insurance",
        subtitle: "Asset & Liability Mastery: Digital-First Risk Resolution.",
        icon: ShieldCheck,
        image: pncImg,
        shortDesc: "Rapid Digital FNOL intake and AI-driven liability analytics. Protect assets and settle claims faster with data-backed confidence.",
        fullDesc: [
            "In Property & Casualty, every hour of delay increases costs. Our Digital-First intake reduces First-Notice-of-Loss (FNOL) cycle times by up to 50%. Whether it's storm damage or theft, we facilitate rapid assessment to settle property claims with speed and empathy.",
            "For liability management, we deploy advanced analytics to protect your bottom line. Our 'Liability Shield' protocols assess risks early, helping you avoid 'nuclear verdicts' in complex litigation by identifying fair settlement values quickly using historical data.",
            "We also leverage next-gen fraud detection. Our systems analyze patterns to flag digitally altered evidence or inconsistent statements, ensuring that you only pay legitimate claims while aggressively defending against abuse."
        ],
        features: [
            { title: "Digital FNOL Intake", desc: "Mobile-first reporting reduces initial processing time by 50%." },
            { title: "Liability Shield", desc: "Analytics to assess litigation risk and optimize settlements." },
            { title: "Virtual Adjuster Desk", desc: "Remote image assessment for faster property claim resolution." },
            { title: "Fraud Defense", desc: "AI detection of manipulated images and suspicious patterns." }
        ]
    },
    {
        id: "members",
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
        ]
    },
    {
        id: "provider",
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
        ]
    },
    {
        id: "fsa",
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
        ]
    }
];

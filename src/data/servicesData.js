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
        subtitle: "Accuracy, Speed, and Compliance in Every Claim.",
        icon: Activity,
        image: healthImg,
        shortDesc: "Accurate submission, processing, and payment of healthcare claims with verification and adjudication.",
        fullDesc: [
            "Our Health Claims Management service is designed to streamline the complex lifecycle of medical claims. From initial submission to final adjudication, we ensure every step is handled with precision to minimize denials and accelerate reimbursement.",
            "We leverage advanced algorithms and expert review to verify patient eligibility, validate medical necessity, and ensure compliance with the latest payer policies. This comprehensive approach reduces administrative burden and financial leakage.",
            "Whether it's fee-for-service or value-based care models, our system adapts to your specific needs, providing transparency and actionable insights into your claims data."
        ],
        features: [
            { title: "Automated Adjudication", desc: "Real-time processing rules to auto-approve clean claims instantly." },
            { title: "Eligibility Verification", desc: "Start-of-care checks to prevent coverage-related denials." },
            { title: "Fraud Detection", desc: "AI-driven pattern recognition to flag anomalies and prevent abuse." },
            { title: "Payment Integrity", desc: "Ensuring accurate reimbursement rates based on contract terms." }
        ]
    },
    {
        id: "dental",
        title: "Dental Claims Processing",
        subtitle: "Specialized Handling for Dental Procedures.",
        icon: ClipboardList,
        image: dentalImg,
        shortDesc: "Specialized handling of dental procedures, benefit verification, and pre-determination.",
        fullDesc: [
            "Dental claims require a unique set of codes and clinical understanding. our specialized processing unit is trained specifically in CDT codes and dental anatomy to ensure accurate adjudication.",
            "We handle everything from routine cleanings to complex oral surgeries. Our system integrates pre-determination of benefits, allowing patients and providers to know costs upfront, which significantly improves collection rates and patient satisfaction.",
            "By automating the review of x-rays and periodontal charts where possible, we reduce the turnaround time for approvals and payments."
        ],
        features: [
            { title: "Tooth Charting Integration", desc: "Visual verification of procedures against patient history." },
            { title: "Pre-Determination", desc: "Fast cost estimates for major restorative work." },
            { title: "Benefit Coordination", desc: "Managing primary and secondary dental insurance overlap." },
            { title: "CDT Code Updates", desc: "Always current with the latest ADA coding standards." }
        ]
    },
    {
        id: "pnc",
        title: "P&C Insurance",
        subtitle: "Protecting Assets and Mitigating Liability.",
        icon: ShieldCheck,
        image: pncImg,
        shortDesc: "Coverage for physical assets and liability protection against accidents and damages.",
        fullDesc: [
            "Property and Casualty insurance management requires a swift response to incidents. Our solution integrates claims intake, policy verification, and liability assessment into a seamless workflow.",
            "For property claims, we facilitate rapid damage assessment and contractor dispatch. For casualty and liability, we focus on evidence gathering and accurate reserve setting to protect financial stability.",
            "Our platform supports robust subrogation efforts, helping you recover costs where third parties are liable, effectively lowering your overall loss ratio."
        ],
        features: [
            { title: "Rapid FNOL", desc: "First Notice of Loss digital intake for immediate action." },
            { title: "Liability Assessment", desc: "Tools to determine fault and coverage limits quickly." },
            { title: "Subrogation Support", desc: "Automated identification of recovery opportunities." },
            { title: "Vendor Management", desc: "Direct connection to repair networks and adjusters." }
        ]
    },
    {
        id: "members",
        title: "Member Management",
        subtitle: "Empowering Enrollees with Seamless Service.",
        icon: Users,
        image: memberImg,
        shortDesc: "Enrolment, billing, and full lifecycle management for health plan members.",
        fullDesc: [
            "The member experience is the heart of any health plan. Our Member Management solution covers the entire lifecycle, from seamless digital enrollment to accurate billing and proactive communication.",
            "We provide tools for members to view their benefits, track spending towards deductibles, and easily update their information. This self-service approach reduces call center volume and increases satisfaction.",
            "On the backend, our system handles complex eligibility rules, retro-active terminations, and premium reconciliation, ensuring your membership data is always pristine."
        ],
        features: [
            { title: "Digital Enrollment", desc: "Paperless, error-free onboarding for new members." },
            { title: "Benefit Portals", desc: "Self-service access to coverage details and ID cards." },
            { title: "Premium Billing", desc: "Automated invoicing and payment processing." },
            { title: "Eligibility Sync", desc: "Real-time updates with employer or state databases." }
        ]
    },
    {
        id: "provider",
        title: "Provider Management",
        subtitle: "Building Strong, Compliant Healthcare Networks.",
        icon: FileText,
        image: providerImg,
        shortDesc: "Network maintenance, credentialing, and contracting for hospitals and clinics.",
        fullDesc: [
            "A high-quality provider network is essential for care delivery. Our Provider Management suite standardizes the chaotic process of credentialing, contracting, and data maintenance.",
            "We automate primary source verification to ensure all providers meet compliance standards (NCQA, URAC). Our contracting module handles complex fee schedules and value-based payment arrangements with ease.",
            "Keep your provider directory accurate in real-time to avoid surprise bills for members and ensure compliance with the No Surprises Act."
        ],
        features: [
            { title: "Automated Credentialing", desc: "Faster validation of licenses, DEA, and board certs." },
            { title: "Contract Lifecycle", desc: "Digital signing and management of provider agreements." },
            { title: "Network Analytics", desc: "Visualize network adequacy and access gaps." },
            { title: "Directory Management", desc: "Real-time updates to public-facing provider search." }
        ]
    },
    {
        id: "fsa",
        title: "FSA Administration",
        subtitle: "Flexible Spending Made Simple and Compliant.",
        icon: Wallet,
        image: fsaImg,
        shortDesc: "Administration of pre-tax flexible spending accounts for medical expenses.",
        fullDesc: [
            "Managing Flexible Spending Accounts (FSAs) requires strict adherence to IRS regulations. Our platform automates substantiation and reimbursement, making it easy for employees to use their funds correctly.",
            "We support debit card integration for point-of-sale access, reducing the need for manual claims. Our system automatically handles the 'use-it-or-lose-it' rules, carryovers, and grace periods.",
            "Real-time mobile access allows participants to snap photos of receipts and check balances instantly, driving higher participation and satisfaction."
        ],
        features: [
            { title: "Debit Card Access", desc: "Instant payment at qualified merchants and providers." },
            { title: "Auto-Substantiation", desc: "Smart logic to approve recurring or copay-match expenses." },
            { title: "Mobile App", desc: "Upload receipts and track balances on the go." },
            { title: "Compliance Watch", desc: "Built-in checks for eligible expenses and IRS limits." }
        ]
    }
];

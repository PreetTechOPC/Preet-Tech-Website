import { Metadata } from "next";
import SoftwareDevelopmentHaldwaniClient from "./SoftwareDevelopmentHaldwaniClient";

export const metadata: Metadata = {
    title: "Custom Software Development Company in Haldwani | Business Software | Preet Tech",
    description: "Preet Tech is a custom software development company in Haldwani, Uttarakhand. We build business software, automation tools, CRM/ERP systems and SaaS applications for startups and businesses.",
    keywords: [
        "Software Development Company in Haldwani",
        "Custom Software Development Haldwani",
        "Business Software Development Haldwani",
        "CRM Development Haldwani",
        "ERP Development Haldwani",
        "SaaS Development Haldwani",
        "Business Automation Haldwani",
        "Software Company in Haldwani",
        "IT Solutions Haldwani",
        "Software Development Uttarakhand",
    ],
    alternates: {
        canonical: "/software-development-haldwani",
    },
    openGraph: {
        title: "Custom Software Development Company in Haldwani | Preet Tech",
        description: "Preet Tech builds custom business software, CRM/ERP systems, automation tools and SaaS platforms for startups and businesses in Haldwani, Uttarakhand.",
        url: "https://www.preettech.com/software-development-haldwani",
        siteName: "Preet Tech OPC Private Limited",
        type: "website",
        locale: "en_IN",
        images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Custom Software Development Company in Haldwani — Preet Tech" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Custom Software Development Company in Haldwani | Preet Tech",
        description: "Custom business software, CRM/ERP systems, and automation solutions in Haldwani — built by Preet Tech.",
        images: ["/og-image.png"],
    },
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Custom Software Development",
    "name": "Custom Software Development Company in Haldwani",
    "description": "Professional custom software development services in Haldwani. We build business software, CRM/ERP systems, automation tools, and SaaS platforms for startups and businesses.",
    "provider": {
        "@type": "Organization",
        "name": "Preet Tech OPC Private Limited",
        "url": "https://www.preettech.com",
        "telephone": "+91 97566 67397",
        "email": "info@preettech.com",
    },
    "areaServed": [
        { "@type": "City", "name": "Haldwani" },
        { "@type": "State", "name": "Uttarakhand" },
        { "@type": "Country", "name": "India" }
    ],
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Software Development Services",
        "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom Business Software" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "CRM Development" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "ERP Development" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SaaS Development" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Business Process Automation" } },
        ]
    }
};

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "name": "Preet Tech OPC Private Limited",
    "url": "https://www.preettech.com",
    "telephone": "+91 97566 67397",
    "email": "info@preettech.com",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "near Krishna Hospital, Subhash Nagar",
        "addressLocality": "Haldwani",
        "addressRegion": "Uttarakhand",
        "postalCode": "263139",
        "addressCountry": "IN"
    },
    "areaServed": [
        { "@type": "City", "name": "Haldwani" },
        { "@type": "State", "name": "Uttarakhand" }
    ],
    "sameAs": [
        "https://www.facebook.com/Preetinfotech/",
        "https://www.instagram.com/preettech/",
        "https://www.linkedin.com/company/preet-tech"
    ]
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.preettech.com" },
        { "@type": "ListItem", "position": 2, "name": "Software Development Haldwani", "item": "https://www.preettech.com/software-development-haldwani" },
    ]
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "What types of custom software does Preet Tech build?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "We build custom business software including CRM systems, ERP platforms, inventory management systems, booking and scheduling tools, HR management software, business automation workflows, and SaaS applications. Every solution is tailored to your specific business requirements."
            }
        },
        {
            "@type": "Question",
            "name": "How much does custom software development cost in Haldwani?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Custom software development costs depend on the complexity, features, and scale of the project. Simple business tools cost less than complex enterprise systems. Contact us for a free consultation and a detailed, transparent project estimate."
            }
        },
        {
            "@type": "Question",
            "name": "How long does custom software development take?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Simple business tools typically take 4–8 weeks. Complex software platforms like CRM/ERP systems or SaaS applications can take 3–6 months or more. We provide clear milestones and regular progress updates throughout the project."
            }
        },
        {
            "@type": "Question",
            "name": "Do you provide software maintenance and support?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. All software projects include post-launch support, and we offer ongoing maintenance retainers covering bug fixes, security updates, performance optimization, and feature additions."
            }
        },
        {
            "@type": "Question",
            "name": "Can you build a SaaS application for my business?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. We have experience building SaaS (Software as a Service) platforms with multi-tenant architecture, subscription billing, user management, and scalable cloud infrastructure."
            }
        }
    ]
};

export default function SoftwareDevelopmentHaldwaniPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <SoftwareDevelopmentHaldwaniClient />
        </>
    );
}

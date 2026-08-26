import { Metadata } from "next";
import AppDevelopmentHaldwaniClient from "./AppDevelopmentHaldwaniClient";

export const metadata: Metadata = {
    title: "Mobile App Development Company in Haldwani | Android & iOS Apps | Preet Tech",
    description: "Preet Tech is a mobile app development company in Haldwani, Uttarakhand. We build Android apps, iOS apps, and cross-platform mobile applications for startups and businesses.",
    keywords: [
        "App Development Company in Haldwani",
        "Mobile App Development Haldwani",
        "Mobile App Developer Haldwani",
        "Android App Development Haldwani",
        "iOS App Development Haldwani",
        "Cross-Platform App Development Haldwani",
        "Custom Mobile App Development Haldwani",
        "React Native Developer Haldwani",
        "Flutter Developer Haldwani",
        "App Development Uttarakhand",
    ],
    alternates: {
        canonical: "/app-development-haldwani",
    },
    openGraph: {
        title: "Mobile App Development Company in Haldwani | Android & iOS | Preet Tech",
        description: "Build powerful Android, iOS and cross-platform apps with Preet Tech — Haldwani's mobile app development company. Expert developers, scalable architecture.",
        url: "https://www.preettech.com/app-development-haldwani",
        siteName: "Preet Tech OPC Private Limited",
        type: "website",
        locale: "en_IN",
        images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Mobile App Development Company in Haldwani — Preet Tech" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Mobile App Development Company in Haldwani | Preet Tech",
        description: "Build powerful Android, iOS and cross-platform mobile apps in Haldwani with Preet Tech.",
        images: ["/og-image.png"],
    },
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Mobile App Development",
    "name": "Mobile App Development Company in Haldwani",
    "description": "Professional mobile app development services in Haldwani. We build Android apps, iOS apps, and cross-platform applications for startups and businesses.",
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
        "name": "App Development Services",
        "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Android App Development" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "iOS App Development" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cross-Platform App Development" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom Business App Development" } },
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
        { "@type": "ListItem", "position": 2, "name": "App Development Haldwani", "item": "https://www.preettech.com/app-development-haldwani" },
    ]
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "How much does mobile app development cost in Haldwani?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Mobile app development costs vary based on platform, features, and complexity. A basic business app typically starts from a few lakhs and goes up depending on the scope. Contact us for a free, transparent quote tailored to your requirements."
            }
        },
        {
            "@type": "Question",
            "name": "Do you develop Android and iOS apps?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. We develop native Android apps, native iOS apps, and cross-platform applications using React Native and Flutter. We recommend the best approach based on your business goals and budget."
            }
        },
        {
            "@type": "Question",
            "name": "How long does it take to develop a mobile app?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "A basic mobile app typically takes 6–10 weeks. More complex apps with backend integration, custom features, and multiple platforms take 3–6 months. We provide a detailed timeline after the discovery session."
            }
        },
        {
            "@type": "Question",
            "name": "Do you provide backend development for apps?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. We build complete backend APIs, databases, user authentication, push notifications, and server infrastructure to support your mobile application. We deliver a complete, production-ready solution."
            }
        },
        {
            "@type": "Question",
            "name": "Do you provide app maintenance after launch?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. We offer post-launch support, bug fixes, OS compatibility updates, performance optimization, and feature additions. We are a long-term technology partner."
            }
        }
    ]
};

export default function AppDevelopmentHaldwaniPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <AppDevelopmentHaldwaniClient />
        </>
    );
}

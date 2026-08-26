import { Metadata } from "next";
import WebsiteDevelopmentClient from "./WebsiteDevelopmentClient";

export const metadata: Metadata = {
    title: "Website Development Company in Haldwani | Professional Web Development | Preet Tech",
    description: "Preet Tech is a professional website development company in Haldwani, Uttarakhand. We build business websites, custom web applications, e-commerce stores and high-performance web solutions for startups and businesses.",
    keywords: [
        "Website Development Company in Haldwani",
        "Web Development Company Haldwani",
        "Website Designer in Haldwani",
        "Custom Website Development Haldwani",
        "Business Website Development Haldwani",
        "E-commerce Website Development Haldwani",
        "Web Application Development Haldwani",
        "Affordable Website Development Haldwani",
        "Professional Website Developer Haldwani",
        "Website Development Uttarakhand",
    ],
    alternates: {
        canonical: "/website-development-haldwani",
    },
    openGraph: {
        title: "Website Development Company in Haldwani | Preet Tech",
        description: "Professional website development company in Haldwani building business websites, e-commerce stores and custom web applications for startups and businesses.",
        url: "https://www.preettech.com/website-development-haldwani",
        siteName: "Preet Tech OPC Private Limited",
        type: "website",
        locale: "en_IN",
        images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Website Development Company in Haldwani — Preet Tech" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Website Development Company in Haldwani | Preet Tech",
        description: "Professional website development in Haldwani — business websites, e-commerce, custom web apps.",
        images: ["/og-image.png"],
    },
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Website Development",
    "name": "Website Development Company in Haldwani",
    "description": "Professional website development services in Haldwani, Uttarakhand. We build business websites, custom web applications, e-commerce stores and high-performance web solutions.",
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
        "name": "Website Development Services",
        "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Business Website Development" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom Website Development" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "E-commerce Website Development" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Web Application Development" } },
        ]
    }
};

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "name": "Preet Tech OPC Private Limited",
    "alternateName": "Preet Tech",
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
        { "@type": "ListItem", "position": 2, "name": "Website Development Haldwani", "item": "https://www.preettech.com/website-development-haldwani" },
    ]
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "How much does website development cost in Haldwani?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Website development costs in Haldwani vary by scope. Our Eco Website packages are budget-friendly and ideal for small businesses and startups. Custom websites, e-commerce platforms, and advanced web applications are priced based on features and complexity. Contact us for a free, transparent quote."
            }
        },
        {
            "@type": "Question",
            "name": "How long does it take to build a business website?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "A standard business website typically takes 2–4 weeks. E-commerce websites and custom web applications take 4–8 weeks. The timeline depends on the scope, content readiness, and revision cycles. We provide a detailed project timeline at the start of every project."
            }
        },
        {
            "@type": "Question",
            "name": "Do you provide website maintenance after launch?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. We offer post-launch support and ongoing maintenance retainers covering bug fixes, security updates, performance optimization, content updates, and feature additions. We are a long-term technology partner."
            }
        },
        {
            "@type": "Question",
            "name": "Will my website be mobile-friendly and SEO-optimized?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Every website we build is fully mobile-responsive and follows modern SEO best practices including fast load times, semantic HTML, proper meta tags, structured data, and Core Web Vitals optimization."
            }
        },
        {
            "@type": "Question",
            "name": "Can you build an e-commerce website for my business?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. We build high-converting e-commerce websites with product management, secure payment integration, inventory management, and mobile-optimized shopping experiences. Contact us to discuss your e-commerce requirements."
            }
        },
        {
            "@type": "Question",
            "name": "Do you provide website redesign services?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. We offer website redesign services for businesses looking to modernize their online presence. We audit your existing website, identify issues, and rebuild it with improved design, performance, and SEO."
            }
        }
    ]
};

export default function WebsiteDevelopmentHaldwaniPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <WebsiteDevelopmentClient />
        </>
    );
}

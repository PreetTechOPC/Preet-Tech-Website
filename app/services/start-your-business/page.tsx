import { Metadata } from "next";
import StartYourBusinessClient from "./StartYourBusinessClient";

export const metadata: Metadata = {
    title: "Start Your Business in India | Complete Tech & Digital Setup | Preet Tech",
    description: "Launch your business the right way with Preet Tech. We provide complete technology setup, digital strategy, brand foundation, and business registration support to get your venture live and growing fast.",
    keywords: [
        "start your business India",
        "business setup services India",
        "new business technology setup",
        "startup launch services India",
        "complete business setup package",
        "digital setup for new business",
        "how to start a business in India",
        "business registration and tech setup",
        "startup launch consulting India"
    ],
    openGraph: {
        title: "Start Your Business in India | Complete Tech & Digital Setup | Preet Tech",
        description: "Everything you need to launch — tech stack, digital presence, brand identity, and growth strategy in one comprehensive package.",
        url: "https://www.preettech.com/services/start-your-business",
        siteName: "Preet Tech OPC Private Limited",
        type: "website",
        images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Start Your Business — Preet Tech" }],
    },
    alternates: { canonical: "/services/start-your-business" },
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Business Launch & Setup Services",
    "provider": { "@type": "Organization", "name": "Preet Tech OPC Private Limited", "url": "https://www.preettech.com" },
    "description": "End-to-end business setup services including technology infrastructure, brand identity, digital presence, and go-to-market strategy for new ventures in India.",
    "areaServed": "IN",
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Business Launch Services",
        "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Startup Technology Setup" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Brand Identity & Digital Presence" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Go-to-Market Strategy" } },
        ]
    }
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.preettech.com" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.preettech.com/services" },
        { "@type": "ListItem", "position": 3, "name": "Start Your Business", "item": "https://www.preettech.com/services/start-your-business" },
    ]
};

export default function StartYourBusinessPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <StartYourBusinessClient />
        </>
    );
}

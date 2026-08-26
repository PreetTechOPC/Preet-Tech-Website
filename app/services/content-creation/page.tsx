import { Metadata } from "next";
import ContentCreationClient from "./ContentCreationClient";

export const metadata: Metadata = {
    title: "Professional Content Creation Services | Video & Brand Media | Preet Tech",
    description: "Elevate your brand with Preet Tech's professional content creation services. We produce cinematic videos, brand photography, social media content, and digital storytelling that drives engagement and conversions.",
    keywords: [
        "content creation services India",
        "video production company",
        "brand content creation",
        "social media content agency",
        "digital content marketing",
        "cinematic video production",
        "brand storytelling services",
        "content marketing agency India",
        "professional video editing"
    ],
    openGraph: {
        title: "Professional Content Creation & Video Production | Preet Tech",
        description: "Cinematic brand videos, social media content, and digital storytelling that captures attention and drives conversions.",
        url: "https://www.preettech.com/services/content-creation",
        siteName: "Preet Tech OPC Private Limited",
        type: "website",
        images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Content Creation Services — Preet Tech" }],
    },
    alternates: { canonical: "/services/content-creation" },
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Professional Content Creation & Video Production",
    "provider": { "@type": "Organization", "name": "Preet Tech OPC Private Limited", "url": "https://www.preettech.com" },
    "description": "High-fidelity brand content including cinematic video production, social media content strategy, and digital storytelling.",
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Content Creation Services",
        "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cinematic Video Production" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Social Media Content Creation" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Brand Photography & Design" } },
        ]
    }
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.preettech.com" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.preettech.com/services" },
        { "@type": "ListItem", "position": 3, "name": "Content Creation", "item": "https://www.preettech.com/services/content-creation" },
    ]
};

export default function ContentCreationPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <ContentCreationClient />
        </>
    );
}

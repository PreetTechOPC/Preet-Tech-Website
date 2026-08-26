import { Metadata } from "next";
import SocialMediaHandlingClient from "./SocialMediaHandlingClient";

export const metadata: Metadata = {
    title: "Social Media Management Agency India | Instagram & Meta Handling | Preet Tech",
    description: "Grow your brand on social media with Preet Tech's expert social media management. We handle Instagram, Facebook, LinkedIn, and YouTube content strategy, posting, engagement, and analytics for Indian and global brands.",
    keywords: [
        "social media management India",
        "Instagram management agency",
        "Facebook page management",
        "LinkedIn marketing services India",
        "social media handling agency",
        "YouTube channel management",
        "social media content strategy",
        "brand social media management",
        "social media marketing company India"
    ],
    openGraph: {
        title: "Social Media Management Agency India | Preet Tech",
        description: "Expert social media handling for Instagram, Facebook, LinkedIn & YouTube. Content strategy, posting, engagement & analytics.",
        url: "https://www.preettech.com/services/social-media-handling",
        siteName: "Preet Tech OPC Private Limited",
        type: "website",
        images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Social Media Management — Preet Tech" }],
    },
    alternates: { canonical: "/services/social-media-handling" },
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Social Media Management & Marketing",
    "provider": { "@type": "Organization", "name": "Preet Tech OPC Private Limited", "url": "https://www.preettech.com" },
    "description": "Full-service social media management including content strategy, scheduling, community management, and growth analytics across all major platforms.",
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Social Media Management Services",
        "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Instagram & Facebook Management" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "LinkedIn B2B Marketing" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "YouTube Channel Management" } },
        ]
    }
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.preettech.com" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.preettech.com/services" },
        { "@type": "ListItem", "position": 3, "name": "Social Media Handling", "item": "https://www.preettech.com/services/social-media-handling" },
    ]
};

export default function SocialMediaHandlingPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <SocialMediaHandlingClient />
        </>
    );
}

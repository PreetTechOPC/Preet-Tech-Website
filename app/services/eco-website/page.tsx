import { Metadata } from "next";
import EcoWebsiteClient from "./EcoWebsiteClient";

export const metadata: Metadata = {
    title: "Affordable Website Development in Haldwani | Eco Website Package | Preet Tech",
    description: "Get a professional, fast-loading website for your small business or startup in Haldwani, Uttarakhand. Preet Tech's Eco Website package delivers quality web presence at an affordable price — live in 7–14 days.",
    keywords: [
        "Affordable Website Development Haldwani",
        "Small Business Website Haldwani",
        "Budget Website Development Haldwani",
        "Eco Website Package Haldwani",
        "Website Development Haldwani",
        "Business Website Haldwani",
        "Fast Website Development Haldwani",
        "Startup Website Haldwani",
        "Professional Website Haldwani"
    ],
    openGraph: {
        title: "Affordable Website Development in Haldwani | Eco Website | Preet Tech",
        description: "Professional, fast-loading websites for small businesses and startups in Haldwani at budget-friendly prices. Live in 7–14 days.",
        url: "https://www.preettech.com/services/eco-website",
        siteName: "Preet Tech OPC Private Limited",
        type: "website",
        locale: "en_IN",
        images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Affordable Eco Website Development in Haldwani — Preet Tech" }],
    },
    alternates: { canonical: "/services/eco-website" },
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Affordable Website Development for Small Business",
    "provider": { "@type": "Organization", "name": "Preet Tech OPC Private Limited", "url": "https://www.preettech.com" },
    "description": "Rapid, budget-friendly website development for small businesses and startups. High performance, mobile-responsive sites deployed fast.",
    "areaServed": "Haldwani, Uttarakhand, India",
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Eco Website Services",
        "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Small Business Website Design" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Fast Website Launch Package" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mobile-Responsive Website Development" } },
        ]
    }
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.preettech.com" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.preettech.com/services" },
        { "@type": "ListItem", "position": 3, "name": "Eco Website", "item": "https://www.preettech.com/services/eco-website" },
    ]
};

export default function EcoWebsitePage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <EcoWebsiteClient />
        </>
    );
}

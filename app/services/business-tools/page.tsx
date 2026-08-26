import { Metadata } from "next";
import BusinessToolsClient from "./BusinessToolsClient";

export const metadata: Metadata = {
    title: "Custom Business Tools & Internal Software Development | Preet Tech",
    description: "Supercharge your business operations with Preet Tech's custom-built business tools. We develop internal dashboards, automation systems, workflow software, and proprietary tools that reduce operational costs.",
    keywords: [
        "custom business tools development",
        "internal software development",
        "business automation software",
        "workflow automation tools",
        "custom dashboard development",
        "operational efficiency software",
        "business process automation India",
        "internal tooling company",
        "productivity software development"
    ],
    openGraph: {
        title: "Custom Business Tools & Automation Software | Preet Tech",
        description: "Proprietary internal tools, dashboards, and automation software that eliminate friction and cut operational costs.",
        url: "https://www.preettech.com/services/business-tools",
        siteName: "Preet Tech OPC Private Limited",
        type: "website",
        images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Business Tools Development — Preet Tech" }],
    },
    alternates: { canonical: "/services/business-tools" },
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Business Tools & Automation Software Development",
    "provider": { "@type": "Organization", "name": "Preet Tech OPC Private Limited", "url": "https://www.preettech.com" },
    "description": "Custom internal business tools, dashboards, and automation systems to streamline operations and improve productivity.",
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Business Tools Services",
        "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom Dashboard Development" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Business Process Automation" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Internal Tooling & Workflow Software" } },
        ]
    }
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.preettech.com" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.preettech.com/services" },
        { "@type": "ListItem", "position": 3, "name": "Business Tools", "item": "https://www.preettech.com/services/business-tools" },
    ]
};

export default function BusinessToolsPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <BusinessToolsClient />
        </>
    );
}

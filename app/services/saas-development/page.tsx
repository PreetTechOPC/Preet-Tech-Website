import { Metadata } from "next";
import SaaSDevelopmentClient from "./SaaSDevelopmentClient";

export const metadata: Metadata = {
    title: "SaaS Product Development Company India | Cloud Software | Preet Tech",
    description: "Launch your SaaS product with Preet Tech. We architect scalable, cloud-native Software-as-a-Service platforms built for millions of concurrent users, complete with multi-tenancy, billing integrations, and DevOps pipelines.",
    keywords: [
        "SaaS development company India",
        "SaaS product development",
        "cloud-native software development",
        "multi-tenant SaaS development",
        "SaaS startup development",
        "cloud application development India",
        "SaaS MVP development",
        "software as a service development",
        "enterprise SaaS development India"
    ],
    openGraph: {
        title: "SaaS Product Development Company India | Preet Tech",
        description: "Scalable, cloud-native SaaS platforms engineered for millions of users. Multi-tenancy, billing, DevOps — all included.",
        url: "https://www.preettech.com/services/saas-development",
        siteName: "Preet Tech OPC Private Limited",
        type: "website",
        images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "SaaS Development — Preet Tech" }],
    },
    alternates: { canonical: "/services/saas-development" },
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "SaaS Product Development",
    "provider": { "@type": "Organization", "name": "Preet Tech OPC Private Limited", "url": "https://www.preettech.com" },
    "description": "End-to-end SaaS product development including cloud architecture, multi-tenancy, subscription billing, and DevOps for scalable software businesses.",
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "SaaS Development Services",
        "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SaaS MVP Development" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cloud-Native SaaS Architecture" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SaaS Billing & Subscription Integration" } },
        ]
    }
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.preettech.com" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.preettech.com/services" },
        { "@type": "ListItem", "position": 3, "name": "SaaS Development", "item": "https://www.preettech.com/services/saas-development" },
    ]
};

export default function SaaSDevelopmentPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <SaaSDevelopmentClient />
        </>
    );
}

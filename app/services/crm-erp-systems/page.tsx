import { Metadata } from "next";
import CRMERPClient from "./CRMERPClient";

export const metadata: Metadata = {
    title: "Custom CRM & ERP System Development Company India | Preet Tech",
    description: "Streamline your enterprise operations with Preet Tech's custom CRM and ERP systems. We build tailored customer relationship management and enterprise resource planning solutions for scalable business growth.",
    keywords: [
        "CRM development company India",
        "custom ERP system development",
        "CRM software development",
        "enterprise resource planning India",
        "custom business management software",
        "Salesforce alternative development",
        "CRM ERP integration services",
        "enterprise software solutions",
        "business management system development"
    ],
    openGraph: {
        title: "Custom CRM & ERP Development | Enterprise Solutions | Preet Tech",
        description: "Tailored CRM and ERP systems built for your exact workflow. Eliminate off-the-shelf limitations with enterprise-grade custom software.",
        url: "https://www.preettech.com/services/crm-erp-systems",
        siteName: "Preet Tech OPC Private Limited",
        type: "website",
        images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "CRM ERP System Development — Preet Tech" }],
    },
    alternates: { canonical: "/services/crm-erp-systems" },
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Custom CRM & ERP System Development",
    "provider": { "@type": "Organization", "name": "Preet Tech OPC Private Limited", "url": "https://www.preettech.com" },
    "description": "Custom CRM and ERP software development for enterprises. Streamline operations, improve customer management, and optimize resource allocation.",
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "CRM & ERP Services",
        "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom CRM Development" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom ERP System Development" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "CRM & ERP Integration" } },
        ]
    }
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.preettech.com" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.preettech.com/services" },
        { "@type": "ListItem", "position": 3, "name": "CRM & ERP Systems", "item": "https://www.preettech.com/services/crm-erp-systems" },
    ]
};

export default function CRMERPSystemsPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <CRMERPClient />
        </>
    );
}

import { Metadata } from "next";
import SoftwareDevelopmentClient from "./SoftwareDevelopmentClient";

export const metadata: Metadata = {
    title: "Software Development Company in Haldwani | Custom Software | Preet Tech",
    description: "Preet Tech is a custom software development company in Haldwani, Uttarakhand. We build business software, CRM/ERP systems, automation tools and SaaS platforms for startups and businesses.",
    keywords: [
        "Software Development Company Haldwani",
        "Custom Software Development Haldwani",
        "Business Software Haldwani",
        "CRM Development Haldwani",
        "ERP Development Haldwani",
        "SaaS Development Haldwani",
        "Business Automation Haldwani",
        "IT Solutions Haldwani",
        "Software Company Uttarakhand"
    ],
    alternates: {
        canonical: "/services/software-development",
    },
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Custom Software Development Services",
    "provider": {
        "@type": "Organization",
        "name": "Preet Tech OPC Private Limited"
    },
    "description": "High-end custom software engineering including enterprise systems, SaaS products, and workflow automation.",
    "areaServed": "Haldwani, Uttarakhand, India",
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Software Engineering Services",
        "itemListElement": [
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Enterprise Software Engineering"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "SaaS Product Development"
                }
            }
        ]
    }
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.preettech.com" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.preettech.com/services" },
        { "@type": "ListItem", "position": 3, "name": "Software Development", "item": "https://www.preettech.com/services/software-development" }
    ]
};

export default function SoftwareDevelopmentPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <SoftwareDevelopmentClient />
        </>
    );
}

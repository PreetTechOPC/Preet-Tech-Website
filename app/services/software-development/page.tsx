import { Metadata } from "next";
import SoftwareDevelopmentClient from "./SoftwareDevelopmentClient";

export const metadata: Metadata = {
    title: "Custom Software Development Services | Enterprise Engineering | Preet Tech",
    description: "Scale your operations with Preet Tech's custom software development services. We architect scalable, secure, and performance-driven solutions for global enterprises and startups.",
    keywords: [
        "Custom Software Development", "Enterprise Software Engineering", "Agile Software Development",
        "SaaS Product Engineering", "Legacy System Modernization", "Business Process Automation",
        "API Integration Services", "Cloud-Native Software", "Dedicated Development Team"
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
    "areaServed": "Worldwide",
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
        {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://preettech.com"
        },
        {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://preettech.com/services"
        },
        {
            "@type": "ListItem",
            "position": 3,
            "name": "Software Development",
            "item": "https://preettech.com/services/software-development"
        }
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

import { Metadata } from "next";
import AdvanceWebsiteClient from "./AdvanceWebsiteClient";

export const metadata: Metadata = {
    title: "Custom Web Development Company in Haldwani | Advanced Websites | Preet Tech",
    description: "Preet Tech builds high-performance custom websites, SaaS platforms, and enterprise web applications for businesses in Haldwani, Uttarakhand and beyond. Built on Next.js, React and Node.js.",
    keywords: [
        "Custom Web Development Haldwani",
        "Advanced Website Development Haldwani",
        "Custom Website Development Haldwani",
        "Enterprise Web Development Haldwani",
        "SaaS Development Haldwani",
        "Next.js Development Haldwani",
        "React Development Haldwani",
        "Web Application Development Haldwani",
        "High-Performance Website Haldwani"
    ],
    alternates: {
        canonical: "/services/advance-website",
    },
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Advanced Web Development Services",
    "provider": {
        "@type": "Organization",
        "name": "Preet Tech OPC Private Limited"
    },
    "description": "High-performance custom web development including SaaS platforms, enterprise solutions, and custom ERP systems.",
    "areaServed": "Haldwani, Uttarakhand, India",
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Web Development Services",
        "itemListElement": [
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "SaaS Platform Development"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Custom ERP & CRM Systems"
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
        { "@type": "ListItem", "position": 3, "name": "Advanced Website Development", "item": "https://www.preettech.com/services/advance-website" }
    ]
};

export default function AdvanceWebsitePage() {
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
            <AdvanceWebsiteClient />
        </>
    );
}

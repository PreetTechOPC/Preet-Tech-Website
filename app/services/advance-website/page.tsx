import { Metadata } from "next";
import AdvanceWebsiteClient from "./AdvanceWebsiteClient";

export const metadata: Metadata = {
    title: "Custom Web Development Services | Enterprise Solutions | Preet Tech",
    description: "Scale your business with Preet Tech's high-performance custom web development services. We build enterprise-grade websites, SaaS platforms, and custom ERP systems using React, Next.js, and Node.js.",
    keywords: [
        "Custom Web Development", "Enterprise Web Solutions", "Next.js Development Agency",
        "SaaS Development Services", "Custom ERP Systems", "High-Performance Websites",
        "React Development Company", "Scalable Web Architecture", "Bespoke UI/UX Design"
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
    "areaServed": "Worldwide",
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
            "name": "Advanced Website Development",
            "item": "https://preettech.com/services/advance-website"
        }
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

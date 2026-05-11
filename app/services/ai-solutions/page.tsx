import { Metadata } from "next";
import AISolutionsClient from "./AISolutionsClient";

export const metadata: Metadata = {
    title: "AI Automation & Solutions | Generative AI Services | Preet Tech",
    description: "Future-proof your business with Preet Tech's AI solutions. We provide custom AI automation, Generative AI integration, AI chatbots, and predictive analytics to scale your operations.",
    keywords: [
        "AI Solutions for Business", "Generative AI Integration", "AI Automation Services",
        "Custom AI Chatbots", "Predictive Analytics Solutions", "AI Strategy Consulting",
        "Machine Learning Services", "AI-Driven Workflows", "Business Intelligence AI"
    ],
    alternates: {
        canonical: "/services/ai-solutions",
    },
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "AI Automation & Solutions",
    "provider": {
        "@type": "Organization",
        "name": "Preet Tech OPC Private Limited"
    },
    "description": "Comprehensive AI solutions including Generative AI integration, custom chatbots, and business process automation.",
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "AI Services",
        "itemListElement": [
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Generative AI Integration"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "AI Chatbots & Assistants"
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
            "name": "AI Solutions",
            "item": "https://preettech.com/services/ai-solutions"
        }
    ]
};

export default function AISolutionsPage() {
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
            <AISolutionsClient />
        </>
    );
}

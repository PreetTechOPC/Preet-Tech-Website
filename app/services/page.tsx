import { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
    title: "Our Digital & IT Services | Tech Innovation | Preet Tech",
    description: "Explore Preet Tech's comprehensive portfolio of IT and digital services. From advanced web development and AI solutions to performance marketing and SaaS engineering.",
    keywords: [
        "IT Services Portfolio", "Digital Transformation Services", "Custom Software Development",
        "Performance Marketing Agency", "AI Automation Solutions", "SaaS Engineering",
        "App Development Services", "Business Technology Consulting", "Digital Growth Strategies"
    ],
    alternates: {
        canonical: "/services",
    },
};

const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Preet Tech Services",
    "description": "A comprehensive list of professional IT and digital growth services offered by Preet Tech.",
    "itemListElement": [
        {
            "@type": "ListItem",
            "position": 1,
            "url": "https://preettech.com/services/advance-website",
            "name": "Advanced Web Development"
        },
        {
            "@type": "ListItem",
            "position": 2,
            "url": "https://preettech.com/services/software-development",
            "name": "Custom Software Development"
        },
        {
            "@type": "ListItem",
            "position": 3,
            "url": "https://preettech.com/services/ai-solutions",
            "name": "AI Automation & Solutions"
        },
        {
            "@type": "ListItem",
            "position": 4,
            "url": "https://preettech.com/services/performance-marketing",
            "name": "Performance Marketing"
        }
    ]
};

export default function ServicesPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
            />
            <ServicesClient />
        </>
    );
}

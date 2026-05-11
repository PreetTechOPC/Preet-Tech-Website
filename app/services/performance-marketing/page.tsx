import { Metadata } from "next";
import PerformanceMarketingClient from "./PerformanceMarketingClient";

export const metadata: Metadata = {
    title: "Performance Marketing Services | Scalable ROI & Growth | Preet Tech",
    description: "Maximize your ROI with Preet Tech's data-driven performance marketing services. We specialize in Meta Ads, Google Ads, YouTube Ads, and conversion funnel optimization for global business growth.",
    keywords: [
        "Performance Marketing Services", "ROI-Driven Marketing", "Google Ads Management",
        "Meta Ads Agency", "Conversion Rate Optimization", "Growth Marketing Solutions",
        "PPC Management", "Digital Advertising Agency", "Scalable Growth Strategies"
    ],
    alternates: {
        canonical: "/services/performance-marketing",
    },
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Performance Marketing Services",
    "provider": {
        "@type": "Organization",
        "name": "Preet Tech OPC Private Limited"
    },
    "description": "Data-driven performance marketing services including Meta Ads, Google Ads, and funnel optimization to maximize ROI.",
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Performance Marketing",
        "itemListElement": [
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Meta Ads Management"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Google Ads Management"
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
            "name": "Performance Marketing",
            "item": "https://preettech.com/services/performance-marketing"
        }
    ]
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "How long does it take to see results from performance marketing?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "While initial data starts flowing in within the first 48 hours, meaningful ROI optimization typically takes 2-4 weeks. Our performance marketing services focus on 'quick wins' while simultaneously building long-term scalable funnels for your business."
            }
        },
        {
            "@type": "Question",
            "name": "What is your typical management fee for ad campaigns?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our pricing architecture is customized based on project complexity and ad spend. We offer both performance-based models and monthly retainers, ensuring our goals are perfectly aligned with your business growth and ROAS targets."
            }
        }
    ]
};

export default function PerformanceMarketingPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <PerformanceMarketingClient />
        </>
    );
}

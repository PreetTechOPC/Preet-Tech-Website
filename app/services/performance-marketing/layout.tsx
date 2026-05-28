import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
    title: "Performance Marketing Services | Scale Your ROI & Revenue | Preet Tech OPC Private Limited",
    description: "Maximize your business growth with ROI-driven performance marketing services starting at ₹19,999. Expert Meta Ads, Google Ads management, and data-backed scaling strategies for startups and e-commerce.",
    keywords: [
        "Performance Marketing Services",
        "PPC Management IT Company",
        "Google Ads Services",
        "Meta Ads Management",
        "ROI-Focused Marketing",
        "E-commerce Growth IT Company",
        "SaaS Lead Generation",
        "Scale Your ROAS",
        "Data-Driven Marketing",
        "Lead Generation Services",
        "Digital Advertising IT Company"
    ],
    openGraph: {
        title: "Performance Marketing that Delivers Measurable Growth | Preet Tech OPC Private Limited",
        description: "Stop guessing and start growing. We use advanced analytics and precision targeting to turn your marketing spend into a high-octane growth engine.",
        url: 'https://preettech.com/services/performance-marketing',
        siteName: 'Preet Tech OPC Private Limited',
        images: [
            {
                url: 'https://preettech.com/og-performance-marketing.jpg', // Placeholder for actual OG image
                width: 1200,
                height: 630,
                alt: 'Preet Tech OPC Private Limited Performance Marketing Dashboard',
            },
        ],
        locale: 'en_IN',
        type: 'website',
    },
};

export default function PerformanceMarketingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Performance Marketing Services",
        "description": "Comprehensive performance marketing including PPC management, social media ads, and conversion optimization.",
        "provider": {
            "@type": "Organization",
            "name": "Preet Tech OPC Private Limited",
            "url": "https://preettech.com"
        },
        "serviceType": "Digital Marketing",
        "areaServed": "Worldwide",
        "offers": {
            "@type": "Offer",
            "price": "19999.00",
            "priceCurrency": "INR",
            "description": "Starting price for performance marketing packages"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Performance Marketing Solutions",
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
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Conversion Rate Optimization"
                    }
                }
            ]
        }
    };

    const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "How long does it take to see results from performance marketing?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "While initial data starts flowing in within the first 48 hours, meaningful ROI optimization typically takes 2-4 weeks. We focus on 'quick wins' while simultaneously building long-term scalable funnels for your business."
                }
            },
            {
                "@type": "Question",
                "name": "Do your performance marketing services include creative production?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, Preet Tech OPC Private Limited's High-Velocity Content Engine handles everything from creative direction to cinematic ad visuals, ensuring your ads stop the scroll and drive conversions effectively."
                }
            }
        ]
    };

    return (
        <>
            <Script
                id="performance-service-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="performance-faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />
            {children}
        </>
    );
}

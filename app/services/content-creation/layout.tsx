import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
    title: "Professional Content Creation Services | Social Media & Ad Creatives | Preet Tech OPC Private Limited",
    description: "Elevate your brand with award-winning content creation services starting at ₹4,999. Specializing in high-engaging social media reels, short-form videos, and performance-driven ad creatives for startups and E-commerce brands.",
    keywords: [
        "Content Creation Services",
        "Social Media Content IT Company",
        "Short-form Video Production",
        "Ad Creative IT Company",
        "Video Production Studio",
        "Content Strategy for Startups",
        "Reels and TikTok Production",
        "High-converting Content",
        "Digital Storytelling Services",
        "Performance Marketing Creatives"
    ],
    openGraph: {
        title: "Content Creation Services that Drive Growth | Preet Tech OPC Private Limited Studio",
        description: "From strategy to post-production, we handle your entire content lifecycle. Get scroll-stopping visuals that convert viewers into customers.",
        url: 'https://preettech.com/services/content-creation',
        siteName: 'Preet Tech OPC Private Limited',
        images: [
            {
                url: 'https://preettech.com/og-content-creation.jpg', // Placeholder for actual OG image
                width: 1200,
                height: 630,
                alt: 'Preet Tech OPC Private Limited Content Creation Studio',
            },
        ],
        locale: 'en_IN',
        type: 'website',
    },
};

export default function ContentCreationLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Content Creation Services",
        "description": "Professional content creation including social media management, short-form video production, and ad creatives.",
        "provider": {
            "@type": "Organization",
            "name": "Preet Tech OPC Private Limited",
            "url": "https://preettech.com"
        },
        "serviceType": "Digital Content Production",
        "areaServed": "Worldwide",
        "offers": {
            "@type": "Offer",
            "price": "4999.00",
            "priceCurrency": "INR",
            "description": "Starting price for content creation packages"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Content Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Social Media Content"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Short-Form Video Production"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Ad Creative Development"
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
                "name": "How often should we post content for social media growth?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Consistency is key for digital growth, but quality beats quantity. We recommend a minimum of 3-5 high-quality posts per week combined with daily stories. Our content creation services customize this frequency based on your industry and specific business goals."
                }
            },
            {
                "@type": "Question",
                "name": "Do your content creation services include both shooting and editing?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, Preet Tech OPC Private Limited provides full-service content production. This includes creative direction, professional filming/photography on-site or in-studio, and advanced post-production editing for platforms like Reels, TikTok, and YouTube."
                }
            }
        ]
    };

    return (
        <>
            <Script
                id="service-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />
            {children}
        </>
    );
}

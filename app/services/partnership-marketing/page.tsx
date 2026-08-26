import { Metadata } from "next";
import PartnershipMarketingClient from "./PartnershipMarketingClient";

export const metadata: Metadata = {
    title: "Partnership Marketing & Affiliate Management Services | Preet Tech",
    description: "Scale your brand through strategic partnerships with Preet Tech's partnership marketing services. We manage influencer collaborations, affiliate programs, co-marketing campaigns, and brand partnerships that deliver exponential growth.",
    keywords: [
        "partnership marketing services India",
        "affiliate marketing management",
        "influencer marketing agency India",
        "brand partnership management",
        "co-marketing campaigns",
        "channel partner marketing",
        "collaborative marketing strategy",
        "brand ambassador program",
        "strategic marketing partnerships"
    ],
    openGraph: {
        title: "Partnership Marketing & Affiliate Management | Preet Tech",
        description: "High-impact brand partnerships, affiliate programs, and influencer collaborations that create exponential growth multipliers.",
        url: "https://www.preettech.com/services/partnership-marketing",
        siteName: "Preet Tech OPC Private Limited",
        type: "website",
        images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Partnership Marketing — Preet Tech" }],
    },
    alternates: { canonical: "/services/partnership-marketing" },
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Partnership Marketing & Affiliate Management",
    "provider": { "@type": "Organization", "name": "Preet Tech OPC Private Limited", "url": "https://www.preettech.com" },
    "description": "Strategic brand partnerships, influencer campaigns, and affiliate marketing management to amplify reach and generate qualified leads.",
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Partnership Marketing Services",
        "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Influencer Marketing Campaigns" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Affiliate Program Management" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Co-Marketing Partnerships" } },
        ]
    }
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.preettech.com" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.preettech.com/services" },
        { "@type": "ListItem", "position": 3, "name": "Partnership Marketing", "item": "https://www.preettech.com/services/partnership-marketing" },
    ]
};

export default function PartnershipMarketingPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <PartnershipMarketingClient />
        </>
    );
}

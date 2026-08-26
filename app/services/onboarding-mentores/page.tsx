import { Metadata } from "next";
import OnboardingMentoresClient from "./OnboardingMentoresClient";

export const metadata: Metadata = {
    title: "Business Onboarding & Mentorship Services | Startup Guidance | Preet Tech",
    description: "Accelerate your startup journey with Preet Tech's onboarding and mentorship programs. We guide new businesses through technology setup, digital strategy, and operational foundations for sustainable growth.",
    keywords: [
        "business onboarding services",
        "startup mentorship program India",
        "business mentoring India",
        "digital onboarding for startups",
        "startup guidance India",
        "business setup consulting",
        "entrepreneurship mentorship",
        "startup acceleration India",
        "business coaching services"
    ],
    openGraph: {
        title: "Business Onboarding & Mentorship | Startup Support | Preet Tech",
        description: "Expert guidance and mentorship for new businesses. Tech setup, digital strategy, and operational foundations done right.",
        url: "https://www.preettech.com/services/onboarding-mentores",
        siteName: "Preet Tech OPC Private Limited",
        type: "website",
        images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Business Onboarding & Mentorship — Preet Tech" }],
    },
    alternates: { canonical: "/services/onboarding-mentores" },
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Business Onboarding & Mentorship",
    "provider": { "@type": "Organization", "name": "Preet Tech OPC Private Limited", "url": "https://www.preettech.com" },
    "description": "Comprehensive business onboarding and mentorship programs for startups and new businesses entering the digital landscape.",
    "areaServed": "IN",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.preettech.com" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.preettech.com/services" },
        { "@type": "ListItem", "position": 3, "name": "Onboarding & Mentorship", "item": "https://www.preettech.com/services/onboarding-mentores" },
    ]
};

export default function OnboardingMentoresPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <OnboardingMentoresClient />
        </>
    );
}

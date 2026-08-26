import { Metadata } from "next";
import AppDevelopmentClient from "./AppDevelopmentClient";

export const metadata: Metadata = {
    title: "Mobile App Development Company in Haldwani | iOS & Android Apps | Preet Tech",
    description: "Preet Tech is a mobile app development company in Haldwani, Uttarakhand building native iOS, Android and cross-platform mobile applications for startups and businesses.",
    keywords: [
        "Mobile App Development Haldwani",
        "App Development Company Haldwani",
        "iOS App Development Haldwani",
        "Android App Development Haldwani",
        "Cross-Platform App Development Haldwani",
        "React Native Developer Haldwani",
        "Flutter App Development Haldwani",
        "Mobile App Development Uttarakhand",
        "App Developer Haldwani"
    ],
    openGraph: {
        title: "Mobile App Development Company in Haldwani | iOS & Android | Preet Tech",
        description: "Native iOS & Android apps built by expert developers in Haldwani. Cross-platform, scalable, and user-first mobile solutions.",
        url: "https://www.preettech.com/services/app-development",
        siteName: "Preet Tech OPC Private Limited",
        type: "website",
        locale: "en_IN",
        images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "App Development Company Haldwani — Preet Tech" }],
    },
    alternates: { canonical: "/services/app-development" },
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Mobile App Development",
    "provider": { "@type": "Organization", "name": "Preet Tech OPC Private Limited", "url": "https://www.preettech.com" },
    "description": "Native and cross-platform iOS and Android mobile app development services for startups and enterprises.",
    "areaServed": "Haldwani, Uttarakhand, India",
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "App Development Services",
        "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "iOS App Development" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Android App Development" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "React Native Cross-Platform Apps" } },
        ]
    }
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.preettech.com" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.preettech.com/services" },
        { "@type": "ListItem", "position": 3, "name": "App Development", "item": "https://www.preettech.com/services/app-development" },
    ]
};

export default function AppDevelopmentPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <AppDevelopmentClient />
        </>
    );
}

import { Metadata } from "next";
import EcommerceDevelopmentClient from "./EcommerceDevelopmentClient";

export const metadata: Metadata = {
    title: "E-commerce Website Development Company India | Online Store | Preet Tech",
    description: "Build a high-converting online store with Preet Tech. We develop custom e-commerce platforms, Shopify stores, multi-vendor marketplaces, and headless commerce solutions for Indian and global businesses.",
    keywords: [
        "ecommerce website development India",
        "online store development",
        "Shopify development company India",
        "custom ecommerce platform",
        "multi-vendor marketplace development",
        "headless commerce development",
        "WooCommerce development India",
        "ecommerce website design India",
        "D2C ecommerce development"
    ],
    openGraph: {
        title: "E-commerce Website Development Company India | Preet Tech",
        description: "High-converting online stores, Shopify development, and custom e-commerce platforms for Indian and global businesses.",
        url: "https://www.preettech.com/services/ecommerce-development",
        siteName: "Preet Tech OPC Private Limited",
        type: "website",
        images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "E-commerce Development — Preet Tech" }],
    },
    alternates: { canonical: "/services/ecommerce-development" },
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "E-commerce Website Development",
    "provider": { "@type": "Organization", "name": "Preet Tech OPC Private Limited", "url": "https://www.preettech.com" },
    "description": "End-to-end e-commerce development including custom platforms, Shopify, WooCommerce, and multi-vendor marketplaces.",
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "E-commerce Development Services",
        "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom E-commerce Platform Development" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Shopify Store Development" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Multi-Vendor Marketplace Development" } },
        ]
    }
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.preettech.com" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.preettech.com/services" },
        { "@type": "ListItem", "position": 3, "name": "E-commerce Development", "item": "https://www.preettech.com/services/ecommerce-development" },
    ]
};

export default function EcommerceDevelopmentPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <EcommerceDevelopmentClient />
        </>
    );
}

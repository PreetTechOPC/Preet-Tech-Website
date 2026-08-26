import type { Metadata } from "next";
import { companyInfo } from "./companyInfo";

interface PageMetadataOptions {
    title: string;
    description: string;
    canonical: string;
    keywords?: string[];
    ogImage?: string;
    noIndex?: boolean;
}

/**
 * Generates consistent, fully-formed Next.js Metadata for any page.
 * Includes OG, Twitter, canonical, and robots fields.
 */
export function generatePageMetadata({
    title,
    description,
    canonical,
    keywords = [],
    ogImage = "/og-image.png",
    noIndex = false,
}: PageMetadataOptions): Metadata {
    const canonicalUrl = `${companyInfo.url}${canonical}`;

    return {
        title,
        description,
        keywords,
        alternates: {
            canonical,
        },
        openGraph: {
            title,
            description,
            url: canonicalUrl,
            siteName: companyInfo.legalName,
            type: "website",
            locale: "en_IN",
            images: [
                {
                    url: ogImage,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [ogImage],
        },
        robots: noIndex
            ? { index: false, follow: false }
            : {
                  index: true,
                  follow: true,
                  googleBot: {
                      index: true,
                      follow: true,
                      "max-video-preview": -1,
                      "max-image-preview": "large",
                      "max-snippet": -1,
                  },
              },
    };
}

/**
 * Generates a LocalBusiness schema.org JSON-LD object for a given page/service.
 */
export function generateLocalBusinessSchema(overrides: {
    name?: string;
    description?: string;
    url?: string;
    serviceType?: string;
}) {
    return {
        "@context": "https://schema.org",
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": `${companyInfo.url}/#localbusiness`,
        name: overrides.name ?? companyInfo.legalName,
        description: overrides.description ?? companyInfo.description,
        url: overrides.url ?? companyInfo.url,
        telephone: companyInfo.telephone,
        email: companyInfo.email,
        logo: companyInfo.logo,
        image: companyInfo.logo,
        priceRange: companyInfo.priceRange,
        address: {
            "@type": "PostalAddress",
            streetAddress: companyInfo.address.streetAddress,
            addressLocality: companyInfo.address.addressLocality,
            addressRegion: companyInfo.address.addressRegion,
            postalCode: companyInfo.address.postalCode,
            addressCountry: companyInfo.address.addressCountry,
        },
        geo: {
            "@type": "GeoCoordinates",
            addressCountry: "IN",
        },
        areaServed: [
            {
                "@type": "City",
                name: "Haldwani",
            },
            {
                "@type": "State",
                name: "Uttarakhand",
            },
            {
                "@type": "Country",
                name: "India",
            },
        ],
        sameAs: companyInfo.sameAs,
        openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "09:00",
            closes: "18:00",
        },
    };
}

/**
 * Generates a BreadcrumbList schema.org JSON-LD object.
 */
export function generateBreadcrumbSchema(
    crumbs: { name: string; item: string }[]
) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: crumbs.map((crumb, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: crumb.name,
            item: crumb.item.startsWith("http")
                ? crumb.item
                : `${companyInfo.url}${crumb.item}`,
        })),
    };
}

/**
 * Generates a Service schema.org JSON-LD object.
 */
export function generateServiceSchema(service: {
    name: string;
    description: string;
    serviceType: string;
    areaServed?: string;
}) {
    return {
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: service.serviceType,
        name: service.name,
        description: service.description,
        provider: {
            "@type": "Organization",
            name: companyInfo.legalName,
            url: companyInfo.url,
        },
        areaServed: service.areaServed ?? "Haldwani, Uttarakhand, India",
    };
}

/**
 * Generates a FAQPage schema.org JSON-LD object.
 * Only use when FAQs are visibly present on the page.
 */
export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
            },
        })),
    };
}

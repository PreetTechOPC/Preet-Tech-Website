/**
 * Centralized company information for Preet Tech OPC Private Limited.
 * All values sourced from verified existing codebase data only.
 * Use this file as the single source of truth for business info in metadata, schema, and components.
 */

export const companyInfo = {
    name: "Preet Tech OPC Private Limited",
    brandName: "Preet Tech",
    legalName: "Preet Tech OPC Private Limited",
    url: "https://www.preettech.com",
    foundingYear: "2021",
    email: "info@preettech.com",
    telephone: "+91 97566 67397",
    priceRange: "₹₹",
    description:
        "Preet Tech is a technology company based in Haldwani, Uttarakhand, providing website development, mobile app development, custom software development, and digital solutions for startups and growing businesses.",
    address: {
        streetAddress: "near Krishna Hospital, Subhash Nagar",
        addressLocality: "Haldwani",
        addressRegion: "Uttarakhand",
        postalCode: "263139",
        addressCountry: "IN",
    },
    geo: {
        city: "Haldwani",
        state: "Uttarakhand",
        country: "India",
    },
    socialProfiles: {
        facebook: "https://www.facebook.com/Preetinfotech/",
        instagram: "https://www.instagram.com/preettech/",
        linkedin: "https://www.linkedin.com/company/preet-tech",
    },
    sameAs: [
        "https://www.facebook.com/Preetinfotech/",
        "https://www.instagram.com/preettech/",
        "https://www.linkedin.com/company/preet-tech",
    ],
    logo: "https://www.preettech.com/icon.png",
    primaryServices: [
        "Website Development",
        "Mobile App Development",
        "Custom Software Development",
    ],
    additionalServices: [
        "E-commerce Development",
        "SaaS Development",
        "CRM/ERP Systems",
        "Social Media Handling",
        "Content Creation",
        "Performance Marketing",
        "AI Solutions",
        "Business Tools",
    ],
    technologies: [
        "Next.js",
        "React",
        "Node.js",
        "TypeScript",
        "React Native",
        "Flutter",
        "Three.js",
        "Framer Motion",
        "Tailwind CSS",
        "MongoDB",
        "PostgreSQL",
        "Firebase",
    ],
    serviceArea: {
        primary: "Haldwani, Uttarakhand, India",
        secondary: "Remote and global clients",
    },
} as const;

/** Full street address formatted as a single string */
export const formattedAddress = `${companyInfo.address.streetAddress}, ${companyInfo.address.addressLocality}, ${companyInfo.address.addressRegion} ${companyInfo.address.postalCode}`;

/** Structured schema.org address object */
export const schemaAddress = {
    "@type": "PostalAddress",
    streetAddress: companyInfo.address.streetAddress,
    addressLocality: companyInfo.address.addressLocality,
    addressRegion: companyInfo.address.addressRegion,
    postalCode: companyInfo.address.postalCode,
    addressCountry: companyInfo.address.addressCountry,
};

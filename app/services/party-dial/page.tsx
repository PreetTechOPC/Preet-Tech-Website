import { Metadata } from "next";
import PartyDialClient from "./PartyDialClient";

export const metadata: Metadata = {
    title: "Party Dial | Event & Party Management Platform | Preet Tech",
    description: "Discover Party Dial by Preet Tech — a smart event and party management platform that connects hosts with vendors, venues, and entertainment for seamless event planning experiences.",
    keywords: [
        "party dial platform",
        "event management software India",
        "party planning app",
        "event booking platform",
        "vendor management for events",
        "party planning platform India",
        "event technology solution",
        "online event management"
    ],
    openGraph: {
        title: "Party Dial — Smart Event & Party Management Platform | Preet Tech",
        description: "Plan and manage parties and events effortlessly with Party Dial. Connect hosts with vendors, venues, and entertainment.",
        url: "https://www.preettech.com/services/party-dial",
        siteName: "Preet Tech OPC Private Limited",
        type: "website",
        images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Party Dial — Event Management Platform" }],
    },
    alternates: { canonical: "/services/party-dial" },
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Party Dial",
    "applicationCategory": "EventManagement",
    "operatingSystem": "Web",
    "provider": { "@type": "Organization", "name": "Preet Tech OPC Private Limited", "url": "https://www.preettech.com" },
    "description": "Party Dial is an event and party management platform connecting hosts with vendors, venues, and services for seamless event planning.",
    "url": "https://www.preettech.com/services/party-dial",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.preettech.com" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.preettech.com/services" },
        { "@type": "ListItem", "position": 3, "name": "Party Dial", "item": "https://www.preettech.com/services/party-dial" },
    ]
};

export default function PartyDialPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <PartyDialClient />
        </>
    );
}

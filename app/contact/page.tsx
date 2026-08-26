import { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
    title: 'Contact Us | IT Services & Support | Preet Tech',
    description: 'Get in touch with Preet Tech OPC Private Limited for enterprise software development, digital marketing, and AI solutions in Haldwani, India and globally.',
    keywords: [
        'Contact Preet Tech',
        'IT services Haldwani',
        'software development company contact',
        'hire developers India',
        'Preet Tech address',
        'Preet Tech phone number'
    ],
    openGraph: {
        title: 'Contact Preet Tech | IT Services & Support',
        description: 'Get in touch with Preet Tech OPC Private Limited for enterprise software development and AI solutions.',
        url: 'https://www.preettech.com/contact',
        siteName: 'Preet Tech OPC Private Limited',
        type: 'website',
        images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Contact Preet Tech' }],
    },
    alternates: { canonical: '/contact' },
};

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Preet Tech OPC Private Limited",
    "image": "https://www.preettech.com/icon.png",
    "@id": "https://www.preettech.com",
    "url": "https://www.preettech.com",
    "telephone": "+91 97566 67397",
    "email": "info@preettech.com",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Near Krishna Hospital, Subhash Nagar",
        "addressLocality": "Haldwani",
        "addressRegion": "Uttarakhand",
        "postalCode": "263139",
        "addressCountry": "IN"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": 29.2104,
        "longitude": 79.5239
    },
    "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ],
        "opens": "09:00",
        "closes": "18:00"
    },
    "sameAs": [
        "https://www.facebook.com/Preetinfotech/",
        "https://www.instagram.com/preettech/",
        "https://www.linkedin.com/company/preet-tech"
    ]
};

export default function ContactPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />
            <ContactClient />
        </>
    );
}

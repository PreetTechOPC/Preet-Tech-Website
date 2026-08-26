import { Metadata } from 'next';
import LocationClient from './LocationClient';

// Helper to format city slugs to Title Case
const formatCity = (slug: string) => {
    return slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};

type Props = {
    params: Promise<{ city: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { city } = await params;
    const formattedCity = formatCity(city);
    
    return {
        title: `Website & Software Development Company in ${formattedCity} | Preet Tech`,
        description: `Looking for the best website and software development company in ${formattedCity}? Preet Tech delivers enterprise-grade IT solutions, AI automation, and SEO services.`,
        keywords: [
            `Website Development Company in ${formattedCity}`,
            `Software Development Company in ${formattedCity}`,
            `App Development Company in ${formattedCity}`,
            `IT Company in ${formattedCity}`,
            `SEO Agency in ${formattedCity}`,
            `Digital Marketing ${formattedCity}`
        ],
        alternates: {
            canonical: `/locations/${city}`
        },
        openGraph: {
            title: `Top IT Company in ${formattedCity} | Preet Tech`,
            description: `Transform your business with enterprise software, AI solutions, and digital marketing services in ${formattedCity}.`,
            url: `https://www.preettech.com/locations/${city}`,
            siteName: 'Preet Tech OPC Private Limited',
            images: [{ url: '/og-image.png', width: 1200, height: 630, alt: `IT Services in ${formattedCity}` }],
        }
    };
}

export default async function LocationPage({ params }: Props) {
    const { city } = await params;
    const formattedCity = formatCity(city);

    // Schema specifically tailored for local SEO
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": `Preet Tech - ${formattedCity}`,
        "description": `Leading IT and Software Development services serving ${formattedCity}.`,
        "url": `https://www.preettech.com/locations/${city}`,
        "telephone": "+91 97566 67397",
        "email": "info@preettech.com",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": formattedCity,
            "addressCountry": "IN"
        },
        "sameAs": [
            "https://www.facebook.com/Preetinfotech/",
            "https://www.instagram.com/preettech/",
            "https://www.linkedin.com/company/preet-tech"
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />
            <LocationClient city={formattedCity} />
        </>
    );
}

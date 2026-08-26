import { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
    title: "Website Development Company in Haldwani | App & Software Development | Preet Tech",
    description: "Preet Tech is a Haldwani-based technology company providing custom website development, mobile app development, software development and digital solutions for startups and businesses in Uttarakhand and beyond.",
    keywords: [
        "Website Development Company in Haldwani",
        "Web Development Company Haldwani",
        "Website Designer in Haldwani",
        "App Development Company Haldwani",
        "Software Development Company Haldwani",
        "IT Company in Haldwani",
        "Custom Website Development Haldwani",
        "Mobile App Development Haldwani",
        "Custom Software Development Haldwani",
        "Best IT Company in Haldwani",
        "Preet Tech",
        "Preet Tech OPC Private Limited",
    ],
    alternates: {
        canonical: "/",
    },
    openGraph: {
        title: "Website Development Company in Haldwani | App & Software Development | Preet Tech",
        description: "Preet Tech is a Haldwani-based technology company providing custom website development, mobile app development, software development and digital solutions for startups and businesses.",
        url: "https://www.preettech.com",
        siteName: "Preet Tech OPC Private Limited",
        images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Preet Tech — Website, App & Software Development Company in Haldwani" }],
        locale: "en_IN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Website Development Company in Haldwani | Preet Tech",
        description: "Preet Tech is a Haldwani-based technology company building websites, apps and custom software for startups and businesses.",
        images: ["/og-image.png"],
    },
};

// ISR: Revalidate every hour — much faster than force-dynamic, still fresh
export const revalidate = 3600;

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "Which is the best website development company in Haldwani?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Preet Tech OPC Private Limited is a leading website development company in Haldwani, Uttarakhand. Since 2021, we have built high-performance websites, mobile apps, and custom software for startups and businesses across Uttarakhand and beyond."
            }
        },
        {
            "@type": "Question",
            "name": "How much does website development cost in Haldwani?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Website development costs in Haldwani vary by scope. Our Eco Website packages are budget-friendly and ideal for small businesses and startups. Custom websites, e-commerce platforms, and advanced web applications are priced based on features and complexity. Contact us for a free, transparent quote."
            }
        },
        {
            "@type": "Question",
            "name": "What services does Preet Tech provide?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Preet Tech provides website development, mobile app development, custom software development, e-commerce development, SaaS development, CRM/ERP systems, social media management, content creation, and performance marketing. We serve startups and businesses in Haldwani, Uttarakhand, and remotely across India and globally."
            }
        },
        {
            "@type": "Question",
            "name": "Does Preet Tech serve businesses outside Haldwani?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. While Preet Tech is based in Haldwani, Uttarakhand, we work with clients across India and globally. We offer complete remote project collaboration including discovery, design, development, testing, deployment, and ongoing support."
            }
        },
        {
            "@type": "Question",
            "name": "How can I start a project with Preet Tech?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "You can start by booking a free consultation through our Contact page or emailing info@preettech.com. Our team will schedule a discovery session within 24 hours to discuss your goals, timeline, and budget."
            }
        },
        {
            "@type": "Question",
            "name": "What is your typical project turnaround time?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Eco Website packages can go live in 7–14 days. Standard custom web applications take 4–8 weeks. Large-scale enterprise software and SaaS platforms range from 3–6 months depending on scope and complexity."
            }
        },
        {
            "@type": "Question",
            "name": "Do you offer post-launch support and maintenance?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. All projects include a post-launch support period, and we offer ongoing maintenance retainers for bug fixes, security updates, performance optimization, and feature additions. We are a long-term technology partner, not a one-time vendor."
            }
        }
    ]
};

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "name": "Preet Tech OPC Private Limited",
    "alternateName": "Preet Tech",
    "url": "https://www.preettech.com",
    "logo": "https://www.preettech.com/icon.png",
    "telephone": "+91 97566 67397",
    "email": "info@preettech.com",
    "foundingDate": "2021",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "near Krishna Hospital, Subhash Nagar",
        "addressLocality": "Haldwani",
        "addressRegion": "Uttarakhand",
        "postalCode": "263139",
        "addressCountry": "IN"
    },
    "areaServed": [
        { "@type": "City", "name": "Haldwani" },
        { "@type": "State", "name": "Uttarakhand" },
        { "@type": "Country", "name": "India" }
    ],
    "sameAs": [
        "https://www.facebook.com/Preetinfotech/",
        "https://www.instagram.com/preettech/",
        "https://www.linkedin.com/company/preet-tech"
    ],
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Technology Services",
        "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Website Development" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mobile App Development" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom Software Development" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "E-commerce Development" } }
        ]
    }
};

export default async function Home() {
    const testimonials: any[] = [];
    const blogPosts: any[] = [];
    
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <HomeClient initialTestimonials={testimonials} initialInsights={blogPosts} />
        </>
    );
}

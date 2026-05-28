import { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
    title: "Preet Tech | Next-Gen IT Company & Digital Transformation Partner",
    description: "Empower your business with Preet Tech, a leading IT Company specializing in custom software development, AI automation, and high-performance digital marketing. We deliver scalable solutions for global growth.",
    keywords: [
        "Preet Tech", "IT Company", "Next-Gen Software Solutions", "AI Automation Services",
        "Custom Web Development", "Digital Transformation", "Performance Marketing Agency",
        "Scalable Business Solutions", "Enterprise IT Services", "Best IT Agency"
    ],
    alternates: {
        canonical: "/",
    },
};

export const dynamic = "force-dynamic";

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "What services does Preet Tech provide?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Preet Tech provides a comprehensive range of services including custom software development, AI automation solutions, web and mobile app development, performance marketing, and enterprise digital transformation."
            }
        },
        {
            "@type": "Question",
            "name": "Does Preet Tech offer AI automation for small businesses?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, Preet Tech specializes in scalable AI solutions that can be tailored for both small businesses looking to automate tasks and large enterprises seeking complex digital transformation."
            }
        },
        {
            "@type": "Question",
            "name": "How can I start a project with Preet Tech?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "You can start by booking a free consultation through our website or contacting our team directly to discuss your business requirements and growth goals."
            }
        }
    ]
};

import { hygraphRequest } from "@/lib/hygraph";

export default async function Home() {
    let testimonials = [];
    let blogPosts = [];
    try {
        const data = await hygraphRequest(`
            query {
                testimonials(orderBy: createdAt_DESC) {
                    id
                    authorName
                    company
                    quote
                }
                blogPosts(orderBy: createdAt_DESC, first: 10) {
                    id
                    title
                    slug
                    excerpt
                    category
                    date
                    readTime
                    featuredImage {
                        url
                    }
                }
            }
        `);
        testimonials = data?.testimonials || [];
        blogPosts = data?.blogPosts || [];
    } catch(e) {
        console.error("Failed to fetch homepage data:", e);
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <HomeClient initialTestimonials={testimonials} initialInsights={blogPosts} />
        </>
    );
}

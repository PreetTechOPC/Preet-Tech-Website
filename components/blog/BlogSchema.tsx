import React from 'react';
import { BlogPost } from '@/lib/blog-data';

interface BlogSchemaProps {
    post: BlogPost;
}

export default function BlogSchema({ post }: BlogSchemaProps) {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.preettech.com';
    const schema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": post.title,
        "image": post.featuredImage.startsWith('http') ? post.featuredImage : `${baseUrl}${post.featuredImage}`,
        "author": {
            "@type": "Person",
            "name": post.author.name,
            "jobTitle": post.author.role
        },
        "publisher": {
            "@type": "Organization",
            "name": "Preet Tech OPC Private Limited",
            "logo": {
                "@type": "ImageObject",
                "url": "/logo-preet-tech.png"
            }
        },
        "datePublished": post.date,
        "description": post.excerpt,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `${baseUrl}/blog/${post.slug}`
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

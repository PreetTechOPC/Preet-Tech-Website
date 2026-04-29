import React from 'react';
import { BlogPost } from '@/lib/blog-data';

interface BlogSchemaProps {
    post: BlogPost;
}

export default function BlogSchema({ post }: BlogSchemaProps) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": post.title,
        "image": post.featuredImage, // In a real app this would be a full URL
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
            "@id": `https://preettech.com/blog/${post.slug}`
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

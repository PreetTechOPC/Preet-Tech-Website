import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BLOG_POSTS, BlogPost } from '@/lib/blog-data';
import BlogPostContent from '@/components/blog/BlogPostContent';
import { getPostBySlug } from '@/lib/blog-helpers';

export const dynamic = 'force-dynamic';

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return BLOG_POSTS.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const { post } = await getPostBySlug(slug);

    if (!post) {
        return {
            title: 'Post Not Found | Preet Tech OPC Private Limited',
        };
    }

    return {
        title: `${post.seo.title} | Preet Tech OPC Private Limited`,
        description: post.seo.description,
        keywords: post.seo.keywords,
        openGraph: {
            title: post.seo.title,
            description: post.seo.description,
            type: 'article',
            publishedTime: post.date,
            authors: [post.author.name],
            images: [
                {
                    url: post.featuredImage,
                    width: 1200,
                    height: 630,
                    alt: post.title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: post.seo.title,
            description: post.seo.description,
            images: [post.featuredImage],
        },
        alternates: {
            canonical: `/blog/${post.slug}`,
        },
    };
}

export default async function BlogPostPage({ params }: PageProps) {
    const { slug } = await params;
    const { post, allPosts } = await getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.preettech.com';

    // Article JSON-LD schema for E-E-A-T signals
    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: post.title,
        description: post.seo.description,
        image: post.featuredImage,
        datePublished: post.date,
        dateModified: post.date,
        author: {
            '@type': 'Person',
            name: post.author.name,
        },
        publisher: {
            '@type': 'Organization',
            name: 'Preet Tech OPC Private Limited',
            logo: {
                '@type': 'ImageObject',
                url: `${baseUrl}/icon.png`,
            },
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `${baseUrl}/blog/${post.slug}`,
        },
    };

    // BreadcrumbList schema for rich results
    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
            { '@type': 'ListItem', position: 2, name: 'Blog', item: `${baseUrl}/blog` },
            { '@type': 'ListItem', position: 3, name: post.title, item: `${baseUrl}/blog/${post.slug}` },
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <BlogPostContent post={post} allPosts={allPosts} />
        </>
    );
}


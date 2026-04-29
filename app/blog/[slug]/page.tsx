import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BLOG_POSTS } from '@/lib/blog-data';
import BlogPostContent from '@/components/blog/BlogPostContent';

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
    const post = BLOG_POSTS.find((p) => p.slug === slug);

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
            canonical: `https://preettech.com/blog/${post.slug}`,
        },
    };
}

export default async function BlogPostPage({ params }: PageProps) {
    const { slug } = await params;
    const post = BLOG_POSTS.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    return <BlogPostContent post={post} />;
}

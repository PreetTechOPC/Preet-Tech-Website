import { MetadataRoute } from 'next';
import { BLOG_POSTS } from '@/lib/blog-data';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://preettech.com';

    const staticPages: string[] = [
        '',
        '/about',
        '/contact',
        '/blog',
        '/services',
        '/services/advance-website',
        '/services/app-development',
        '/services/business-tools',
        '/services/content-creation',
        '/services/eco-website',
        '/services/onboarding-mentores',
        '/services/partnership-marketing',
        '/services/party-dial',
        '/services/performance-marketing',
        '/services/social-media-handling',
        '/services/software-development',
        '/services/start-your-business',
    ];

    const staticSitemapEntries: MetadataRoute.Sitemap = staticPages.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'daily' : 'weekly',
        priority: route === '' ? 1 : 0.8,
    }));

    const dynamicBlogEntries: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: post.date ? new Date(post.date) : new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
    }));

    return [...staticSitemapEntries, ...dynamicBlogEntries];
}

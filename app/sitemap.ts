import { MetadataRoute } from 'next';
import { getCombinedBlogPosts } from '@/lib/blog-helpers';

const SERVICE_ROUTES = [
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
    '/services/ecommerce-development',
    '/services/ai-solutions',
    '/services/saas-development',
    '/services/crm-erp-systems',
];

const LEGAL_ROUTES = [
    '/privacy-policy',
    '/terms-of-service',
    '/cookie-policy',
];

// Local SEO landing pages — Haldwani targeted (high commercial intent)
const LOCAL_ROUTES = [
    '/website-development-haldwani',
    '/app-development-haldwani',
    '/software-development-haldwani',
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.preettech.com';

    // Homepage — highest priority, crawled daily
    const homepage: MetadataRoute.Sitemap = [{
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 1,
    }];

    // Core pages — high priority
    const corePages: MetadataRoute.Sitemap = ['/about', '/contact', '/careers', '/case-studies'].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    // Services index page
    const servicesIndex: MetadataRoute.Sitemap = [{
        url: `${baseUrl}/services`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
    }];

    // Service sub-pages — very high priority (commercial intent)
    const servicePages: MetadataRoute.Sitemap = SERVICE_ROUTES.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.85,
    }));

    // Blog index
    const blogIndex: MetadataRoute.Sitemap = [{
        url: `${baseUrl}/blog`,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 0.8,
    }];

    // Legal pages — lowest priority, rarely changes
    const legalPages: MetadataRoute.Sitemap = LEGAL_ROUTES.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'yearly' as const,
        priority: 0.2,
    }));

    // Dynamic blog posts
    const posts = await getCombinedBlogPosts();
    const dynamicBlogEntries: MetadataRoute.Sitemap = posts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: post.date ? new Date(post.date) : new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    // Local SEO pages — Haldwani targeted
    const localPages: MetadataRoute.Sitemap = LOCAL_ROUTES.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.9,
    }));

    return [
        ...homepage,
        ...localPages,
        ...corePages,
        ...servicesIndex,
        ...servicePages,
        ...blogIndex,
        ...dynamicBlogEntries,
        ...legalPages,
    ];
}


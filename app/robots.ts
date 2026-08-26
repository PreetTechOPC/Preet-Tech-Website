import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.preettech.com';
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/', '/pay/', '/Quotation/', '/_next/'],
            },
            {
                userAgent: ['GPTBot', 'ChatGPT-User', 'ClaudeBot', 'Claude-Web', 'PerplexityBot', 'Google-Extended', 'Amazonbot', 'Bytespider'],
                allow: '/',
                disallow: ['/api/', '/pay/'],
            }
        ],
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}

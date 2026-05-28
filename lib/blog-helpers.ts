import { BLOG_POSTS, BlogPost } from '@/lib/blog-data';
import { hygraphRequest } from '@/lib/hygraph';

export function mapHygraphPost(p: any): BlogPost {
  return {
    id: p.id,
    title: p.title,
    slug: p.slug || '',
    excerpt: p.excerpt || '',
    content: p.content || '',
    category: p.category || 'AI & Tech',
    author: {
      name: "Preet Singh",
      role: "CEO & Growth Strategist",
      avatar: "/images/team/preet.jpg"
    },
    date: p.date || new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    readTime: p.readTime || '5 min read',
    featuredImage: p.featuredImage?.url || '/images/services/software-development.png',
    isFeatured: false,
    tags: p.tags ? p.tags.split(',').map((t: string) => t.trim()).filter((t: string) => t.length > 0) : [],
    seo: {
      title: p.seoTitle || p.title,
      description: p.seoDescription || p.excerpt || p.title,
      keywords: p.seoKeywords ? p.seoKeywords.split(',').map((t: string) => t.trim()).filter((t: string) => t.length > 0) : [p.category || 'tech']
    }
  };
}

export async function getCombinedBlogPosts(): Promise<BlogPost[]> {
  try {
    const data = await hygraphRequest(`
      query {
        blogPosts(orderBy: createdAt_DESC) {
          id
          title
          slug
          excerpt
          content
          category
          date
          readTime
          tags
          featuredImage {
            url
          }
          seoTitle
          seoDescription
          seoKeywords
        }
      }
    `);

    const hygraphPosts = (data?.blogPosts || []).map(mapHygraphPost);
    const hygraphSlugs = new Set(hygraphPosts.map(p => p.slug));
    const uniqueLocalPosts = BLOG_POSTS.filter(p => !hygraphSlugs.has(p.slug));
    
    return [...hygraphPosts, ...uniqueLocalPosts];
  } catch (error) {
    console.error("Failed to fetch blog posts from Hygraph, using fallback hardcoded posts:", error);
    return [...BLOG_POSTS];
  }
}

export async function getPostBySlug(slug: string): Promise<{ post: BlogPost | null; allPosts: BlogPost[] }> {
  const allPosts = await getCombinedBlogPosts();
  const post = allPosts.find(p => p.slug === slug) || null;
  return { post, allPosts };
}


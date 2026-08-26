import { BLOG_POSTS, BlogPost } from '@/lib/blog-data';

export async function getCombinedBlogPosts(): Promise<BlogPost[]> {
  const posts = [...BLOG_POSTS];
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPostBySlug(slug: string): Promise<{ post: BlogPost | null; allPosts: BlogPost[] }> {
  const allPosts = await getCombinedBlogPosts();
  const post = allPosts.find(p => p.slug === slug) || null;
  return { post, allPosts };
}


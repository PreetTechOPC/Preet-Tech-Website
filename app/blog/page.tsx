import React from 'react';
import BlogClient from './BlogClient';
import { getCombinedBlogPosts } from '@/lib/blog-helpers';

export const dynamic = 'force-dynamic';

export default async function BlogPage() {
  const combinedPosts = await getCombinedBlogPosts();
  return <BlogClient initialPosts={combinedPosts} />;
}

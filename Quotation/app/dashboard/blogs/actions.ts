'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { hygraphRequest } from '@/lib/hygraph'

export async function createBlog(prevState: any, formData: FormData) {
  try {
    const title = formData.get('title') as string
    const slug = formData.get('slug') as string
    const excerpt = formData.get('excerpt') as string
    const content = formData.get('content') as string
    const category = formData.get('category') as string
    const readTime = formData.get('readTime') as string
    const featuredImage = formData.get('featuredImage') as string
    const tagsRaw = formData.get('tags') as string
    
    const seoTitle = formData.get('seoTitle') as string
    const seoDescription = formData.get('seoDescription') as string
    const seoKeywords = formData.get('seoKeywords') as string

    if (!title || !slug || !content || !excerpt) {
      return { error: 'Title, Slug, Excerpt, and Content are required fields' }
    }

    // Format current date as "Month Day, Year" e.g., "Feb 20, 2026"
    const dateOptions: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric', year: 'numeric' }
    const currentDate = new Date().toLocaleDateString('en-US', dateOptions)

    // Handle featuredImage Asset relation connection.
    // If it's a 25-character Hygraph asset ID, connect it. Otherwise, leave it empty.
    let featuredImageVar = null
    if (featuredImage && featuredImage.trim().length === 25) {
      featuredImageVar = { connect: { id: featuredImage.trim() } }
    }

    const createMutation = `
      mutation CreateBlogPost(
        $title: String!
        $slug: String
        $excerpt: String!
        $content: String!
        $category: String
        $date: String
        $readTime: String
        $tags: String
        $featuredImage: AssetCreateOneInlineInput
        $seoTitle: String!
        $seoDescription: String!
        $seoKeywords: String
      ) {
        createBlogPost(data: {
          title: $title,
          slug: $slug,
          excerpt: $excerpt,
          content: $content,
          category: $category,
          date: $date,
          readTime: $readTime,
          tags: $tags,
          featuredImage: $featuredImage,
          seoTitle: $seoTitle,
          seoDescription: $seoDescription,
          seoKeywords: $seoKeywords
        }) {
          id
        }
      }
    `

    const data = await hygraphRequest(createMutation, {
      title,
      slug,
      excerpt,
      content,
      category,
      date: currentDate,
      readTime: readTime || '5 min read',
      tags: tagsRaw || '',
      featuredImage: featuredImageVar,
      seoTitle: seoTitle || title,
      seoDescription: seoDescription || excerpt,
      seoKeywords: seoKeywords || category
    })

    const createdId = data?.createBlogPost?.id

    if (createdId) {
      const publishMutation = `
        mutation PublishBlogPost($id: ID!) {
          publishBlogPost(where: { id: $id }, to: PUBLISHED) {
            id
          }
        }
      `
      await hygraphRequest(publishMutation, { id: createdId })
    }

    revalidatePath('/dashboard/blogs')
  } catch (error: any) {
    console.error('Failed to create blog:', error)
    return { error: error.message || 'Failed to create blog' }
  }

  redirect('/dashboard/blogs')
}

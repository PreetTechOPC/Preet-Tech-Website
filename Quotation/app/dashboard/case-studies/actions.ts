'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { hygraphRequest } from '@/lib/hygraph'

export async function createCaseStudy(prevState: any, formData: FormData) {
  try {
    const title = formData.get('title') as string
    const slug = formData.get('slug') as string
    const client = formData.get('client') as string
    const excerpt = formData.get('excerpt') as string
    const content = formData.get('content') as string
    const category = formData.get('category') as string
    const featuredImage = formData.get('featuredImage') as string
    const tagsRaw = formData.get('tags') as string
    
    const stat1Label = formData.get('stat1Label') as string
    const stat1Value = formData.get('stat1Value') as string
    const stat2Label = formData.get('stat2Label') as string
    const stat2Value = formData.get('stat2Value') as string
    const stat3Label = formData.get('stat3Label') as string
    const stat3Value = formData.get('stat3Value') as string

    const seoTitle = formData.get('seoTitle') as string
    const seoDescription = formData.get('seoDescription') as string
    const seoKeywords = formData.get('seoKeywords') as string

    if (!title || !slug || !content) {
      return { error: 'Title, Slug, and Content are required fields' }
    }

    // Process tags into array
    const tags = tagsRaw ? tagsRaw.split(',').map(t => t.trim()).filter(t => t.length > 0) : []

    const createMutation = `
      mutation CreateCaseStudy(
        $title: String!
        $slug: String!
        $client: String
        $excerpt: String!
        $content: String!
        $category: String
        $featuredImage: String
        $tags: [String!]
        $stat1Label: String, $stat1Value: String
        $stat2Label: String, $stat2Value: String
        $stat3Label: String, $stat3Value: String
        $seoTitle: String!
        $seoDescription: String!
        $seoKeywords: String
      ) {
        createCaseStudy(data: {
          title: $title,
          slug: $slug,
          client: $client,
          excerpt: $excerpt,
          content: $content,
          category: $category,
          featuredImage: $featuredImage,
          tags: $tags,
          stat1Label: $stat1Label, stat1Value: $stat1Value,
          stat2Label: $stat2Label, stat2Value: $stat2Value,
          stat3Label: $stat3Label, stat3Value: $stat3Value,
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
      client: client || 'Client Partner',
      excerpt: excerpt || title,
      content,
      category,
      featuredImage: featuredImage || '/images/services/software-development.png',
      tags,
      stat1Label: stat1Label || '',
      stat1Value: stat1Value || '',
      stat2Label: stat2Label || '',
      stat2Value: stat2Value || '',
      stat3Label: stat3Label || '',
      stat3Value: stat3Value || '',
      seoTitle: seoTitle || title,
      seoDescription: seoDescription || excerpt || title,
      seoKeywords: seoKeywords || category
    })

    const createdId = data?.createCaseStudy?.id

    if (createdId) {
      const publishMutation = `
        mutation PublishCaseStudy($id: ID!) {
          publishCaseStudy(where: { id: $id }, to: PUBLISHED) {
            id
          }
        }
      `
      await hygraphRequest(publishMutation, { id: createdId })
    }

    revalidatePath('/dashboard/case-studies')
  } catch (error: any) {
    console.error('Failed to create case study:', error)
    return { error: error.message || 'Failed to create case study' }
  }

  redirect('/dashboard/case-studies')
}

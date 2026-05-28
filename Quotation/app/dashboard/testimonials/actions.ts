'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { hygraphRequest } from '@/lib/hygraph'

export async function createTestimonial(prevState: any, formData: FormData) {
  try {
    const authorName = formData.get('authorName') as string
    const company = formData.get('company') as string
    const quote = formData.get('quote') as string

    if (!authorName || !quote) {
      return { error: 'Author Name and Quote are required' }
    }

    const createMutation = `
      mutation CreateTestimonial($authorName: String!, $company: String, $quote: String!) {
        createTestimonial(data: {authorName: $authorName, company: $company, quote: $quote}) {
          id
        }
      }
    `

    const data = await hygraphRequest(createMutation, { authorName, company, quote })
    const createdId = data?.createTestimonial?.id

    if (createdId) {
      const publishMutation = `
        mutation PublishTestimonial($id: ID!) {
          publishTestimonial(where: { id: $id }, to: PUBLISHED) {
            id
          }
        }
      `
      await hygraphRequest(publishMutation, { id: createdId })
    }

    revalidatePath('/dashboard/testimonials')
  } catch (error: any) {
    return { error: error.message || 'Failed to create testimonial' }
  }
  
  redirect('/dashboard/testimonials')
}

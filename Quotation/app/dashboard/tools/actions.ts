'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { hygraphRequest } from '@/lib/hygraph'

export async function createTool(prevState: any, formData: FormData) {
  try {
    const name = formData.get('name') as string
    const variant = formData.get('variant') as string
    const duration = formData.get('duration') as string
    const category = formData.get('category') as string
    const description = formData.get('description') as string
    const originalPrice = formData.get('originalPrice') as string
    const discountPrice = formData.get('discountPrice') as string
    const discountBadge = formData.get('discountBadge') as string
    const badge = formData.get('badge') as string
    const status = formData.get('status') as string

    if (!name || !variant || !duration || !category || !originalPrice || !discountPrice) {
      return { error: 'Name, Variant, Duration, Category, Original Price, and Discount Price are required fields' }
    }

    const createMutation = `
      mutation CreateBusinessTool(
        $name: String!
        $variant: String!
        $duration: String!
        $category: String!
        $description: String!
        $originalPrice: String!
        $discountPrice: String!
        $discountBadge: String!
        $badge: String
        $status: String!
      ) {
        createBusinessTool(data: {
          name: $name,
          variant: $variant,
          duration: $duration,
          category: $category,
          description: $description,
          originalPrice: $originalPrice,
          discountPrice: $discountPrice,
          discountBadge: $discountBadge,
          badge: $badge,
          status: $status
        }) {
          id
        }
      }
    `

    const data = await hygraphRequest(createMutation, {
      name,
      variant,
      duration,
      category,
      description: description || '',
      originalPrice,
      discountPrice,
      discountBadge: discountBadge || '',
      badge: badge || '',
      status: status || 'Active'
    })

    const createdId = data?.createBusinessTool?.id

    if (createdId) {
      const publishMutation = `
        mutation PublishBusinessTool($id: ID!) {
          publishBusinessTool(where: { id: $id }, to: PUBLISHED) {
            id
          }
        }
      `
      await hygraphRequest(publishMutation, { id: createdId })
    }

    revalidatePath('/dashboard/tools')
  } catch (error: any) {
    console.error('Failed to create business tool:', error)
    return { error: error.message || 'Failed to create business tool' }
  }

  redirect('/dashboard/tools')
}

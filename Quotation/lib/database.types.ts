export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      clients: {
        Row: {
          id: string
          created_at: string
          name: string
          company: string | null
          email: string | null
          phone: string | null
          address: string | null
          gst_number: string | null
          city: string | null
          state: string | null
          country: string | null
        }
        Insert: Omit<Database['public']['Tables']['clients']['Row'], 'id' | 'created_at'>
        Update: Partial<Database['public']['Tables']['clients']['Insert']>
      }
      services: {
        Row: {
          id: string
          created_at: string
          category: string
          name: string
          description: string | null
          default_price: number
          tax_rate: number
        }
        Insert: Omit<Database['public']['Tables']['services']['Row'], 'id' | 'created_at'>
        Update: Partial<Database['public']['Tables']['services']['Insert']>
      }
      quotations: {
        Row: {
          id: string
          created_at: string
          quote_number: string
          client_id: string
          status: 'Draft' | 'Sent' | 'Viewed' | 'Approved' | 'Rejected'
          subtotal: number
          discount: number
          tax: number
          grand_total: number
          valid_until: string | null
          terms: string | null
          notes: string | null
        }
        Insert: Omit<Database['public']['Tables']['quotations']['Row'], 'id' | 'created_at'>
        Update: Partial<Database['public']['Tables']['quotations']['Insert']>
      }
      quotation_items: {
        Row: {
          id: string
          created_at: string
          quote_id: string
          service_name: string
          description: string | null
          quantity: number
          rate: number
          discount: number
          tax: number
          amount: number
        }
        Insert: Omit<Database['public']['Tables']['quotation_items']['Row'], 'id' | 'created_at'>
        Update: Partial<Database['public']['Tables']['quotation_items']['Insert']>
      }
    }
  }
}

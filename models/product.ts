export interface Product {
  brandId: string
  brandName?: string // For now I've gone with embedded as a product can't exist without a brand, and we only care about showing the brandName
  name: string
  description: string
}

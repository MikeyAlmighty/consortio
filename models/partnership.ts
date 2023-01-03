export type Partnership = {
  id?: String
  description: String
  brandId: String
  influencerId: String
  productIds: String[] // multiple product(Id)s
  partnershipDate: Date
  terminationdate?: Date
  isActive: boolean
}

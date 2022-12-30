// TODO: Abstract types on api into a separate npm package (/repo)
export interface Influencer {
  firstName: string
  lastName: string
  handle: string
  posts: number
  clicks: number
  socialDetails: {
    email: string
    instagram?: string
    tiktok?: string
    youtube?: string
  }
}

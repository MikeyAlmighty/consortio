// TODO: Abstract types on api into a separate npm package (/repo)
export interface Influencer {
  firstName: string
  lastName: string
  posts: number
  clicks: number
  socialDetails: {
    handle: string
    email: string
    instagram?: string
    tiktok?: string
    youtube?: string
  }
}

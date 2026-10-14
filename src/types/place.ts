export type PlaceCategory = 'praca' | 'cachoeira' | 'praia'

export interface PlaceImage {
  src: string
  alt: string
  caption: string
}

export interface Place {
  slug: string
  category: PlaceCategory
  name: string
  tagline: string
  handwritten: string
  about: string
  landmark: {
    title: string
    description: string
  }
  address: string
  hours: string
  highlights: string[]
  coordinates: {
    lat: number
    lng: number
  }
  heroImage: string
  gallery: PlaceImage[]
  didYouKnow: string
  footerNote: string
}

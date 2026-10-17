export type PlaceCategory = 'praca' | 'orla' | 'cachoeira' | 'natureza'

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
  handwritten?: string
  about: string
  landmark?: {
    title: string
    description: string
  }
  address: string
  hours: string
  highlights: string[]
  /** Se não houver coordenadas, o card mostra apenas o link "Ver no mapa" (busca no Google Maps). */
  coordinates?: {
    lat: number
    lng: number
  }
  heroImage: string
  gallery: PlaceImage[]
  didYouKnow?: string
  footerNote?: string
  /** true = detalhes (endereço, horário, história) ainda precisam ser confirmados pelos alunos. */
  precisaConfirmar?: boolean
}

export interface CategoryInfo {
  label: string
  path: string
  icon: string
  description: string
}

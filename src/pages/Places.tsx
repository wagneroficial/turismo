import { Link } from 'react-router-dom'
import { getPlacesByCategory } from '../data/places'
import type { PlaceCategory } from '../types/place'

interface PlacesProps {
  category: PlaceCategory
  title: string
}

export default function Places({ category, title }: PlacesProps) {
  const items = getPlacesByCategory(category)

  return (
    <div className="container places-page">
      <h1 className="places-page__title hand">{title}</h1>

      {items.length === 0 ? (
        <p>Em breve: novos lugares nesta categoria.</p>
      ) : (
        <div className="places-grid">
          {items.map((place) => (
            <Link key={place.slug} to={`/pracas/${place.slug}`} className="place-card">
              <img src={place.gallery[0]?.src} alt={place.name} />
              <div>
                <h3>{place.name}</h3>
                <p>{place.tagline}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

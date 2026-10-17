import { Link } from 'react-router-dom'
import Img from '../ui/Img'
import { categories } from '../../data/places'
import type { Place } from '../../types/place'

export default function PlaceCard({ place }: { place: Place }) {
  const categoria = categories[place.category]
  const imagem = place.gallery[0]?.src ?? place.heroImage

  return (
    <Link to={`/lugares/${place.slug}`} className="place-card">
      <Img src={imagem} alt={place.name} className="place-card__img" />
      <div className="place-card__body">
        <span className="tag">
          {categoria.icon} {categoria.label}
        </span>
        <h3>{place.name}</h3>
        <p>{place.tagline}</p>
        <span className="place-card__more">Conhecer →</span>
      </div>
    </Link>
  )
}

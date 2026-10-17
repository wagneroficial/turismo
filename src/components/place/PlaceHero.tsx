import Breadcrumb from '../ui/Breadcrumb'
import { categories } from '../../data/places'
import type { Place } from '../../types/place'

export default function PlaceHero({ place }: { place: Place }) {
  const categoria = categories[place.category]

  return (
    <section
      className="place-hero"
      style={{ backgroundImage: `url(${place.heroImage})` }}
    >
      <div className="place-hero__overlay" />
      <div className="place-hero__content container">
        <Breadcrumb
          items={[
            { label: 'Início', to: '/' },
            { label: categoria.label, to: categoria.path },
            { label: place.name },
          ]}
        />
        <h1 className="place-hero__title">{place.name}</h1>
        <p className="place-hero__tagline">{place.tagline}</p>
      </div>
      {place.handwritten && <span className="place-hero__note hand">{place.handwritten} ♡</span>}
    </section>
  )
}

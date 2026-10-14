import Breadcrumb from '../ui/Breadcrumb'
import type { Place } from '../../types/place'

export default function PlaceHero({ place }: { place: Place }) {
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
            { label: 'Praças', to: '/pracas' },
            { label: place.name },
          ]}
        />
        <h1 className="place-hero__title">{place.name}</h1>
        <p className="place-hero__tagline">{place.tagline}</p>
      </div>
      <span className="place-hero__note hand">{place.handwritten} ♡</span>
    </section>
  )
}

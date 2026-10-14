import SectionTitle from '../ui/SectionTitle'
import type { Place } from '../../types/place'

export default function PlaceAbout({ place }: { place: Place }) {
  return (
    <section className="place-about">
      <SectionTitle icon="⛪">Sobre o local</SectionTitle>
      <p>{place.about}</p>
      <div className="place-about__landmark">
        <span aria-hidden="true">⛪</span>
        <div>
          <strong>{place.landmark.title}</strong>
          <small>{place.landmark.description}</small>
        </div>
      </div>
    </section>
  )
}

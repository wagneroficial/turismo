import SectionTitle from '../ui/SectionTitle'
import { categories } from '../../data/places'
import type { Place } from '../../types/place'

export default function PlaceAbout({ place }: { place: Place }) {
  const icon = categories[place.category].icon

  return (
    <section className="place-about">
      <SectionTitle icon={icon}>Sobre o local</SectionTitle>
      <p>{place.about}</p>
      {place.landmark && (
        <div className="place-about__landmark">
          <span aria-hidden="true">{icon}</span>
          <div>
            <strong>{place.landmark.title}</strong>
            <small>{place.landmark.description}</small>
          </div>
        </div>
      )}
    </section>
  )
}

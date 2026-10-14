import SectionTitle from '../ui/SectionTitle'
import Button from '../ui/Button'
import type { Place } from '../../types/place'

export default function PlaceMapCard({ place }: { place: Place }) {
  const { lat, lng } = place.coordinates
  const bbox = `${lng - 0.006},${lat - 0.004},${lng + 0.006},${lat + 0.004}`
  const embedUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat},${lng}`
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`

  return (
    <aside className="map-card">
      <SectionTitle icon="📍">Localização</SectionTitle>

      <iframe
        className="map-card__map"
        title={`Mapa de ${place.name}`}
        src={embedUrl}
        loading="lazy"
      />

      <ul className="map-card__info">
        <li>
          <span aria-hidden="true">📍</span>
          <div>
            <strong>Endereço</strong>
            <p>{place.address}</p>
          </div>
        </li>
        <li>
          <span aria-hidden="true">🕒</span>
          <div>
            <strong>Horário de funcionamento</strong>
            <p>{place.hours}</p>
          </div>
        </li>
        <li>
          <span aria-hidden="true">⭐</span>
          <div>
            <strong>Destaques</strong>
            <ul className="map-card__highlights">
              {place.highlights.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </li>
      </ul>

      <Button href={mapsUrl}>📍 Ver no mapa</Button>
    </aside>
  )
}

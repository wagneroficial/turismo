import SectionTitle from '../ui/SectionTitle'
import Button from '../ui/Button'
import type { Place } from '../../types/place'

export default function PlaceMapCard({ place }: { place: Place }) {
  const { coordinates } = place

  const mapsUrl = coordinates
    ? `https://www.google.com/maps/search/?api=1&query=${coordinates.lat},${coordinates.lng}`
    : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${place.name}, Oriximiná, PA`)}`

  const embedUrl = coordinates
    ? `https://www.openstreetmap.org/export/embed.html?bbox=${coordinates.lng - 0.006},${coordinates.lat - 0.004},${coordinates.lng + 0.006},${coordinates.lat + 0.004}&layer=mapnik&marker=${coordinates.lat},${coordinates.lng}`
    : null

  return (
    <aside className="map-card">
      <SectionTitle icon="📍">Localização</SectionTitle>

      {embedUrl && (
        <iframe className="map-card__map" title={`Mapa de ${place.name}`} src={embedUrl} loading="lazy" />
      )}

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

      {place.precisaConfirmar && (
        <p className="notice">⚠️ Algumas informações ainda estão sendo confirmadas.</p>
      )}

      <Button href={mapsUrl}>📍 Ver no mapa</Button>
    </aside>
  )
}

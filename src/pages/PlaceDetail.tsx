import { Link, useParams } from 'react-router-dom'
import { getPlaceBySlug, getPlacesByCategory } from '../data/places'
import PlaceHero from '../components/place/PlaceHero'
import PlaceAbout from '../components/place/PlaceAbout'
import PlaceGallery from '../components/place/PlaceGallery'
import PlaceMapCard from '../components/place/PlaceMapCard'
import PlaceCard from '../components/place/PlaceCard'
import DidYouKnow from '../components/place/DidYouKnow'

export default function PlaceDetail() {
  const { slug = '' } = useParams()
  const place = getPlaceBySlug(slug)

  if (!place) {
    return (
      <div className="container page-placeholder">
        <h1>Lugar não encontrado</h1>
        <Link to="/pontos-turisticos">Voltar para Pontos turísticos</Link>
      </div>
    )
  }

  const outros = getPlacesByCategory(place.category)
    .filter((p) => p.slug !== place.slug)
    .slice(0, 3)

  return (
    <>
      <PlaceHero place={place} />

      <div className="container place-layout">
        <div className="place-layout__main">
          <PlaceAbout place={place} />
          <PlaceGallery images={place.gallery} />
        </div>
        <PlaceMapCard place={place} />
      </div>

      <div className="container">
        <DidYouKnow place={place} />
      </div>

      {outros.length > 0 && (
        <section className="section section--tint">
          <div className="container">
            <h2 className="section__title hand">Continue explorando</h2>
            <div className="grid grid--3">
              {outros.map((p) => (
                <PlaceCard key={p.slug} place={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}

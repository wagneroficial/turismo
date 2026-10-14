import { Link, useParams } from 'react-router-dom'
import { getPlaceBySlug } from '../data/places'
import PlaceHero from '../components/place/PlaceHero'
import PlaceAbout from '../components/place/PlaceAbout'
import PlaceGallery from '../components/place/PlaceGallery'
import PlaceMapCard from '../components/place/PlaceMapCard'
import DidYouKnow from '../components/place/DidYouKnow'

export default function PlaceDetail() {
  const { slug = '' } = useParams()
  const place = getPlaceBySlug(slug)

  if (!place) {
    return (
      <div className="container page-placeholder">
        <h1>Lugar não encontrado</h1>
        <Link to="/pracas">Voltar para Praças</Link>
      </div>
    )
  }

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
    </>
  )
}

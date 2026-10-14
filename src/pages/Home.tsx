import { Link } from 'react-router-dom'
import { places } from '../data/places'

export default function Home() {
  const featured = places[0]

  return (
    <div className="container page-placeholder">
      <h1 className="place-hero__title" style={{ color: 'var(--green-800)' }}>
        Bem-vindo a Oriximiná
      </h1>
      <p>Descubra praças, cachoeiras e praias do Guia Turístico Inteligente.</p>
      {featured && (
        <Link to={`/pracas/${featured.slug}`} className="btn" style={{ display: 'inline-flex', marginTop: '1.5rem' }}>
          <span>Conheça a {featured.name}</span>
          <span aria-hidden="true">→</span>
        </Link>
      )}
    </div>
  )
}

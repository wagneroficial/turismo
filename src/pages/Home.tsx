import { Link } from 'react-router-dom'
import PlaceCard from '../components/place/PlaceCard'
import SectionTitle from '../components/ui/SectionTitle'
import { categories, places } from '../data/places'
import { cidade, fatos } from '../data/cidade'
import type { PlaceCategory } from '../types/place'

const destaques = [
  'praca-da-matriz',
  'cachoeira-porteira',
  'rio-trombetas',
  'lago-sapucua',
  'orla-do-iripixi',
  'reserva-biologica-do-rio-trombetas',
]
  .map((slug) => places.find((p) => p.slug === slug))
  .filter((p): p is NonNullable<typeof p> => Boolean(p))

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="container home-hero__content">
          <span className="home-hero__tag">{cidade.apelido}</span>
          <h1>Descubra {cidade.nome}</h1>
          <p>{cidade.slogan}</p>
          <div className="home-hero__actions">
            <Link to="/pontos-turisticos" className="btn btn--light">
              Ver pontos turísticos
            </Link>
            <Link to="/oriximina" className="btn btn--outline">
              Conhecer a cidade
            </Link>
          </div>
        </div>
      </section>

      <section className="facts container" aria-label="Oriximiná em números">
        {fatos.map((fato) => (
          <div key={fato.titulo} className="fact">
            <span className="fact__icon" aria-hidden="true">
              {fato.icone}
            </span>
            <strong>{fato.valor}</strong>
            <span>{fato.titulo}</span>
          </div>
        ))}
      </section>

      <section className="section container intro">
        <div>
          <SectionTitle icon="🌴">Bem-vindo</SectionTitle>
          <p>{cidade.resumo}</p>
          <Link to="/oriximina" className="btn">
            <span>Saiba mais sobre Oriximiná</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <h2 className="section__title hand">Explore por categoria</h2>
          <div className="grid grid--4">
            {(Object.keys(categories) as PlaceCategory[]).map((key) => {
              const categoria = categories[key]
              return (
                <Link key={key} to={categoria.path} className="tile">
                  <span className="tile__icon" aria-hidden="true">
                    {categoria.icon}
                  </span>
                  <h3>{categoria.label}</h3>
                  <p>{categoria.description}</p>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section__title hand">Pontos turísticos em destaque</h2>
          <div className="grid grid--3">
            {destaques.map((place) => (
              <PlaceCard key={place.slug} place={place} />
            ))}
          </div>
          <div className="center-btn">
            <Link to="/pontos-turisticos" className="btn">
              <span>Ver todos os pontos turísticos</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container cta__inner">
          <div>
            <h2 className="hand">Planejando sua visita?</h2>
            <p>Veja como chegar e o que saber antes de conhecer Oriximiná.</p>
          </div>
          <Link to="/oriximina/como-chegar" className="btn btn--light">
            Como chegar
          </Link>
        </div>
      </section>
    </>
  )
}

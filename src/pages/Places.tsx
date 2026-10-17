import { Link } from 'react-router-dom'
import PageHeader from '../components/ui/PageHeader'
import PlaceCard from '../components/place/PlaceCard'
import { categories, getPlacesByCategory, places } from '../data/places'
import type { PlaceCategory } from '../types/place'

interface PlacesProps {
  category?: PlaceCategory
}

export default function Places({ category }: PlacesProps) {
  const info = category ? categories[category] : undefined
  const lista = category ? getPlacesByCategory(category) : places
  const titulo = info ? info.label : 'Pontos turísticos'

  return (
    <>
      <PageHeader
        title={titulo}
        subtitle={info ? info.description : 'Praças, orla, cachoeiras e natureza de Oriximiná.'}
        crumbs={
          info
            ? [{ label: 'Início', to: '/' }, { label: 'Pontos turísticos', to: '/pontos-turisticos' }, { label: info.label }]
            : undefined
        }
      />

      <section className="section container">
        <div className="chips" role="navigation" aria-label="Categorias">
          <Link to="/pontos-turisticos" className={`chip${!category ? ' chip--ativo' : ''}`}>
            Todos
          </Link>
          {(Object.keys(categories) as PlaceCategory[]).map((key) => (
            <Link
              key={key}
              to={categories[key].path}
              className={`chip${category === key ? ' chip--ativo' : ''}`}
            >
              {categories[key].icon} {categories[key].label}
            </Link>
          ))}
        </div>

        {lista.length === 0 ? (
          <p>Em breve: novos lugares nesta categoria.</p>
        ) : (
          <div className="grid grid--3">
            {lista.map((place) => (
              <PlaceCard key={place.slug} place={place} />
            ))}
          </div>
        )}
      </section>
    </>
  )
}

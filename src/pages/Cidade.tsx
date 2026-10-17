import { Link } from 'react-router-dom'
import PageHeader from '../components/ui/PageHeader'
import SectionTitle from '../components/ui/SectionTitle'
import { cidade, economia, fatos, unidadesDeConservacao } from '../data/cidade'

export default function Cidade() {
  return (
    <>
      <PageHeader
        title="Sobre Oriximiná"
        subtitle={`${cidade.apelido} – ${cidade.slogan}`}
        crumbs={[{ label: 'Início', to: '/' }, { label: 'Oriximiná' }]}
      />

      <section className="section container">
        <SectionTitle icon="📍">A cidade</SectionTitle>
        <p className="lead">{cidade.resumo}</p>
        <div className="grid grid--4 facts-grid">
          {fatos.map((fato) => (
            <div key={fato.titulo} className="fact fact--card">
              <span className="fact__icon" aria-hidden="true">
                {fato.icone}
              </span>
              <strong>{fato.valor}</strong>
              <span>{fato.titulo}</span>
              <small>{fato.detalhe}</small>
            </div>
          ))}
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <SectionTitle icon="⛏️">Economia</SectionTitle>
          <div className="grid grid--3">
            {economia.map((item) => (
              <article key={item.titulo} className="info-card">
                <span className="info-card__icon" aria-hidden="true">
                  {item.icone}
                </span>
                <h3>{item.titulo}</h3>
                <p>{item.texto}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section container">
        <SectionTitle icon="🌳">Natureza protegida</SectionTitle>
        <p className="lead">
          Boa parte do território de Oriximiná é formada por florestas protegidas, entre as maiores
          do planeta.
        </p>
        <div className="grid grid--2">
          {unidadesDeConservacao.map((uc) => (
            <article key={uc.nome} className="info-card">
              <h3>{uc.nome}</h3>
              <p>{uc.texto}</p>
              {uc.slug && (
                <Link to={`/lugares/${uc.slug}`} className="link-more">
                  Saiba mais →
                </Link>
              )}
            </article>
          ))}
        </div>

        <p className="sources">
          Fontes: IBGE (Censo 2022), Wikipédia e “Entre águas bravas e mansas: índios e quilombolas em
          Oriximiná” (Comissão Pró-Índio de São Paulo, 2015).
        </p>
      </section>
    </>
  )
}

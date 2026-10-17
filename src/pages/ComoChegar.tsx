import PageHeader from '../components/ui/PageHeader'
import { comoChegar } from '../data/cidade'

export default function ComoChegar() {
  return (
    <>
      <PageHeader
        title="Como chegar"
        subtitle="Por ar, por rio e dentro da cidade."
        crumbs={[
          { label: 'Início', to: '/' },
          { label: 'Oriximiná', to: '/oriximina' },
          { label: 'Como chegar' },
        ]}
      />

      <section className="section container">
        <div className="grid grid--3">
          {comoChegar.map((item) => (
            <article key={item.titulo} className="info-card">
              <span className="info-card__icon" aria-hidden="true">
                {item.icone}
              </span>
              <h3>{item.titulo}</h3>
              <p>{item.texto}</p>
            </article>
          ))}
        </div>
        <p className="notice notice--big">
          ⚠️ Horários, linhas e valores mudam com frequência. Confirme sempre com as empresas e com a
          Prefeitura antes de viajar.
        </p>
      </section>
    </>
  )
}

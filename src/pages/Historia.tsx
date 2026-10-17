import PageHeader from '../components/ui/PageHeader'
import { historia } from '../data/cidade'

export default function Historia() {
  return (
    <>
      <PageHeader
        title="História de Oriximiná"
        subtitle="Do povoado às margens do Trombetas à cidade de hoje."
        crumbs={[
          { label: 'Início', to: '/' },
          { label: 'Oriximiná', to: '/oriximina' },
          { label: 'História' },
        ]}
      />

      <section className="section">
        <div className="container">
          <ol className="timeline">
            {historia.map((marco) => (
              <li key={marco.ano} className="timeline__item">
                <span className="timeline__ano">{marco.ano}</span>
                <div className="timeline__card">
                  <h3>{marco.titulo}</h3>
                  <p>{marco.texto}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="sources center">
            Fonte: dados históricos do município (Wikipédia e registros oficiais). Os alunos podem
            complementar com pesquisa em arquivos e entrevistas com moradores.
          </p>
        </div>
      </section>
    </>
  )
}

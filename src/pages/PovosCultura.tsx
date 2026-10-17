import PageHeader from '../components/ui/PageHeader'
import SectionTitle from '../components/ui/SectionTitle'
import { povosECultura } from '../data/cidade'

export default function PovosCultura() {
  const { quilombolas, indigenas, respeito } = povosECultura

  return (
    <>
      <PageHeader
        title="Povos e cultura"
        subtitle="Quilombolas e povos indígenas fazem parte da identidade de Oriximiná."
        crumbs={[
          { label: 'Início', to: '/' },
          { label: 'Oriximiná', to: '/oriximina' },
          { label: 'Povos e cultura' },
        ]}
      />

      <section className="section container">
        <div className="grid grid--2 split">
          <article>
            <SectionTitle icon="🏘️">{quilombolas.titulo}</SectionTitle>
            {quilombolas.paragrafos.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </article>
          <article>
            <SectionTitle icon="🪶">{indigenas.titulo}</SectionTitle>
            {indigenas.paragrafos.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </article>
        </div>

        <aside className="notice notice--big">
          <strong>Visite com respeito.</strong> {respeito}
        </aside>

        <p className="sources">
          Fonte dos números: “Entre águas bravas e mansas: índios e quilombolas em Oriximiná”
          (Comissão Pró-Índio de São Paulo, 2015). Os valores podem ter mudado desde então.
        </p>
      </section>
    </>
  )
}

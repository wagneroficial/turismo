import PageHeader from '../components/ui/PageHeader'

export default function About() {
  return (
    <>
      <PageHeader
        title="Sobre o guia"
        subtitle="Um projeto para mostrar Oriximiná a quem mora aqui e a quem vem visitar."
      />

      <section className="section container">
        <p className="lead">
          O Guia Turístico Inteligente de Oriximiná reúne informações sobre a cidade, sua história,
          seus povos e seus pontos turísticos. É um projeto educacional, feito para crescer com a
          participação de estudantes e da comunidade.
        </p>
        <p>
          Alguns lugares ainda têm informações marcadas como “a confirmar”. Se você conhece a
          história de um ponto turístico, tem fotos ou quer corrigir algum dado, participe: este
          guia é construído por quem conhece Oriximiná de verdade.
        </p>
      </section>
    </>
  )
}

import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <span className="footer__slogan hand">🌴 Oriximiná te espera! ♡</span>
          <p>Guia Turístico Inteligente de Oriximiná, a Princesa do Trombetas.</p>
        </div>

        <div>
          <h4>Oriximiná</h4>
          <ul>
            <li><Link to="/oriximina">Sobre a cidade</Link></li>
            <li><Link to="/oriximina/historia">História</Link></li>
            <li><Link to="/oriximina/povos-e-cultura">Povos e cultura</Link></li>
            <li><Link to="/oriximina/como-chegar">Como chegar</Link></li>
          </ul>
        </div>

        <div>
          <h4>Pontos turísticos</h4>
          <ul>
            <li><Link to="/pracas">Praças</Link></li>
            <li><Link to="/orla">Orla e cidade</Link></li>
            <li><Link to="/cachoeiras">Cachoeiras</Link></li>
            <li><Link to="/natureza">Natureza</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer__copy">
        © {new Date().getFullYear()} Guia Turístico Inteligente – Oriximiná. Projeto educacional.
      </div>
    </footer>
  )
}

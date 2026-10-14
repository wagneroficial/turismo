import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <span className="footer__slogan hand">🌴 Oriximiná te espera! ♡</span>
        <nav className="footer__nav" aria-label="Rodapé">
          <Link to="/">Início</Link>
          <Link to="/pracas">Praças</Link>
          <Link to="/cachoeiras">Cachoeiras</Link>
          <Link to="/praias">Praias</Link>
          <Link to="/sobre">Sobre</Link>
        </nav>
      </div>
    </footer>
  )
}

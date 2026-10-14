import { NavLink, Link } from 'react-router-dom'

const links = [
  { to: '/', label: 'Início', icon: '🏠' },
  { to: '/pracas', label: 'Praças', icon: '📍' },
  { to: '/cachoeiras', label: 'Cachoeiras', icon: '💧' },
  { to: '/praias', label: 'Praias', icon: '🌴' },
  { to: '/sobre', label: 'Sobre', icon: 'ℹ️' },
]

export default function Header() {
  return (
    <header className="header">
      <div className="header__inner container">
        <Link to="/" className="header__logo">
          <small>Guia Turístico Inteligente</small>
          <strong>Oriximiná</strong>
        </Link>

        <nav className="header__nav" aria-label="Navegação principal">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `header__link${isActive ? ' header__link--active' : ''}`
              }
            >
              <span aria-hidden="true">{link.icon}</span>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="header__actions">
          <button type="button" className="header__search" aria-label="Buscar">
            🔍
          </button>
          <Link to="/pracas" className="header__map-btn">
            🗺️ Mapa
          </Link>
        </div>
      </div>
    </header>
  )
}

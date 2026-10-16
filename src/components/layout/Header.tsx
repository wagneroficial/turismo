
import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

const links = [
  { to: '/', label: 'Início', icon: '🏠' },
  { to: '/sobre', label: 'Sobre', icon: 'ℹ️' },
]

const categories = [
  { to: '/pracas', label: 'Praças' },
  { to: '/cachoeiras', label: 'Cachoeiras' },
  { to: '/praias', label: 'Praias' },
]

export default function Header() {
  const [categoriesOpen, setCategoriesOpen] = useState(false)

  return (
    <header className="header">
      <div className="header__inner container">
        <Link to="/" className="header__logo">
          <small>Guia Turístico Inteligente</small>
          <strong>Oriximiná</strong>
        </Link>

        <nav
          className="header__nav"
          aria-label="Navegação principal"
        >
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

          <div className="header__categories">
            <button
              type="button"
              className={`header__link header__categories-toggle${
                categoriesOpen ? ' header__link--active' : ''
              }`}
              onClick={() => setCategoriesOpen(!categoriesOpen)}
              aria-expanded={categoriesOpen}
              aria-haspopup="true"
            >
              <span aria-hidden="true">📂</span>
              Categorias
            </button>

            {categoriesOpen && (
              <ul className="header__categories-list">
                {categories.map((category) => (
                  <li key={category.to}>
                    <NavLink
                      to={category.to}
                      className={({ isActive }) =>
                        `header__categories-item${isActive ? ' active' : ''}`
                      }
                      onClick={() => setCategoriesOpen(false)}
                    >
                      {category.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </nav>

        <div className="header__actions">
          <button
            type="button"
            className="header__search"
            aria-label="Buscar"
          >
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

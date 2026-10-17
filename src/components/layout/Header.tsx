import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

interface SubItem {
  label: string
  to: string
}

interface MenuItem {
  label: string
  to?: string
  end?: boolean
  /** Prefixos de rota que deixam o item "ativo" (usado nos menus com submenu). */
  match?: string[]
  children?: SubItem[]
}

const menu: MenuItem[] = [
  { label: 'Início', to: '/', end: true },
  {
    label: 'Oriximiná',
    match: ['/oriximina'],
    children: [
      { label: 'Sobre a cidade', to: '/oriximina' },
      { label: 'História', to: '/oriximina/historia' },
      { label: 'Povos e cultura', to: '/oriximina/povos-e-cultura' },
      { label: 'Como chegar', to: '/oriximina/como-chegar' },
    ],
  },
  {
    label: 'Pontos turísticos',
    match: ['/pontos-turisticos', '/pracas', '/orla', '/cachoeiras', '/natureza', '/lugares'],
    children: [
      { label: 'Ver todos', to: '/pontos-turisticos' },
      { label: 'Praças', to: '/pracas' },
      { label: 'Orla e cidade', to: '/orla' },
      { label: 'Cachoeiras', to: '/cachoeiras' },
      { label: 'Natureza', to: '/natureza' },
    ],
  },
  { label: 'Sobre o guia', to: '/sobre' },
]

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false)
  const [submenu, setSubmenu] = useState<string | null>(null)
  const { pathname } = useLocation()

  // Fecha os menus ao trocar de página
  useEffect(() => {
    setMenuAberto(false)
    setSubmenu(null)
  }, [pathname])

  const ativo = (item: MenuItem) =>
    (item.match ?? []).some((prefixo) => pathname === prefixo || pathname.startsWith(prefixo + '/'))

  return (
    <header className="header">
      <div className="header__inner container">
        <Link to="/" className="header__logo">
          <small>Guia Turístico Inteligente</small>
          <strong>Oriximiná</strong>
        </Link>

        <button
          type="button"
          className="header__toggle"
          aria-label="Abrir menu"
          aria-expanded={menuAberto}
          onClick={() => setMenuAberto((v) => !v)}
        >
          ☰
        </button>

        <nav
          className={`header__nav${menuAberto ? ' header__nav--aberto' : ''}`}
          aria-label="Principal"
        >
          {menu.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="header__dropdown"
                onMouseEnter={() => setSubmenu(item.label)}
                onMouseLeave={() => setSubmenu(null)}
              >
                <button
                  type="button"
                  className={`header__link${ativo(item) ? ' header__link--ativo' : ''}`}
                  aria-expanded={submenu === item.label}
                  onClick={() => setSubmenu((atual) => (atual === item.label ? null : item.label))}
                >
                  {item.label} ▾
                </button>
                {submenu === item.label && (
                  <div className="header__submenu">
                    {item.children.map((filho) => (
                      <NavLink key={filho.to} to={filho.to} end>
                        {filho.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                key={item.label}
                to={item.to!}
                end={item.end}
                className={({ isActive }) => `header__link${isActive ? ' header__link--ativo' : ''}`}
              >
                {item.label}
              </NavLink>
            ),
          )}
        </nav>
      </div>
    </header>
  )
}

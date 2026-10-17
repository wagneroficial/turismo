import { useEffect, useState } from 'react'

export default function BackToTop() {
  const [visivel, setVisivel] = useState(false)

  useEffect(() => {
    const aoRolar = () => setVisivel(window.scrollY > 300)
    window.addEventListener('scroll', aoRolar)
    return () => window.removeEventListener('scroll', aoRolar)
  }, [])

  if (!visivel) return null

  return (
    <button
      type="button"
      className="back-to-top"
      aria-label="Voltar ao topo"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      ⌃
    </button>
  )
}

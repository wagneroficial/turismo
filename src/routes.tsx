import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Home from './pages/Home'
import Places from './pages/Places'
import PlaceDetail from './pages/PlaceDetail'
import About from './pages/About'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pracas" element={<Places category="praca" title="Praças" />} />
        <Route path="/pracas/:slug" element={<PlaceDetail />} />
        <Route path="/cachoeiras" element={<Places category="cachoeira" title="Cachoeiras" />} />
        <Route path="/praias" element={<Places category="praia" title="Praias" />} />
        <Route path="/sobre" element={<About />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  )
}

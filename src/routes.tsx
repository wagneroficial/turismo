import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Cidade from './pages/Cidade'
import Historia from './pages/Historia'
import PovosCultura from './pages/PovosCultura'
import ComoChegar from './pages/ComoChegar'
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

        {/* Oriximiná */}
        <Route path="/oriximina" element={<Cidade />} />
        <Route path="/oriximina/historia" element={<Historia />} />
        <Route path="/oriximina/povos-e-cultura" element={<PovosCultura />} />
        <Route path="/oriximina/como-chegar" element={<ComoChegar />} />

        {/* Pontos turísticos */}
        <Route path="/pontos-turisticos" element={<Places />} />
        <Route path="/pracas" element={<Places category="praca" />} />
        <Route path="/orla" element={<Places category="orla" />} />
        <Route path="/cachoeiras" element={<Places category="cachoeira" />} />
        <Route path="/natureza" element={<Places category="natureza" />} />
        <Route path="/lugares/:slug" element={<PlaceDetail />} />

        <Route path="/sobre" element={<About />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  )
}

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Nav } from '../src/components/Nav'
import { Hero } from '../src/components/Hero'
import { Cursos } from './components/Cursos'
import { Nosotros } from './components/Nosotros'
import { Planes } from './components/Planes'
import { Testimonios } from './components/Testimonios'
import { Contacto } from './components/Contacto'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Nav />
      <Hero />
      <Cursos />
      <Nosotros/>
      <Planes/>
      <Testimonios/>
      <Contacto/>
  </StrictMode>,
)

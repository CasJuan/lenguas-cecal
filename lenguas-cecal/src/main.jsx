import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Nav } from '../src/components/Nav'
import { Hero } from '../src/components/Hero'
import { Cursos } from './components/Cursos'
import { Nosotros } from './components/Nosotros'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='bg[#F4F7FA]'>
      <Nav />
      <Hero />
      <Cursos />
      <Nosotros/>
    </div>
  </StrictMode>,
)

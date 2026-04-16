import { BadgeCheck } from 'lucide-react'
import React from 'react'


const timeline = [
  { year: "1986", event: "Fundacion de LENGUAS CECAL en Buenos Aires" },
  { year: "1995", event: "Expansion a multiples idiomas" },
  { year: "2005", event: "Alianza con instituciones internacionales" },
  { year: "2015", event: "Incorporacion de tecnologia educativa" },
  { year: "2020", event: "Lanzamiento de plataforma online" },
  { year: "2024", event: "Mas de 5000 egresados certificados" },
]

export const Nosotros = () => {
  return (
    <section id='nosotros' className='flex flex-row items-center justify-center w-full h-svh gap-2'>
      <div className='w-1/3'>
        <span className="text-primary bg-hover w-40 h-auto p-3 rounded-2xl flex items-center justify-center">Sobre Nosotros</span>
        <h2 className='text-4xl font-bold'>Mas de 38 años formando profesionales bilingues</h2>
        <div className='flex flex-col items-start justify-center gap-5'>
          <p className='text-tertiary text-base mt-5'>LENGUAS CECAL nacio en 1986 con la mision de brindar educacion de idiomas de calidad en Buenos Aires. Desde entonces, hemos formado a miles de estudiantes que hoy se desempenan exitosamente en ambitos profesionales internacionales.</p>
          <p className='text-tertiary text-base mb-5'>Nuestro compromiso es ofrecer una experiencia de aprendizaje integral, combinando metodologias tradicionales probadas con las ultimas tecnologias educativas.</p>
        </div>
        <div className='flex flex-row items-center justify-center gap-5'>
          <ul className='flex flex-col items-start justify-center gap-3'>
            <li className='flex flex-row items-center justify-center gap-3 text-base'><BadgeCheck color="rgb(0,86,164)" className='h-4' /> Profesores certificados con experiencias internacional</li>
            <li className='flex flex-row items-center justify-center gap-3'><BadgeCheck color="rgb(0,86,164)" className='h-4' /> Metodologia comunicativa y practica</li>
            <li className='flex flex-row items-center justify-center gap-3'><BadgeCheck color="rgb(0,86,164)" className='h-4' /> Certificados oficiales reconocidos</li>
          </ul>
          <ul className='flex flex-col items-start justify-center gap-3'>
            <li className='flex flex-row items-center justify-center gap-3'><BadgeCheck color="rgb(0,86,164)" className='h-4' /> Grupos reducidos para atencion personalizada</li>
            <li className='flex flex-row items-center justify-center gap-3'><BadgeCheck color="rgb(0,86,164)" className='h-4' /> Material didactico actualizado</li>
            <li className='flex flex-row items-center justify-center gap-3'><BadgeCheck color="rgb(0,86,164)" className='h-4' /> Flexibilidad horaria y modalidades</li>
          </ul>
        </div>
      </div>
      <div className="relative w-1/2">
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border bg-hover" />
        <div className="space-y-8">
          {timeline.map((item, index) => (
            <div key={index} className="relative pl-12">
              <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center z-50">
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>
              <div className="bg-card p-4 rounded-lg border border-border/50 border-hover">
                <span className="text-sm font-bold text-primary">
                  {item.year}
                </span>
                <p className="text-foreground mt-1">{item.event}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import React from 'react'
import { CardTestimo } from './mini-components/CardTestimo'

export const Testimonios = () => {
  return (
    <section id='testimonios' className="flex flex-col items-center justify-center gap-6 md:gap-8 w-full min-h-svh px-4 py-16">
        <span className="text-primary bg-hover w-auto px-6 h-auto p-2 rounded-2xl flex items-center justify-center text-sm font-medium">Testimonios</span>
        <div className="flex flex-col items-center text-center gap-4 max-w-3xl">
          <h1 className="text-3xl md:text-5xl tracking-wide font-bold text-center">Lo que dicen nuestros estudiantes</h1>
          <p className='text-tertiary text-sm md:text-base text-center mb-4'>Miles de estudiantes confiaron en nosotros para alcanzar sus metas. Estas son algunas de sus historias.</p>
        </div>
        <div className='flex flex-row items-stretch justify-center gap-6 flex-wrap w-full max-w-7xl'>
          <CardTestimo desc={"Gracias a LENGUAS CECAL logre el nivel de ingles que necesitaba para mi trabajo. Los profesores son excelentes y la metodologia muy practica."} nombre={"Maria Laura G."} profesion={"Ejecutiva de Marketing"} curso={"Ingles de Negocios"}/>
          <CardTestimo desc={"Gracias a LENGUAS CECAL logre el nivel de ingles que necesitaba para mi trabajo. Los profesores son excelentes y la metodologia muy practica."} nombre={"Maria Laura G."} profesion={"Ejecutiva de Marketing"} curso={"Ingles de Negocios"}/>
          <CardTestimo desc={"Gracias a LENGUAS CECAL logre el nivel de ingles que necesitaba para mi trabajo. Los profesores son excelentes y la metodologia muy practica."} nombre={"Maria Laura G."} profesion={"Ejecutiva de Marketing"} curso={"Ingles de Negocios"}/>
          <CardTestimo desc={"Gracias a LENGUAS CECAL logre el nivel de ingles que necesitaba para mi trabajo. Los profesores son excelentes y la metodologia muy practica."} nombre={"Maria Laura G."} profesion={"Ejecutiva de Marketing"} curso={"Ingles de Negocios"}/>
        </div>
    </section>
  )
}

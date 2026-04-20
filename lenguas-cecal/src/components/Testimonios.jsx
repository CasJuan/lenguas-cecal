import React from 'react'
import { CardTestimo } from './mini-components/CardTestimo'

export const Testimonios = () => {
  return (
    <section id='testimonios' className="flex flex-col items-center justify-center gap-8 w-full h-svh bg-[#F4F7FA]">
        <span className="text-primary bg-hover w-40 h-auto p-3 rounded-2xl flex items-center justify-center">Testimonios</span>
        <h1 className="text-5xl tracking-wide">Lo que dicen nuestros estudiantes</h1>
        <p className='text-tertiary text-base'>Miles de estudiantes confiaron en nosotros para alcanzar sus metas. Estas son algunas de sus historias.</p>
        <div className='flex flex-row items-center justify-center gap-5 flex-wrap'>
          <CardTestimo desc={"Gracias a LENGUAS CECAL logre el nivel de ingles que necesitaba para mi trabajo. Los profesores son excelentes y la metodologia muy practica."} nombre={"Maria Laura G."} profesion={"Ejecutiva de Marketing"} curso={"Ingles de Negocios"}/>
          <CardTestimo desc={"Gracias a LENGUAS CECAL logre el nivel de ingles que necesitaba para mi trabajo. Los profesores son excelentes y la metodologia muy practica."} nombre={"Maria Laura G."} profesion={"Ejecutiva de Marketing"} curso={"Ingles de Negocios"}/>
          <CardTestimo desc={"Gracias a LENGUAS CECAL logre el nivel de ingles que necesitaba para mi trabajo. Los profesores son excelentes y la metodologia muy practica."} nombre={"Maria Laura G."} profesion={"Ejecutiva de Marketing"} curso={"Ingles de Negocios"}/>
          <CardTestimo desc={"Gracias a LENGUAS CECAL logre el nivel de ingles que necesitaba para mi trabajo. Los profesores son excelentes y la metodologia muy practica."} nombre={"Maria Laura G."} profesion={"Ejecutiva de Marketing"} curso={"Ingles de Negocios"}/>
        </div>
    </section>
  )
}

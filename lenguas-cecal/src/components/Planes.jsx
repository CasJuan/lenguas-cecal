import React from 'react'
import { CardPrecios } from './mini-components/CardPrecios'

export const Planes = () => {
  return (
    <section id='precios' className="flex flex-col items-center justify-center gap-6 md:gap-8 w-full min-h-svh bg-[#F4F7FA] px-4 py-16">
      <span className="text-primary bg-hover w-auto px-6 h-auto p-2 rounded-2xl flex items-center justify-center text-sm font-medium">Precios</span>
      <div className="flex flex-col items-center text-center gap-4 max-w-3xl">
        <h1 className="text-3xl md:text-5xl tracking-wide font-bold">Planes pensados para cada necesidad</h1>
        <p className='text-tertiary text-sm md:text-base mb-4'>Elegí el plan que mejor se adapte a tu forma de aprender. Todos incluyen acceso a nuestra plataforma y materiales.</p>
      </div>
      <div className="flex flex-col lg:flex-row items-stretch justify-center gap-6 w-full max-w-6xl">

        <CardPrecios title={"Grupal"} desc={"Ideal para quienes disfrutan aprender en comunidad"} price={"$25.000"} list={["2 clases semanales de 1.5 hs", "Grupos de 6-8 alumnos", "Material didactico incluido", "Acceso a plataforma online", "Evaluaciones periodicas", "Certificado de nivel"]} />

        <CardPrecios title={"Semi-Individual"} desc={"El balance perfecto entre atencion y precio"} price={"$45.000"} list={["2 clases semanales de 1.5 hs", "Grupos de 2-3 alumnos", "Material didactico incluido", "Acceso a plataforma online", "Evaluaciones periodicas", "Certificado de nivel", "Clases de recuperacion"]} />

        <CardPrecios title={"Individual"} desc={"Atencion 100% personalizada a tu ritmo"} price={"$25.000"} list={["2 clases semanales de 1 hora", "Profesor exclusivo", "Material didactico incluido", "Acceso a plataforma online", "Evaluaciones periodicas", "Certificado de nivel", "Flexibilidad horaria total", "Programa personalizado"]} />
      </div>
    </section>
  )
}

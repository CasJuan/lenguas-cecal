import React from 'react'
import { CursosCard } from './mini-components/CursosCard'
import { Users, BookOpenCheck, Blocks } from "lucide-react";

export const Cursos = () => {
  return (
    <>
      <section id='cursos' className="flex flex-col items-center justify-center gap-2 w-full h-svh bg-[#F4F7FA]">
        <span className="text-primary bg-hover w-auto h-10 p-3 rounded-2xl flex items-center">Nuestros cursos</span>
        <h1 className='text-6xl'>Encuentra el curso perfecto para vos</h1>
        <p className="text-tertiary text-lg text-center">Ofrecemos una amplia variedad de cursos adaptados a tus necesidades, horarios y objetivos de aprendizaje.</p>
        <div className='flex flex-row items-center justify-around gap-5 flex-wrap'>
          <CursosCard icon={<Users color="rgb(0,86,164)" />} titulo={"Ingles General"} descp={"Cursos para todos los niveles, desde principiante hasta avanzado. Metodologia comunicativa."} niveles={["Principiante", "Intermedio", "Avanzado"]} modalidades={"Presencial / Online"} />
          <CursosCard icon={<BookOpenCheck color="rgb(0,86,164)" />} titulo={"Ingles de Negocios"} descp={"Enfocado en el ambito profesional y empresarial. Preparacion para reuniones, presentaciones y negociaciones."} niveles={["Intermedio", "Avanzado"]} modalidades={"Presencial / Online"} />
          <CursosCard icon={<Blocks color="rgb(0,86,164)" />} titulo={"Ingles para Ninos"} descp={"Aprendizaje ludico y dinamico para los mas pequenos. Grupos reducidos y actividades interactivas."} niveles={["Todos los niveles"]} modalidades={"Presencial / Online"} />
          <CursosCard icon={<Blocks color="rgb(0,86,164)" />} titulo={"Ingles para Ninos"} descp={"Aprendizaje ludico y dinamico para los mas pequenos. Grupos reducidos y actividades interactivas."} niveles={["Todos los niveles"]} modalidades={"Presencial / Online"} />
        </div>
      </section>
    </>
  )
}

import React from 'react'
import { CursosCard } from './mini-components/CursosCard'
import { Users, BookOpenCheck, Blocks } from "lucide-react";
import { useRef, useEffect} from 'react';
import { gsap } from "gsap"
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

export const Cursos = () => {

  // Referencias para apuntar a los elementos del DOM
  const sectionRef = useRef(null)
  const badgeRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const cardsRef = useRef(null)

  useEffect(() => {

    const ctx = gsap.context(() => {

      // Badge, título y párrafo entran en cascada
      gsap.from([badgeRef.current, titleRef.current, subtitleRef.current], {
        opacity: 0,
        y: 40,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.15,       // cada elemento 150ms después del anterior
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",  // se dispara cuando el top de la sección llega al 75% del viewport
        }
      })

      // Cards entran una por una desde abajo
      gsap.from(cardsRef.current.children, {
        opacity: 0,
        y: 60,
        scale: 0.95,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
        }
      })

    }, sectionRef) // el contexto limita las animaciones a este componente

    return () => ctx.revert() // limpieza al desmontar el componente

  }, [])

  return (
    <>
      <section ref={sectionRef} id='cursos' className="flex flex-col items-center justify-center gap-2 w-full h-svh bg-[#F4F7FA]">
        <span ref={badgeRef} className="text-primary bg-hover w-auto h-10 p-3 rounded-2xl flex items-center">Nuestros cursos</span>
        <h1 ref={titleRef} className='text-6xl'>Encuentra el curso perfecto para vos</h1>
        <p ref={subtitleRef} className="text-tertiary text-lg text-center">Ofrecemos una amplia variedad de cursos adaptados a tus necesidades, horarios y objetivos de aprendizaje.</p>
        <div ref={cardsRef} className='flex flex-row items-center justify-center gap-5 flex-wrap'>
          <CursosCard icon={<Users color="rgb(0,86,164)" />} titulo={"Ingles General"} descp={"Cursos para todos los niveles, desde principiante hasta avanzado. Metodologia comunicativa."} niveles={["Principiante", "Intermedio", "Avanzado"]} modalidades={"Presencial / Online"} />
          <CursosCard icon={<BookOpenCheck color="rgb(0,86,164)" />} titulo={"Ingles de Negocios"} descp={"Enfocado en el ambito profesional y empresarial. Preparacion para reuniones, presentaciones y negociaciones."} niveles={["Intermedio", "Avanzado"]} modalidades={"Presencial / Online"} />
          <CursosCard icon={<Blocks color="rgb(0,86,164)" />} titulo={"Ingles para Ninos"} descp={"Aprendizaje ludico y dinamico para los mas pequenos. Grupos reducidos y actividades interactivas."} niveles={["Todos los niveles"]} modalidades={"Presencial / Online"} />
          <CursosCard icon={<Blocks color="rgb(0,86,164)" />} titulo={"Ingles para Ninos"} descp={"Aprendizaje ludico y dinamico para los mas pequenos. Grupos reducidos y actividades interactivas."} niveles={["Todos los niveles"]} modalidades={"Presencial / Online"} />
        </div>
      </section>
    </>
  )
}

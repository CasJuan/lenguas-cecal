import React from 'react'
import { MapPinCheck, Phone, MailOpen, CalendarClock } from 'lucide-react'

const infoCards = [
  {
    icon: <MapPinCheck color="rgb(0,86,164)" size={20} />,
    title: "Dirección",
    line1: "Av. Corrientes 1234, Piso 5",
    line2: "CABA, Buenos Aires",
  },
  {
    icon: <Phone color="rgb(0,86,164)" size={20} />,
    title: "Teléfono",
    line1: "(011) 4321-4321",
    line2: "Lunes a Viernes 9-21hs",
  },
  {
    icon: <MailOpen color="rgb(0,86,164)" size={20} />,
    title: "Email",
    line1: "info@lenguascecal.com.ar",
    line2: "Respondemos en 24hs",
  },
  {
    icon: <CalendarClock color="rgb(0,86,164)" size={20} />,
    title: "Horarios",
    line1: "Lunes a Viernes: 9-21hs",
    line2: "Sábados: 9-13hs",
  },
]

export const Contacto = () => {
  return (
    <section id="contacto" className="flex flex-col items-center justify-center gap-8 w-full min-h-svh bg-[#F4F7FA] px-4 py-16">
      <div className="flex flex-col items-center gap-3 text-center max-w-2xl">
        <span className="text-primary bg-hover w-40 h-auto p-3 rounded-2xl flex items-center justify-center text-sm font-medium">
          Contacto
        </span>
        <h1 className="text-3xl md:text-5xl font-bold tracking-wide">
          Comenzá tu camino hacia un nuevo idioma
        </h1>
        <p className="text-tertiary text-sm md:text-base">
          Dejanos tus datos y un asesor se comunicará con vos para brindarte toda la información que necesitás.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 w-full max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-6 w-full md:w-1/3 bg-white rounded-2xl shadow-xl border border-hover p-8">
          <div className="flex flex-col items-center gap-3 text-center">
            <div className="bg-hover h-14 w-14 rounded-2xl flex items-center justify-center">
              <MailOpen color="rgb(0,86,164)" size={24} />
            </div>
            <h2 className="text-xl font-bold">Consultanos</h2>
            <p className="text-tertiary text-sm leading-relaxed">
              Si necesitás más información o te gustaría inscribirte a un curso, envianos un mensaje para poder empezar. ¡Te esperamos!
            </p>
          </div>
          <button className="bg-primary h-11 w-full rounded-2xl shadow-md text-white text-sm font-medium cursor-pointer transition-all duration-300 hover:bg-hover hover:text-primary hover:-translate-y-1 hover:shadow-xl">
            Contactarme
          </button>
        </div>

        <div className="flex flex-col gap-5 w-full md:w-2/3">

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {infoCards.map((card) => (
              <div
                key={card.title}
                className="flex flex-row items-center gap-4 bg-white rounded-2xl shadow-md border border-hover p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group"
              >
                <div className="bg-hover flex items-center justify-center rounded-xl h-10 w-10 shrink-0 transition-all duration-300 group-hover:scale-110">
                  {card.icon}
                </div>
                <div className="flex flex-col items-start gap-0.5">
                  <h5 className="text-sm font-bold">{card.title}</h5>
                  <p className="text-sm text-tertiary">{card.line1}</p>
                  <p className="text-xs text-tertiary">{card.line2}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mapa */}
          <div className="w-full shadow-xl rounded-2xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.005300612873!2d-58.38670972433041!3d-34.604027472954215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccac59a5bd441%3A0x1408e2f06974627!2sAv.%20Corrientes%201234%2C%20C1043AAZ%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1776704966520!5m2!1ses!2sar"
              width="100%"
              height="220"
              loading="lazy"
              className="w-full block"
            />
          </div>

        </div>
      </div>
    </section>
  )
}

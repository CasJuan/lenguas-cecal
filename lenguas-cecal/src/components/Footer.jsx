import React from 'react'
import footerBg from "../img/texture-lab-1776709607075.png"

export const Footer = () => {

    const navItems = [
        { id: 1, label: 'Inicio', path: '/' },
        { id: 2, label: 'Cursos', path: '#cursos' },
        { id: 3, label: 'Nosotros', path: '#nosotros' },
        { id: 4, label: 'Precios', path: '#precios' },
        { id: 5, label: 'Testimonios', path: '#testimonios' },
        { id: 6, label: 'Contacto', path: '#contacto' },
    ];

    return (
        <footer className="relative flex flex-col md:flex-row items-start justify-around w-full bg-blackP px-8 py-12 gap-10 overflow-hidden">
            <img
                src={footerBg}
                alt=""
                className="absolute right-0 top-0 h-full w-2/3 object-cover opacity-10 grayscale pointer-events-none select-none"
                style={{ maskImage: "linear-gradient(to right, transparent 0%, black 40%)" }}
            />

            <div className="relative z-10 flex flex-col items-start gap-4 w-full md:w-1/4">
                <div className="flex flex-col items-start gap-0.5">
                    <h1 className="text-xl text-whiteP font-serif">Lenguas Cecal</h1>
                    <h2 className="text-xs text-tertiary tracking-widest">INSTITUTO DE IDIOMAS</h2>
                </div>
                <p className="text-sm text-tertiary leading-relaxed">
                    Más de 38 años formando profesionales bilingües en Buenos Aires. Tu futuro comienza con un nuevo idioma.
                </p>
                <div className="flex flex-row gap-3 mt-1">
                    <a href="#" className="bg-white/10 hover:bg-white/20 transition-colors duration-200 h-9 w-9 rounded-xl flex items-center justify-center">
                    </a>
                    <a href="#" className="bg-white/10 hover:bg-white/20 transition-colors duration-200 h-9 w-9 rounded-xl flex items-center justify-center">
                    </a>
                    <a href="#" className="bg-white/10 hover:bg-white/20 transition-colors duration-200 h-9 w-9 rounded-xl flex items-center justify-center">
                    </a>
                </div>
            </div>

            <div className="hidden md:block relative z-10 w-px bg-white/10 self-stretch" />

            <div className="relative z-10 flex flex-col items-start gap-4 w-full md:w-1/5">
                <h2 className="text-sm font-semibold text-whiteP tracking-wide">Navegación</h2>
                <ul className="flex flex-col gap-2">
                    {navItems.map((item) => (
                        <li key={item.id}> < a href={item.path}
                            className="text-sm text-tertiary hover:text-whiteP transition-colors duration-200 cursor-pointer"
                        >
                            {item.label}
                        </a>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="hidden md:block relative z-10 w-px bg-white/10 self-stretch" />
            <div className="relative z-10 flex flex-col items-start gap-4 w-full md:w-1/4">
                <h2 className="text-sm font-semibold text-whiteP tracking-wide">Contacto</h2>
                <div className="flex flex-col gap-3">
                    {[
                        { label: "Dirección", value: "Av. Corrientes 1234, Piso 5. CABA, Buenos Aires" },
                        { label: "Teléfono", value: "(011) 4321-4321" },
                        { label: "Email", value: "info@lenguascecal.com.ar" },
                    ].map((item) => (
                        <div key={item.label} className="flex flex-col gap-0.5">
                            <h5 className="text-xs text-tertiary tracking-wide">{item.label}</h5>
                            <p className="text-sm text-whiteP">{item.value}</p>
                        </div>
                    ))}
                </div>
            </div>

        </footer >
    )
}

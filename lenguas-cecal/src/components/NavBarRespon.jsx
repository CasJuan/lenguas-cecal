import React from 'react'
import { PhoneCall, X } from 'lucide-react'

export const NavBarRespon = ({ open, setOpen }) => {
    const navItems = [
        { id: 1, label: 'Inicio', path: '/' },
        { id: 2, label: 'Cursos', path: '#cursos' },
        { id: 3, label: 'Nosotros', path: '#nosotros' },
        { id: 4, label: 'Precios', path: '#precios' },
        { id: 5, label: 'Testimonios', path: '#testimonios' },
        { id: 6, label: 'Contacto', path: '#contacto' },
    ];

    return (
        <div
            className={`fixed inset-0 z-50 flex flex-col justify-center items-center bg-primary text-white transition-transform duration-300 ease-in-out ${open ? "translate-x-0" : "translate-x-full"
                }`}
        >
            {/* Close button */}
            <button
                onClick={() => setOpen(false)}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Cerrar menú"
            >
                <X size={32} />
            </button>

            <ul className="flex flex-col items-center gap-6 w-full px-6 uppercase text-xl font-medium tracking-wide">
                {navItems.map((item) => (
                    <li key={item.id} className="w-full text-center">
                        <a
                            href={item.path}
                            onClick={() => setOpen(false)}
                            className="block w-full py-3 rounded-2xl hover:bg-white hover:text-primary transition-colors duration-200"
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>

            {/* Bottom info section */}
            <div className="absolute bottom-10 flex flex-col items-center gap-6 w-full px-6">
                <div className="flex items-center gap-3 hover:text-slate-200 cursor-pointer transition-colors">
                    <PhoneCall size={24} />
                    <span className="text-lg tracking-wide">(011) 1234-5678</span>
                </div>
                <button className="bg-white text-primary w-full max-w-[250px] py-4 rounded-xl font-bold uppercase hover:bg-slate-100 hover:scale-105 transition-all duration-300 shadow-xl active:scale-95">
                    Inscribirse
                </button>
            </div>
        </div>
    )
}

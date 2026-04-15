import { PhoneCall } from "lucide-react";


export const Nav = () => {

    const navItems = [
        { id: 1, label: 'Inicio', path: '/' },
        { id: 2, label: 'Cursos', path: '#cursos' },
        { id: 3, label: 'Nosotros', path: '#nosotros' },
        { id: 4, label: 'Precios', path: '#precios' },
        { id: 5, label: 'Testimonios', path: '#testimonios' },
        { id: 6, label: 'Contacto', path: '#contacto' },
    ];

    return (
        <>
            <nav className="flex flex-row items-center justify-around w-full h-20 shadow-2xs fixed z-50">
                <div className="flex flex-col items-start gap-0.5">
                    <h1 className="text-xl text-primary font-serif">Lenguas Cecal</h1>
                    <h2 className="text-xs">INSTITUTO DE IDIOMAS</h2>
                </div>
                <ul className="flex flex-row justify-evenly items-center gap-2">
                    {
                        navItems.map((item) => (
                            <li key={item.id} className="hover:bg-hover hover:text-primary hover:w-auto hover:h-10 hover:rounded-2xl px-2 flex flex-col items-center justify-center">
                                <a href={item.path}>{item.label}</a></li>
                        ))
                    }
                </ul>
                <div className="flex flex-row items-center justify-center gap-4">
                    <div className="flex flex-row items-center justify-center gap-2 hover:text-primary cursor-pointer">
                        <PhoneCall className="w-4.5" />
                        <p className="text-base">(011) 1234-5678</p>
                    </div>
                    <button className="bg-primary text-white w-auto h-auto p-2 rounded-lg hover:bg-hover hover:text-primary">Inscribirse</button>
                </div>
            </nav>
        </>
    )
}

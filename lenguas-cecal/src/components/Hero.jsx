import { ArrowRight, GraduationCap, Users, Globe } from "lucide-react";
import { InfoCard } from "./mini-components/InfoCard";


export const Hero = () => {
    return (
        <main className="flex flex-col items-center justify-center gap-6 md:gap-8 w-full min-h-svh px-6 py-24 md:py-0 text-center">
            <span className="text-primary bg-hover w-auto h-10 p-3 rounded-2xl flex items-center text-sm md:text-base">
                Desde 1986 formando profesionales
            </span>
            <div className="flex flex-col items-center justify-center gap-2 md:gap-4">
                <h1 className="text-4xl md:text-6xl tracking-wide">
                    Aprendé idiomas con los
                </h1>
                <span className="text-4xl md:text-6xl text-primary font-bold tracking-wide">
                    mejores profesionales
                </span>
            </div>
            <p className="text-tertiary text-base md:text-lg tracking-wide max-w-xl">
                Más de 38 años formando estudiantes en inglés, portugués, italiano, francés y alemán. Clases presenciales y online con metodología personalizada.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-5 w-full max-w-xs sm:max-w-none">
                <div className="flex flex-row items-center justify-center w-full sm:w-auto h-10 px-4 bg-primary text-white rounded-2xl gap-2 hover:bg-hover hover:text-primary transition cursor-pointer">
                    <button>Ver cursos</button>
                    <ArrowRight size={18} />
                </div>
                <button className="w-full sm:w-auto h-10 px-4 rounded-2xl border-hover border shadow-2xs hover:bg-primary hover:text-white transition">
                    Solicitar información
                </button>
            </div>
            <div className="flex flex-row items-center justify-center gap-5 md:gap-10 flex-wrap">
                <InfoCard icon={<GraduationCap color="rgb(0,86,164)" />} number={"+5000"} text={"Egresados"} />
                <InfoCard icon={<Users color="rgb(0,86,164)" />} number={"+38"} text={"Años de experiencia"} />
                <InfoCard icon={<Globe color="rgb(0,86,164)" />} number={"5"} text={"Idiomas disponibles"} />
            </div>
        </main>
    )
}

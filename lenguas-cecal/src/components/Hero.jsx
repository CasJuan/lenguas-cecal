import { ArrowRight,GraduationCap, Users, Globe } from "lucide-react";
import { InfoCard } from "./mini-components/InfoCard";


export const Hero = () => {
    return (
        <>
            <main className="flex flex-col items-center justify-center gap-8 w-full h-svh">
                <span className="text-primary bg-hover w-auto h-10 p-3 rounded-2xl flex items-center">Desde 1986 formando profesionales</span>
                <div className="flex flex-col items-center justify-center gap-4">
                    <h1 className="text-6xl tracking-wide">Aprende idiomas con los</h1>
                    <span className="text-6xl text-primary font-bold tracking-wide">mejores profesionales</span>
                </div>
                <p className="text-tertiary text-lg text-center tracking-wide">Mas de 38 años formando estudiantes en ingles, portugues, <br /> italiano, frances y aleman. Clases presenciales y online con <br /> metodologia personalizada.</p>
                <div className="flex flex-row items-center justify-center gap-5">
                    <div className="flex flex-row items-center justify-center w-auto h-10 p-2 bg-primary text-white rounded-2xl gap-2 hover:bg-hover hover:text-primary transition">
                        <button>Ver cursos</button>
                        <ArrowRight />
                    </div>
                    <button className="w-auto h-10 p-2 rounded-2xl border-hover border shadow-2xs hover:bg-primary hover:text-white transition">Solicitar informacion</button>
                </div>
                <div className="flex flex-row items-center justify-center gap-10">
                    <InfoCard icon={<GraduationCap color="rgb(0,86,164)" />} number={"+5000"} text={"Egresado"}/>
                    <InfoCard icon={<Users color="rgb(0,86,164)" />} number={"+38"} text={"Años de experiencia"}/>
                    <InfoCard icon={<Globe color="rgb(0,86,164)" />} number={"5"} text={"Idiomas disponibles"}/>
                </div>
            </main>
        </>
    )
}

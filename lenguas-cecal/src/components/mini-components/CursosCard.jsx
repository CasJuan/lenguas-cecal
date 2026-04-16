import React from 'react'
import { ArrowRight } from "lucide-react";


export const CursosCard = ({ icon, titulo, descp, niveles, modalidades }) => {
    const renderIcon = () => {
        if (React.isValidElement(icon)) return icon;
        if (typeof icon === 'function') return React.createElement(icon);
        return icon;
    };
    return (
        <div className="flex flex-col items-start justify-between gap-4 h-auto min-h-70 w-96 bg-[#F4F7FA] rounded-2xl shadow-md border border-gray-100 m-2 p-5 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group">
            <div className="h-12 w-12 bg-primary/10 flex items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110">
                {renderIcon()}
            </div>
            <div className="flex flex-col gap-2">
                <h2 className="text-xl font-bold">{titulo}</h2>
                <p className="text-sm text-tertiary leading-relaxed">{descp}</p>
            </div>
            <ul className="flex flex-row items-center flex-wrap gap-2">
                {niveles.map((nivel) => (
                    <li
                        key={nivel}
                        className="w-auto h-auto px-3 py-1 rounded-2xl border border-primary/20 bg-primary/5 text-xs text-primary font-medium transition-colors duration-200 group-hover:border-primary/40"
                    >
                        {nivel}
                    </li>
                ))}
            </ul>
            <div className="flex flex-row justify-between items-center w-full pt-2 border-t border-gray-200">
                <em className="text-sm text-tertiary">{modalidades}</em>
                <div className="flex flex-row justify-center items-center gap-1 group/btn">
                    <button className="text-primary text-sm font-medium">Más info</button>
                    <ArrowRight
                        color="rgb(0,86,164)"
                        className="h-4 transition-transform duration-200 group-hover/btn:translate-x-1"
                    />
                </div>
            </div>
        </div>
    )
}

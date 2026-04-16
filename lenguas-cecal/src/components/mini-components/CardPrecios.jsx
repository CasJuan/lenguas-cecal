import React from 'react'
import { Check } from "lucide-react";


export const CardPrecios = ({ title, desc, price, list }) => {
    return (
        <div className="flex flex-col items-center justify-between gap-4 w-full h-full bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group">
            <div className="w-full bg-primary flex flex-col items-center justify-center gap-1 py-6 px-4 transition-all duration-300 group-hover:py-8">
                <h3 className="text-2xl font-bold text-white">{title}</h3>
                <p className="text-sm text-white/70 text-center">{desc}</p>
            </div>
            <div className="flex items-baseline gap-1 mt-2">
                <h5 className="text-4xl font-bold text-primary">{price}</h5>
                <em className="text-sm text-tertiary">/mes</em>
            </div>
            <div className="w-3/4 h-px bg-gray-100 rounded-full" />
            <ul className="flex flex-col items-start justify-center gap-3 px-8 w-full">
                {list.map((item) => (
                    <li key={item} className="flex flex-row items-center gap-2">
                        <span className="bg-primary/10 rounded-full p-1">
                            <Check size={12} color="rgb(0,86,164)" />
                        </span>
                        <span className="text-sm text-gray-600">{item}</span>
                    </li>
                ))}
            </ul>
            <button className="bg-primary text-white w-3/4 p-3 mb-6 mt-2 rounded-xl transition-all duration-200 hover:bg-hover hover:text-primary font-medium text-sm cursor-pointer">
                Inscribirme
            </button>
        </div>
    )
}

import React from 'react'
import { ArrowRight } from "lucide-react";


export const CursosCard = ({ icon, titulo, descp, niveles, modalidades }) => {
    const renderIcon = () => {
        if (React.isValidElement(icon)) return icon;
        if (typeof icon === 'function') return React.createElement(icon);
        return icon;
    };
    return (
        <div className='flex flex-col items-start justify-center
        gap-4 h-70 w-96 bg-[#F4F7FA] rounded-2xl shadow-2xl m-2 p-2'>
            <div className='h-10 w-10 bg-hover flex items-center justify-center rounded-xl'>{renderIcon()}</div>
            <h2 className='text-xl font-bold'>{titulo}</h2>
            <p className='text-bases text-tertiary'>{descp}</p>
            <ul className='flex flex-row items-center justify-center gap-2'>
                {niveles.map((nivel) => (
                    <li key={nivel} className='w-auto h-auto p-2 rounded-2xl border border-hover text-xs text-tertiary'>{nivel}</li>
                ))}
            </ul>
            <div className='flex flex-row justify-between items-center gap-2 w-full'>
                <em className='text-sm text-tertiary '>{modalidades}</em>
                <div className='flex flex-row justify-center items-center gap-0.5'>
                    <button className='text-primary text-sm'> Mas info</button>
                    <ArrowRight color="rgb(0,86,164)" className='h-4' />
                </div>
            </div>
        </div>
    )
}

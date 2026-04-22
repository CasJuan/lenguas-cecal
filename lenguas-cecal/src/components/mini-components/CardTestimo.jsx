import React from 'react'
import { Quote, Star } from 'lucide-react'

export const CardTestimo = ({ desc, nombre, profesion, curso }) => {
    return (
        <div className='flex flex-col items-start justify-center gap-5 h-70 w-96 bg-white rounded-2xl shadow-2xl border border-hover cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group'>
            <Quote className='ml-5' color='rgb(0,86,164)' />
            <div className='flex flex-row items-center justify-center gap-2 ml-5'>
                <Star size={15} color='rgb(0,86,164)' />
                <Star size={15} color='rgb(0,86,164)' />
                <Star size={15} color='rgb(0,86,164)' />
                <Star size={15} color='rgb(0,86,164)' />
                <Star size={15} color='rgb(0,86,164)' />
            </div>
            <p className='text-base text-tertiary ml-5'>{desc}</p>
            <div className='bg-hover w-11/12 h-0.5 self-center'></div>
            <div className='flex flex-row items-center justify-around w-full'>
                <div className='flex flex-col items-start justify-center ml-5'>
                    <h5 className='text-base'>{nombre}</h5>
                    <p className='text-xs text-tertiary'>{profesion}</p>
                </div>
                <p className="w-auto h-auto px-3 py-1 rounded-2xl border border-primary/20 bg-primary/5 text-xs text-primary font-medium transition-colors duration-200 group-hover:border-primary/40">{curso}</p>
            </div>
        </div>
    )
}

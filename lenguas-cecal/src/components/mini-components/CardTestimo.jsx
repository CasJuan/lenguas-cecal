import React from 'react'
import { Quote, Star } from 'lucide-react'

export const CardTestimo = ({ desc, nombre, profesion, curso }) => {
    return (
        <div className='flex flex-col items-start justify-center gap-5 h-80 w-80 bg-hover rounded-2xl shadow-2xl'>
            <Quote />
            <div className='flex flex-row items-center justify-center gap-2'>
                <Star size={15} />
                <Star size={15} />
                <Star size={15} />
                <Star size={15} />
                <Star size={15} />
            </div>
            <p className='text-base text-tertiary'>{desc}</p>
            <div></div>
            <div className='flex flex-row items-center justify-center'>
                <div className='flex flex-col items-start justify-center'>
                    <h5>{nombre}</h5>
                    <p>{profesion}</p>
                </div>
                <p className='bg-hover rounded-2xl text-base text-tertiary'>{curso}</p>
            </div>
        </div>
    )
}

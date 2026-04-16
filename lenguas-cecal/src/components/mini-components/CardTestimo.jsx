import React from 'react'
import { Quote, Star } from 'lucide-react'

export const CardTestimo = ({desc,nombre,profesion,curso}) => {
    return (
        <div className='flex flex-col items-start justify-center'>
            <Quote />
            <Star />
            <p>{desc}</p>
            <div></div>
            <div>
            <div>
                <h5>{nombre}</h5>
                <p>{profesion}</p>
            </div>
            <p>{curso}</p>
            </div>
        </div>
    )
}

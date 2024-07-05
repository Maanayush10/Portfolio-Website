// "use client"
// import React from 'react'
// import { title } from 'process'

// import { recommnededString, testimonials } from '@/data'
// import { cn } from '@/utils/cn'
// import { HoverEffect } from './ui/CardHoverEffect'

// const Clients = () => {
//     return (
//         <div className='py-20' id="recomendations">
//             <h1 className='heading'>
//                 <span className="text-purple">Recommendation</span>
//             </h1>
//             <div className='flex flex-col items-center '>
//                 <div className='h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden'>
//                     <HoverEffect items={testimonials} className='sm:h-screen md:h-[50vh] rounded-md py-5 flex flex-col items-center justify-center relative overflow-hidden' />
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Clients

"use client"
import React from 'react'

import { testimonials } from '@/data'
import { HoverEffect } from './ui/CardHoverEffect'

const Clients = () => {
    return (
        <div className='py-20' id="recomendations">
            <h1 className='heading'>
                <span className="text-purple">Recommendation</span>
            </h1>
            <div className='flex flex-col items-center '>
                <div className='w-full'>
                    <HoverEffect items={testimonials} className='h-auto sm:h-auto md:h-[50vh] rounded-md py-5 flex flex-col items-center justify-center relative overflow-hidden' />
                </div>
            </div>
        </div>
    )
}

export default Clients

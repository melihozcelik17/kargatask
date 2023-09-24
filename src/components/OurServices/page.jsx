import React from 'react';
import { ServicesData } from './ServicesData';






export default function Services() {
    return (
        <main>
            <div>
                <h1 className='w-336 h-56 text-[48px] font-bold'>
                    OUR SERVICES
                </h1>
                <div className="grid grid-cols-4 gap-4 justify-center align-center items-center">
                    {
                        ServicesData.map((item => {
                            return (<div className='w-440 h-440' key={item.index}>
                                <h2 className='w-192 h-43 text-[36px]'>{item.title} </h2>
                                <img src={item.image} alt='logo' />
                                <p className='w-400 h-24 text-[16px]'>{item.description}</p>
                            </div>)
                        }))
                    }
                </div>






            </div>
        </main >
    )
}
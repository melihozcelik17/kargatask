import React from 'react';
import Image from 'next/image';
import { AboutData } from './AboutData';




export default function Team() {
    return (
        <main>
            <div className='flex relative p-8'>

                <h1 className='bg-[#4148FF 100% #4148FF 0%] w-[864px] h-[120px] text-[48px] font-bold '>
                    MANCA ART - UKRAINIAN GAME
                    ART OUTSOURCING STUDIO
                    <Image className="absolute -left-48 -top-44 -z-10" src='/ellipse 5.png' width={350}
                        height={350}
                        alt="Ellipse"
                    />
                </h1>

                <p className='w-[744px] h-[136px] text-[24px] font-semibold '>
                    What does it mean? It's simple: we take over the implementation of your project in part or in full - from concepts to the finished art product. Our company employs a staff of qualified specialists in the field of digital drawing.
                </p>
            </div>
            <div className=" flex gap-4 justify-center align-center items-center p-16 ">
                {
                    AboutData.map((item => {
                        return (<div className='services_map' key={item.index}>
                            <img src={item.image} alt='logo' />
                            <h2 className='text-[30px] font-semibold'>{item.title} </h2>
                            <p>{item.description}</p>
                        </div>)
                    }))
                }
            </div>


        </main>
    )
}

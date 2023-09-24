"use client"; // for nextjs 13.4 user
import React from 'react';
import Link from "next/link"
import Image from 'next/image';




export default function Home() {


    const slideLeft = () => {
        let slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft - 235;
    };

    const slideRight = () => {
        let slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft + 235;
    };
    return (
        <main className='py-14 '>
            <nav className='flex justify-between items-center px-[72px]'>
                <Image className=' ' src='/kargakarga.svg' width={276}
                    height={51}
                    alt="Kargakarga"
                />


                <div className='flex gap-4'>


                    <Link href="/projects"  >
                        <button className="text-white bg-gray-800 hover:bg-gray-900 tracking-wider focus:outline-none focus:ring-4 focus:ring-gray-300  rounded-2xl text-[14px] p-4  ">Projects</button>
                    </Link>
                    <Link href="/services" >
                        <button className="text-white bg-gray-800 hover:bg-gray-900 tracking-wider focus:outline-none focus:ring-4 focus:ring-gray-300  rounded-2xl text-[14px] p-4  ">Services</button>
                    </Link>
                    <Link href="/aboutUs" >
                        <button className="text-white bg-gray-800 hover:bg-gray-900 tracking-wider focus:outline-none focus:ring-4 focus:ring-gray-300  rounded-2xl text-[14px] p-4  ">About us</button>
                    </Link>
                    <Link href="/contactUs" >
                        <button className="text-white bg-gray-800 hover:bg-gray-900 tracking-wider focus:outline-none focus:ring-4 focus:ring-gray-300  rounded-2xl text-[14px] p-4  ">Contact us</button>
                    </Link>
                    <Link href="/start" >
                        <button className="text-white bg-[#294DFA] hover:[#294DFA] focus:outline-none focus:ring-4 focus:ring-gray-300  rounded-2xl text-[14px] p-4 ">Start a Projects</button>
                    </Link>
                </div>



            </nav  >
            <div id="slider" className='flex px-[120px] py-40'>
                <div className=' w-1/2 items-start justify-center  h-full '>
                    <div className='  flex flex-col gap-4 mb-8'>

                        <h1 className='text-[64px] font-bold leading-[75px] tracking-wide '>
                            WE'LL EMBODY THE UNIVERSE THAT LIVES IN YOUR HEART</h1>
                        <p className='text-[24px] font-semibold '>3D, 2D, Branding and Web. </p>
                    </div>

                    <button className='bg-[#294DFA] text-white rounded-2xl text-[16px] px-8 py-6 tracking-wider'>Join Us</button>
                </div>
                <Image className=' w-1/2' src='/homecups.png' width={910}
                    height={610}
                    alt="Brand"
                />

            </div>

            <div className=" flex gap-2" >
                <button>

                    <svg class="w-8 h-11 bg-gray-300 text-black  " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10" title="scroll left" onClick={slideLeft}>
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4" />
                    </svg>
                </button>
                <button  >
                    <svg className="w-8 h-11 bg-gray-300 text-black  " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" title="scroll right" onClick={slideRight} />
                    </svg>
                </button>


            </div>



        </main >
    )
}
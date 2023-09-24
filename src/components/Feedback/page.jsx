"use client"; // for nextjs 13.4 user
import React from 'react';
import TrendingSlider from "./TrendingSlider";



export default function Feedback() {
    const slideLeft = () => {
        let slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft - 235;
    };

    const slideRight = () => {
        let slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft + 235;
    };
    return (
        <main className=''>
            <h1 className=' w-[864px] h-[120px] text-[48px] font-bold'>CUSTOMER FEEDBACK</h1>
            {/* <div className=" " >
                <button type="button" >
                    <svg className="w-8 h-11 bg-gray-300 text-black w-50 h-56 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" title="scroll right" onClick={slideRight} />
                    </svg>
                    <svg class="w-8 h-11 bg-gray-300 text-black  " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10" title="scroll left" onClick={slideLeft}>
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4" />
                    </svg>

                </button>
            </div> */}
            <TrendingSlider />
        </main>
    )
}

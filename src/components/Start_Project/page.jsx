import React from 'react';
import Image from 'next/image';



export default function StartProject() {
    return (
        <main className='bg-black text-white h-auto max-w ml-auto '>
            <h1 className=' w-[864px] h-[120px] text-[48px] font-bold '>
                HEY! YOU CAN SEND US A MESSAGE
                TO START WORKİNG ON THE PROJECT
            </h1>
            <Image className=' h-auto max-w-full ml-auto ' src='/Free_iPhone_12_Mockup_3 1.png' width={848}
                height={520}
                alt="Picture of the author"
            />
            <button className=' text-white text-[18px] bg-[#294DFA] hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-14 px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'>
                START THE PROJECT
            </button>

            <p className='text-[24px]'> Or write to us at:  <br /> info@kargakarga.com </p>

        </main>
    )
}

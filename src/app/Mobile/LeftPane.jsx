import React from 'react';
import Link from "next/link"
import Image from 'next/image';



export default function LeftPane() {
    return (
        <main className=' '>
            {/* fixed left-0 top-0 h-screen w-30 bg-[#0D1840] text-white p-3 space-y-2" style={{ zIndex: 10 }} */}
            <div className='absolute left-0 top-0 h-screen w-30 text-white p-3 space-y-2 '>

                <div className="absolute left-0 top-0 h-screen w-60  text-black p-3 space-y-2  ">
                    <div className=" bg-[#0D1840] text-black   p-10 space-x-4">
                        <Image className=' items-start' src='/Rectangle 693.png' width={80}
                            height={76}
                            alt="avatar" />
                        <div className='text-white '>
                            <h2 className="text-lg font-semibold">Murat Turan</h2>

                            <span className=" space-x-1">
                                <p rel="noopener noreferrer" href="#" className="text-xs hover:underline ">Tedarik Zinciri Yöneticisi</p>
                            </span>
                        </div>


                    </div>

                    <div className="divide-y divide-gray-700">
                        <ul className="pt-2 pb-4 space-y-1 text-sm">

                            <h1>MENU</h1>
                            <li className="dark:bg-gray-800 dark:text-gray-50">
                                <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_1_41)">
                                            <path d="M8.57142 0.5C8.42934 0.5 8.29308 0.552678 8.19261 0.646447C8.09215 0.740215 8.03571 0.867392 8.03571 1V6C8.03571 6.13261 8.09215 6.25979 8.19261 6.35355C8.29308 6.44732 8.42934 6.5 8.57142 6.5H13.9286C14.0706 6.5 14.2069 6.44732 14.3074 6.35355C14.4078 6.25979 14.4643 6.13261 14.4643 6C14.4624 4.54184 13.841 3.14389 12.7363 2.11281C11.6315 1.08174 10.1337 0.50172 8.57142 0.5ZM9.10713 5.5V1.528C10.1934 1.6429 11.2059 2.0983 11.979 2.81977C12.7521 3.54125 13.2401 4.48613 13.3634 5.5H9.10713Z" fill="#0D1840" />
                                            <path d="M11.7856 7.5385H6.96419V3C6.96419 2.86739 6.90775 2.74022 6.80729 2.64645C6.70682 2.55268 6.57056 2.5 6.42848 2.5C5.64021 2.4997 4.85989 2.64701 4.13371 2.9332C3.40753 3.2194 2.75025 3.63867 2.20078 4.16619C1.65132 4.69371 1.22083 5.31876 0.934809 6.00434C0.648788 6.68992 0.513047 7.42208 0.53562 8.1575C0.595279 9.55506 1.2162 10.8805 2.27497 11.8703C3.33373 12.8602 4.7528 13.442 6.25009 13.5H6.43062C7.98528 13.4995 9.47674 12.9257 10.5801 11.9034C11.6835 10.8812 12.3093 9.49346 12.3213 8.0425C12.3219 7.9765 12.3085 7.91105 12.2818 7.84993C12.2551 7.7888 12.2158 7.73321 12.166 7.68636C12.1161 7.6395 12.0569 7.60231 11.9916 7.57694C11.9263 7.55156 11.8563 7.5385 11.7856 7.5385ZM9.77134 11.2415C9.31005 11.6593 8.76331 11.986 8.16375 12.2022C7.56419 12.4185 6.92411 12.5197 6.28169 12.5C5.05682 12.4525 3.89593 11.9766 3.02981 11.1669C2.16369 10.3571 1.65578 9.27279 1.60705 8.1295C1.57272 7.00072 1.99436 5.90116 2.78826 5.04903C3.58217 4.19691 4.69031 3.65452 5.89276 3.5295V8.0405C5.89276 8.17311 5.94921 8.30028 6.04967 8.39405C6.15014 8.48782 6.2864 8.5405 6.42848 8.5405H11.214C11.0839 9.5699 10.5738 10.5249 9.77134 11.2415Z" fill="#0D1840" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1_41">
                                                <rect width="15" height="14" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>


                                    <span>Eğitimler</span>
                                </a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_1_27)">
                                            <path d="M5.4172 0.5H2.08291C1.67262 0.500397 1.27926 0.652729 0.989195 0.923553C0.699126 1.19438 0.53605 1.56156 0.535767 1.9445V5.0555C0.53605 5.43844 0.699126 5.80562 0.989195 6.07645C1.27926 6.34727 1.67262 6.4996 2.08291 6.5H5.4172C5.82749 6.4996 6.22084 6.34727 6.51091 6.07645C6.80098 5.80562 6.96406 5.43844 6.96434 5.0555V1.9445C6.96406 1.56156 6.80098 1.19438 6.51091 0.923553C6.22084 0.652729 5.82749 0.500397 5.4172 0.5ZM5.89291 5.0555C5.89291 5.1733 5.84281 5.28629 5.75361 5.36963C5.66441 5.45298 5.54341 5.49987 5.4172 5.5H2.08291C1.95669 5.49987 1.83569 5.45298 1.7465 5.36963C1.6573 5.28629 1.6072 5.1733 1.6072 5.0555V1.9445C1.6072 1.8267 1.6573 1.71371 1.7465 1.63037C1.83569 1.54702 1.95669 1.50013 2.08291 1.5H5.4172C5.54341 1.50013 5.66441 1.54702 5.75361 1.63037C5.84281 1.71371 5.89291 1.8267 5.89291 1.9445V5.0555Z" fill="white" />
                                            <path d="M12.9172 0.5H9.58291C9.17262 0.500397 8.77926 0.652729 8.48919 0.923553C8.19913 1.19438 8.03605 1.56156 8.03577 1.9445V5.0555C8.03605 5.43844 8.19913 5.80562 8.48919 6.07645C8.77926 6.34727 9.17262 6.4996 9.58291 6.5H12.9172C13.3275 6.4996 13.7208 6.34727 14.0109 6.07645C14.301 5.80562 14.4641 5.43844 14.4643 5.0555V1.9445C14.4641 1.56156 14.301 1.19438 14.0109 0.923553C13.7208 0.652729 13.3275 0.500397 12.9172 0.5ZM13.3929 5.0555C13.3929 5.1733 13.3428 5.28629 13.2536 5.36963C13.1644 5.45298 13.0434 5.49987 12.9172 5.5H9.58291C9.45669 5.49987 9.33569 5.45298 9.2465 5.36963C9.1573 5.28629 9.1072 5.1733 9.1072 5.0555V1.9445C9.1072 1.8267 9.1573 1.71371 9.2465 1.63037C9.33569 1.54702 9.45669 1.50013 9.58291 1.5H12.9172C13.0434 1.50013 13.1644 1.54702 13.2536 1.63037C13.3428 1.71371 13.3929 1.8267 13.3929 1.9445V5.0555Z" fill="white" />
                                            <path d="M12.9172 7.5H9.58291C9.17262 7.5004 8.77926 7.65273 8.48919 7.92355C8.19913 8.19438 8.03605 8.56156 8.03577 8.9445V12.0555C8.03605 12.4384 8.19913 12.8056 8.48919 13.0764C8.77926 13.3473 9.17262 13.4996 9.58291 13.5H12.9172C13.3275 13.4996 13.7208 13.3473 14.0109 13.0764C14.301 12.8056 14.4641 12.4384 14.4643 12.0555V8.9445C14.4641 8.56156 14.301 8.19438 14.0109 7.92355C13.7208 7.65273 13.3275 7.5004 12.9172 7.5ZM13.3929 12.0555C13.3929 12.1733 13.3428 12.2863 13.2536 12.3696C13.1644 12.453 13.0434 12.4999 12.9172 12.5H9.58291C9.45669 12.4999 9.33569 12.453 9.2465 12.3696C9.1573 12.2863 9.1072 12.1733 9.1072 12.0555V8.9445C9.1072 8.8267 9.1573 8.71371 9.2465 8.63037C9.33569 8.54702 9.45669 8.50013 9.58291 8.5H12.9172C13.0434 8.50013 13.1644 8.54702 13.2536 8.63037C13.3428 8.71371 13.3929 8.8267 13.3929 8.9445V12.0555Z" fill="white" />
                                            <path d="M5.4172 7.5H2.08291C1.67262 7.5004 1.27926 7.65273 0.989195 7.92355C0.699126 8.19438 0.53605 8.56156 0.535767 8.9445V12.0555C0.53605 12.4384 0.699126 12.8056 0.989195 13.0764C1.27926 13.3473 1.67262 13.4996 2.08291 13.5H5.4172C5.82749 13.4996 6.22084 13.3473 6.51091 13.0764C6.80098 12.8056 6.96406 12.4384 6.96434 12.0555V8.9445C6.96406 8.56156 6.80098 8.19438 6.51091 7.92355C6.22084 7.65273 5.82749 7.5004 5.4172 7.5ZM5.89291 12.0555C5.89291 12.1733 5.84281 12.2863 5.75361 12.3696C5.66441 12.453 5.54341 12.4999 5.4172 12.5H2.08291C1.95669 12.4999 1.83569 12.453 1.7465 12.3696C1.6573 12.2863 1.6072 12.1733 1.6072 12.0555V8.9445C1.6072 8.8267 1.6573 8.71371 1.7465 8.63037C1.83569 8.54702 1.95669 8.50013 2.08291 8.5H5.4172C5.54341 8.50013 5.66441 8.54702 5.75361 8.63037C5.84281 8.71371 5.89291 8.8267 5.89291 8.9445V12.0555Z" fill="white" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1_27">
                                                <rect width="15" height="14" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                    <span>Analiz</span>
                                </a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current ">
                                        <path d="M448.205,392.507c30.519-27.2,47.8-63.455,47.8-101.078,0-39.984-18.718-77.378-52.707-105.3C410.218,158.963,366.432,144,320,144s-90.218,14.963-123.293,42.131C162.718,214.051,144,251.445,144,291.429s18.718,77.378,52.707,105.3c33.075,27.168,76.861,42.13,123.293,42.13,6.187,0,12.412-.273,18.585-.816l10.546,9.141A199.849,199.849,0,0,0,480,496h16V461.943l-4.686-4.685A199.17,199.17,0,0,1,448.205,392.507ZM370.089,423l-21.161-18.341-7.056.865A180.275,180.275,0,0,1,320,406.857c-79.4,0-144-51.781-144-115.428S240.6,176,320,176s144,51.781,144,115.429c0,31.71-15.82,61.314-44.546,83.358l-9.215,7.071,4.252,12.035a231.287,231.287,0,0,0,37.882,67.817A167.839,167.839,0,0,1,370.089,423Z"></path>
                                        <path d="M60.185,317.476a220.491,220.491,0,0,0,34.808-63.023l4.22-11.975-9.207-7.066C62.918,214.626,48,186.728,48,156.857,48,96.833,109.009,48,184,48c55.168,0,102.767,26.43,124.077,64.3,3.957-.192,7.931-.3,11.923-.3q12.027,0,23.834,1.167c-8.235-21.335-22.537-40.811-42.2-56.961C270.072,30.279,228.3,16,184,16S97.928,30.279,66.364,56.206C33.886,82.885,16,118.63,16,156.857c0,35.8,16.352,70.295,45.25,96.243a188.4,188.4,0,0,1-40.563,60.729L16,318.515V352H32a190.643,190.643,0,0,0,85.231-20.125,157.3,157.3,0,0,1-5.071-33.645A158.729,158.729,0,0,1,60.185,317.476Z"></path>
                                    </svg>
                                    <span>Raporlar</span>
                                </a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                    <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8.91911" cy="5.43449" r="3.64177" stroke="#343A40" stroke-width="2" />
                                        <path d="M16.6554 15.0275C16.6554 12.6348 13.3303 10.6952 9.22859 10.6952C5.12686 10.6952 1.80176 12.6348 1.80176 15.0275" stroke="#343A40" stroke-width="2" />
                                    </svg>


                                    <span>Profil</span>
                                </a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.875 13.125V3.125C1.875 2.43464 2.43464 1.875 3.125 1.875H11.875C12.5654 1.875 13.125 2.43464 13.125 3.125V9.375C13.125 10.0654 12.5654 10.625 11.875 10.625H5.625C5.35446 10.6245 5.09114 10.7123 4.875 10.875L1.875 13.125ZM3.125 3.125V10.625L4.45875 9.625C4.67478 9.46207 4.93817 9.37427 5.20875 9.375H11.875V3.125H3.125Z" fill="#343A40" />
                                    </svg>

                                    <span>TİM’e Yaz</span>
                                </a>
                            </li>
                            {/* </ul>
                        <ul className="pt-4 pb-2 space-y-1 text-sm"> */}
                            <h1>TERCİHLER</h1>
                            <li>
                                <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.125 13.125H1.875V12.5C1.87776 10.0849 3.8349 8.12776 6.25 8.125H8.75C11.1651 8.12776 13.1222 10.0849 13.125 12.5V13.125H11.875V12.5C11.8729 10.775 10.475 9.37707 8.75 9.375H6.25C4.52497 9.37707 3.12707 10.775 3.125 12.5V13.125ZM7.5 7.5C5.77411 7.5 4.375 6.10089 4.375 4.375C4.375 2.64911 5.77411 1.25 7.5 1.25C9.22589 1.25 10.625 2.64911 10.625 4.375C10.6229 6.10003 9.22503 7.49793 7.5 7.5ZM7.5 2.5C6.46447 2.5 5.625 3.33947 5.625 4.375C5.625 5.41053 6.46447 6.25 7.5 6.25C8.53553 6.25 9.375 5.41053 9.375 4.375C9.375 3.33947 8.53553 2.5 7.5 2.5Z" fill="#343A40" />
                                    </svg>

                                    <span>Yetkilendirme</span>
                                </a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                        <rect width="15" height="15" fill="url(#pattern0)" />
                                        <defs>
                                            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                                <use />
                                            </pattern>
                                        </defs>
                                    </svg>
                                    <span>Şifremi Değiştir</span>
                                </a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.63751 13.75H6.36251C6.06883 13.75 5.81473 13.5456 5.75188 13.2588L5.49751 12.0813C5.15817 11.9326 4.8364 11.7466 4.53814 11.5269L3.39001 11.8925C3.11001 11.9818 2.80563 11.8639 2.65876 11.6094L1.51876 9.64C1.3735 9.38532 1.42355 9.06405 1.63939 8.86563L2.53001 8.05313C2.48951 7.68507 2.48951 7.31368 2.53001 6.94562L1.63939 6.135C1.42323 5.93648 1.37316 5.61483 1.51876 5.36L2.65626 3.38937C2.80313 3.13481 3.10751 3.01696 3.38751 3.10625L4.53563 3.47187C4.68817 3.35885 4.84697 3.25452 5.01126 3.15938C5.16897 3.07043 5.33128 2.9899 5.49751 2.91812L5.75251 1.74187C5.81505 1.45498 6.06888 1.25031 6.36251 1.25H8.63751C8.93114 1.25031 9.18497 1.45498 9.24751 1.74187L9.50501 2.91875C9.6805 2.99595 9.85141 3.08317 10.0169 3.18C10.1712 3.26926 10.3204 3.36712 10.4638 3.47312L11.6125 3.1075C11.8923 3.01854 12.1963 3.13635 12.3431 3.39062L13.4806 5.36125C13.6259 5.61593 13.5758 5.9372 13.36 6.13562L12.4694 6.94812C12.5099 7.31618 12.5099 7.68757 12.4694 8.05562L13.36 8.86812C13.5758 9.06655 13.6259 9.38782 13.4806 9.6425L12.3431 11.6131C12.1963 11.8674 11.8923 11.9852 11.6125 11.8962L10.4638 11.5306C10.3184 11.6377 10.1673 11.7368 10.0113 11.8275C9.8474 11.9224 9.67839 12.0082 9.50501 12.0844L9.24751 13.2588C9.18471 13.5454 8.93095 13.7498 8.63751 13.75ZM4.76251 10.1431L5.27501 10.5181C5.39054 10.6032 5.51096 10.6815 5.63564 10.7525C5.75295 10.8204 5.87374 10.8822 5.99751 10.9375L6.58064 11.1931L6.86626 12.5H8.13501L8.42063 11.1925L9.00376 10.9369C9.25832 10.8246 9.49995 10.685 9.72438 10.5206L10.2375 10.1456L11.5131 10.5519L12.1475 9.45312L11.1581 8.55125L11.2281 7.91875C11.2589 7.6421 11.2589 7.3629 11.2281 7.08625L11.1581 6.45375L12.1481 5.55L11.5131 4.45062L10.2375 4.85687L9.72438 4.48187C9.49988 4.31669 9.25829 4.1761 9.00376 4.0625L8.42063 3.80687L8.13501 2.5H6.86626L6.57938 3.8075L5.99751 4.0625C5.87364 4.1169 5.75283 4.17804 5.63564 4.24563C5.51172 4.31646 5.39194 4.39429 5.27689 4.47875L4.76376 4.85375L3.48876 4.4475L2.85314 5.55L3.84251 6.45062L3.77251 7.08375C3.74176 7.3604 3.74176 7.6396 3.77251 7.91625L3.84251 8.54875L2.85314 9.45063L3.48751 10.5494L4.76251 10.1431ZM7.49751 10C6.1168 10 4.99751 8.88071 4.99751 7.5C4.99751 6.11929 6.1168 5 7.49751 5C8.87822 5 9.99751 6.11929 9.99751 7.5C9.99579 8.88 8.87751 9.99828 7.49751 10ZM7.49751 6.25C6.81463 6.25069 6.25869 6.79928 6.2489 7.48209C6.23912 8.1649 6.77911 8.72919 7.46169 8.74945C8.14427 8.76971 8.71678 8.23844 8.74751 7.55625V7.80625V7.5C8.74751 6.80964 8.18787 6.25 7.49751 6.25Z" fill="#343A40" />
                                    </svg>

                                    <span>Gizlilik Politikası</span>
                                </a>
                            </li>
                            <Image className=' gap-2' src='/TIM_LOGO_TR 4.png' width={93}
                                height={31}
                                alt="Brand"
                            />
                        </ul>
                    </div>
                </div>
            </div>

        </main >

    )
}

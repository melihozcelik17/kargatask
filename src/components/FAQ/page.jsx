"use client"
import React, { useState } from "react";




const QUESTIONS_DATA = [
    {
        question: "What is outsourcing? ",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        question: "What do I need to get started on my project?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        question: "How does the process of working on a project work? ",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        question: "Why is it beneficial to outsource the art component? ",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }
]


export default function FAQ() {

    const [openItemIndex, setOpenItemIndex] = useState(null);

    // Function to toggle the open state of an FAQ item
    const toggleFAQ = (index) => {
        if (openItemIndex === index) {
            // Clicked on the already open FAQ item, so close it
            setOpenItemIndex(null);
        } else {
            // Clicked on a different FAQ item, so open it
            setOpenItemIndex(index);
        }
    };


    return (
        <main className=" ">
            <div className="max-w-screen-xl mx-auto px-5 items-start bg-white min-h-sceen">
                <div className="flex flex-col  ">
                    <h2 className="font-bold text-5xl mt-5 text-center tracking-tight">
                        FAQ
                    </h2>

                </div>
                <div className="grid divide-y  items-start divide-neutral-200 max-w-xl mx-auto mt-8">
                    {QUESTIONS_DATA.map((item, index) => {
                        return (
                            <div className="py-5" key={item.index}>
                                <details className={` ${openItemIndex === index ? 'group-open' : ''}`}>
                                    <summary
                                        className="flex  font-medium cursor-pointer list-none"
                                        onClick={() => toggleFAQ(index)}
                                    >
                                        <span> {item.question}</span>
                                        <span className="transition group-open:rotate-180">
                                            <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className={`text-neutral-600 mt-3 ${openItemIndex === index ? 'group-open:animate-fadeIn' : ''} `}>
                                        {item.answer}
                                    </p>
                                </details>
                            </div>
                        )
                    })}


                </div>
            </div>

        </main>
    )
}

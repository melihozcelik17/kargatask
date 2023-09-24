"use client"; // for nextjs 13.4 user
import Link from "next/link";
import React from "react";
import Image from "next/image"

// import "./TrendingSlider.css"

const TrendingSlider = () => {
    const filteredItems = [
        {
            id: 1,
            img: "/Rectangle 81.png",
            head: "High voltage mayonnaise",
            date: "March 11, 2020 at 23:03",
            description: "A long time ago I came across this wonderful artist and have never been disappointed with his work. He accurately conveys on paper everything you want him to depict, makes edits to the work without any problems and offers his ideas, which are often quite successful. However, I definitely and strongly recommend working with this creative person!)",

        },
        {
            id: 2,
            img: "/Rectangle 4451.png",
            head: "Bohdan Dubina",
            date: "Apr 20, 2020 at 23:07",
            description: "He is a wonderful artist, a master of his craft, and he completed the work on time, in just a couple of days, and at the highest level. He implements all ideas exactly. Communicates with clients politely. The best!",

        },
        {
            id: 3,
            img: "/Rectangle 4453.png",
            head: "Albert Schmel",
            date: "Apr 23, 2020 at 23:07",
            description: "It's not the first time I've ordered art and I can say one thing: this person's work is done with a conscience. Thank you very much for the work done and I will continue to order only from you",

        },
        {
            id: 3,
            img: "/Rectangle 4451.png",
            head: "Albert Dubina",
            date: "Apr 30, 2020 at 23:07",
            description: "A long time ago I came across this wonderful artist and have never been disappointed with his work. He accurately often quite successful. However, I definitely and strongly recommend working with this creative person!)",

        },


    ];

    const slideLeft = () => {
        let slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft - 235;
    };

    const slideRight = () => {
        let slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft + 235;
    };
    return (
        <>
            <div className="trending">
                <div className="container">
                    <div className="title-btns">
                        <h3></h3>
                        <div className="btns">
                            <button title="scroll left" onClick={slideLeft}>

                            </button>
                            <button title="scroll right" onClick={slideRight}>

                            </button>
                        </div>
                    </div>
                    <div className="flex gap-48  " id="slider">
                        {filteredItems.map((item) => (
                            <div key={item.id} className="flex flex-col rounded-2xl w-full h-full lg:min-w-[744px] lg:min-h-[430px] bg-[#F5F5F5]">

                                <div className="flex gap-4 pt-8  px-8">

                                    <Image className="w-fit h-fit" width={72} height={72} src={item.img} alt={item.head} />
                                    <div className="flex flex-col gap-2">

                                        <h3 className=" text-[30px]">{item.head}</h3>
                                        <span className=" text-[18px] text-[#0B1519] "> {item.date}</span>
                                    </div>
                                </div>
                                <p className="text-[24px] p-8">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};
export default TrendingSlider;
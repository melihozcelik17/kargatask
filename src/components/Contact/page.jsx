
"use client";
import React, { useState } from "react";
import axios from "axios";
import { Checkbox } from "@nextui-org/checkbox";
import Image from 'next/image';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
    const [userData, setUserData] = useState({
        email: "",
        message: "",
        contact: "",

    });




    function handleChange(e) {

        setUserData({ ...userData, [e.target.name]: e.target.value });

    }

    function handleSubmit(e) {
        e.preventDefault();

        let formData = new FormData();

        for (let [key, value] of Object.entries(userData)) {
            formData.append(key, value);
        }

        toast.success('Thanks for reaching out to us!', {
            position: "top-center",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });

        // Use fetch or axios to submit the form
        // await axios
        //     .post("{Formeezy-Endpoint}", formData)
        //     .then(({ data }) => {
        //         const { redirect } = data;
        //         // Redirect used for reCAPTCHA and/or thank you page
        //         window.location.href = redirect;
        //     })
        //     .catch((e) => {
        //         window.location.href = e.response.data.redirect;
        //     });
    }

    return (

        <div className=" flex flex-row bg-[#294DFA] text-white">
            <div className="  items-start justify-center h-full px-12">

                <h1 className=" flex px-120 py-4">
                    LET'S START YOUR PROJECT!
                </h1>
                <p>
                    Leave your contact details and we will contact you
                </p>
                <form className="block items-center px-12 py-4" onSubmit={handleSubmit}>

                    <textarea className="block border-b border-gray-300 w-full py-2 text-white bg-transparent placeholder-white placeholder-opacity-50 focus:outline-none focus:border-blue-500"
                        placeholder="How can I contact you?"
                        onChange={handleChange}
                        value={userData.contact}
                        required
                    />
                    <input className="block border-b border-gray-300 w-full py-2 text-white bg-transparent placeholder-white placeholder-opacity-50 focus:outline-none focus:border-blue-500"
                        name="email"
                        type="email"
                        placeholder="Phone/Email"
                        onChange={handleChange}
                        value={userData.email}
                        required
                    />
                    <textarea className="block border-b border-gray-300 w-full py-2 text-white bg-transparent placeholder-white placeholder-opacity-50 focus:outline-none focus:border-blue-500"
                        name="message"
                        placeholder="Add a message"
                        onChange={handleChange}
                        value={userData.message}
                        required
                    />
                    <div className="mt-2">

                        <input required id="wp-comment-cookies-consent" name="wp-comment-cookies-consent" type="checkbox" value="yes"></input>
                        <label htmlFor="wp-comment-cookies-consent">Save my name, email, and website in this browser htmlFor the next time I comment.</label>
                    </div>

                    <button className=" mt-4 p-2 px-4 bg-white hover:bg-[#7e86ad] text-[#294DFA] font-semibold rounded-lg text-xl focus:outline-none focus:ring-4 focus:ring-gray-300 " type="submit" >Send</button>
                    <ToastContainer />
                </form>
            </div>
            <Image className=' ' src='/Group 620.png' width={700}
                height={500}
                alt="Brand"
            />
        </div >

    );
}


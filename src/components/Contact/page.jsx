
"use client";
import React, { useState } from "react";
import axios from "axios";
import { Checkbox } from "@nextui-org/checkbox";

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

        <div>
            <div className="flex justify-between items-center px-[72px]">

                <h1>
                    LET'S START YOUR PROJECT!
                </h1>
                <p>
                    Leave your contact details and we will contact you
                </p>
            </div>

            <form onSubmit={handleSubmit}>

                <textarea
                    name="contact"
                    placeholder="How can I contact you?"
                    onChange={handleChange}
                    value={userData.contact}
                    required
                />
                <input
                    name="email"
                    type="email"
                    placeholder="Phone/Email"
                    onChange={handleChange}
                    value={userData.email}
                    required
                />
                <textarea
                    name="message"
                    placeholder="Add a message"
                    onChange={handleChange}
                    value={userData.message}
                    required
                />

                <input required id="wp-comment-cookies-consent" name="wp-comment-cookies-consent" type="checkbox" value="yes"></input>
                <label htmlFor="wp-comment-cookies-consent">Save my name, email, and website in this browser htmlFor the next time I comment.</label>

                <button className="text-white bg-[#294DFA] hover:[#294DFA] focus:outline-none focus:ring-4 focus:ring-gray-300  rounded-2xl text-[14px] p-4" type="submit" >Send</button>
                <ToastContainer />
            </form>
        </div>

    );
}


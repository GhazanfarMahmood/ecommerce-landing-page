"use client";

import React, { useState } from 'react'

import { FaPhoneVolume } from 'react-icons/fa';
import { FaEnvelopeOpenText } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// CSS LINK FOR CONTACT PAGE
import '@/style/Contact-Style.scss'

const Contact = () => {
    const [enteredData, setEnteredData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    })
    // This Function takes data from input fields
    const enteringData = (event) => {
        let { name, value } = event.target;

        setEnteredData((preVal) => {
            return {
                ...preVal,
                [name]: value,
            }
        })
    }

    const sendMessage = (e) => {
        e.preventDefault();

        if (!enteredData.name || !enteredData.email || !enteredData.phone || !enteredData.subject || !enteredData.message) {

            if (!enteredData.name) {
                toast.warn("Please enter name")
            }

            if (!enteredData.email) {
                toast.warn("Please enter email")
            }
            if (!enteredData.phone) {
                toast.warn("Please enter phone")
            }
            if (!enteredData.subject) {
                toast.warn("Please enter subject")
            }
            if (!enteredData.message) {
                toast.warn("Please enter message")
            }
            return
        }

        setEnteredData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
        })
    }

    return (
        <>
            <div className='contact-container'>
                    <div className="content">
                        <div className="flex-text">
                            <div></div>
                            <h3>Keep In Touch</h3>
                        </div>
                        <div className="data">
                            <h4>Cont</h4>
                            <h4 className='act'>act</h4>
                        </div>
                    </div>
                <div className="flex-forms">
                        <div className="contact">
                            <div className="call">
                                <div className='flex-bio'>
                                    <FaPhoneVolume className='icon' />
                                </div>
                                <div className="flex-call">
                                    <h5>Call Us</h5>
                                    <a href="#">03074758481</a>
                                </div>
                            </div>
                            <div className="call">
                                <div className='flex-bio'>
                                    <FaEnvelopeOpenText className='icon' />
                                </div>
                                <div className="flex-call">
                                    <h5 >Mail Us</h5>
                                    <a href="#">rafiqinterviewwala@gmail.com</a>
                                </div>
                            </div>
                            <div className="call">
                                <div className='flex-bio'>
                                    <FaMapMarkerAlt className='icon' />
                                </div>
                                <div className="flex-call">
                                    <h5>Office Address</h5>
                                    <a href="#">Lahore, Pakistan</a>
                                </div>
                            </div>
                            <div className="video-section">
                                <iframe src="https://www.youtube.com/embed/Rl37o-4Y-NA">
                                </iframe>
                            </div>
                        </div>
                    
                    <form className="form" onSubmit={sendMessage}>
                        <div className="flex-input">
                            <input type="text" name="name" value={enteredData.name} placeholder='Your Name' onChange={enteringData} />
                            <input type="email" name="email" value={enteredData.email} placeholder='Your Email' onChange={enteringData} />
                        </div>
                        <div className="flex-input">
                            <input type="number" name="phone" value={enteredData.phone} placeholder='Phone no' onChange={enteringData} />
                            <input type="text" name="subject" value={enteredData.subject} placeholder='Subject' onChange={enteringData} />
                        </div>
                        <div className="textarea">
                            <textarea name="message" value={enteredData.message} onChange={enteringData}></textarea>
                        </div>
                        <div className="send-button">
                            <button type='submit'>Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </>

    )
}

export default Contact

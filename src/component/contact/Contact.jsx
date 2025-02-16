import React, { useState } from 'react'
import Fade from 'react-reveal/Fade';
import Jump from 'react-reveal/Jump';
import Shake from 'react-reveal/Shake';
import Recaptcha from "react-google-recaptcha"

import { FaPhoneVolume } from 'react-icons/fa';
import { FaEnvelopeOpenText } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';

import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './Contact.scss'





const Contact = (props) => {
    const [recapcha, setRecapcha] = useState(false);
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
    // This Function check recaptcha's value
    function onChange(value) {
        // console.log("Captcha value:", value);
        if (value != null) {
            setRecapcha(true)
        }
    }
    // This Function checks the conditions on form and hit Post Api
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
        if (recapcha != true) {
            toast.warn("Please verify that you are not a robot.")
            return
        }
        axios.post("https://firmtechservices.com/api/contact-form", {
            name: enteredData.name,
            email: enteredData.email,
            phone: enteredData.phone,
            subject: enteredData.subject,
            message: enteredData.message,
            email_id: props.data.id,
            client_id: props.data.client?.id,
            slug: `https://firmtechservices.com/${props.data.slug}`
        })
            .then((res) => {
                toast.success(res.data.replace(/<[^>]+>/g, ''))
                setTimeout(() => {
                    window.location.reload(true)
                }, 3000);
            })
            .catch((error) => {
                console.log(error)
                toast.error(error.message)
            })

    }

    return (
        <>
            <div className='contact-container'>
                <Fade bottom>
                    <div className="content">
                        <div className="flex-text">
                            <div></div>
                            <Shake duration={2000}>
                                <h3>Keep In Touch</h3>
                            </Shake>
                        </div>
                        <div className="data">
                            <h4>Cont</h4>
                            <Jump duration={2000}>
                                <h4 className='act'>act</h4>
                            </Jump>
                        </div>
                    </div>
                </Fade>
                <div className="flex-forms">
                    <Fade left duration={2000}>
                        <div className="contact">
                            <div className="call">
                                <div className='flex-bio'>
                                    <FaPhoneVolume className='icon' />
                                </div>
                                <div className="flex-call">
                                    <h5>Call Us</h5>
                                    <a href={`tel:${props.data.header.phone_no}`}>
                                        {props.data.header.phone_no}
                                    </a>
                                </div>
                            </div>
                            <div className="call">
                                <div className='flex-bio'>
                                    <FaEnvelopeOpenText className='icon' />
                                </div>
                                <div className="flex-call">
                                    <h5 >Mail Us</h5>
                                    <a href={`mailto:${props.data.header.email}`}>
                                        {props.data.header.email}
                                    </a>
                                </div>
                            </div>
                            <div className="call">
                                <div className='flex-bio'>
                                    <FaMapMarkerAlt className='icon' />
                                </div>
                                <div className="flex-call">
                                    <h5 >Office Address</h5>
                                    <a href={props.data.header.google_map}>{props.data.header.address}</a>
                                </div>
                            </div>
                            <div className="video-section">
                                <iframe src={`https://www.youtube.com/embed/${props.data.contact.video_link}`}>
                                </iframe>
                            </div>
                        </div>
                    </Fade>
                    <Fade right duration={2000}>
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
                            <div className="recapcha">
                                <Recaptcha
                                    sitekey="6LfkMvMjAAAAADys8e0kNLeiENRfRqcbj3-KR075"
                                    onChange={onChange}
                                />
                            </div>
                            <div className="send-button">
                                <button type='submit'>Send Message</button>
                            </div>
                        </form>
                    </Fade>
                </div>
            </div>
            <ToastContainer />
        </>

    )
}

export default Contact

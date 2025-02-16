import React from 'react';

import { AiFillYoutube } from 'react-icons/ai';
import { BsGlobe } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import { FaYelp } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaAngleRight } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';

// FOOTER STYLE CSS LINKS
import "@/style/Footer-Style.scss"



export default function Footer() {
    return (
        <>
            <div className='footer-container'>
                <div className="footer">
                    <div className="contact">
                        <div className="heading">Rafiq Interview Wala</div>
                        <div className="para">Now We Have A StartUp</div>
                        <div className="info">
                            <h3>Phone: <a href="#">03074758481</a></h3>
                            <div className="flex">
                                <h3>Email: </h3>
                                <a href="#">rafiqinterviewwala@gmail.com</a>
                            </div>
                            <h3>Text: &nbsp;&nbsp;<a href="#">03074758481</a></h3>
                        </div>
                        <div className="icons">
                                <a href="#">
                                    <AiFillYoutube className='icon' />
                                </a>
                                <a href="#">
                                    <AiFillInstagram className='icon' />
                                </a>
                                <a href="#">
                                    <BsTwitter className='icon' />
                                </a>
                                <a href="#">
                                    <FaFacebookF className='icon' />
                                </a>
                        </div>
                    </div>
                    <div className="links">
                        <div className="heading">Related Links</div>
                        <div className="r-icons">
                            <div className="icon">
                                <FaAngleRight className='links_icons' />
                                <a href="#">Rafiq Interview Wala Standard Jobs</a>
                            </div>
                            <div className="icon">
                                <FaAngleRight className='links_icons' />
                                <a href="#">Rafiq Interview Wala Business</a>
                            </div>
                            <div className="icon">
                                <FaAngleRight className='links_icons' />
                                <a href="#">Rafiq Interview Wala Social</a>
                            </div>
                        </div>
                    </div>
                    <div className="map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13465.788709422672!2d74.35254507513689!3d31.39859884649044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919079e4f3e483f%3A0xa1e27ef7a0909c3d!2sDullu%20Khurd!5e0!3m2!1sen!2ssg!4v1681724475810!5m2!1sen!2ssg" width="340" height="250" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
            <div className="footer-bar">
                <p>
                    © Copyright 2023 | Powered by <a href="#">RIW</a>. All Right Reserved.
                </p>
            </div>
        </>
    );
}
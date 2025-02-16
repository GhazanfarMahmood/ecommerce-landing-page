'use client'

import { Button, Modal } from 'antd';
import { useState } from 'react';


// CSS LINK FILE FOR REVIEW SECTION
import "@/style/Review-Style.scss"
import Image from 'next/image';
import Testimonials from '../testimonials/Testimonials';


export default function Review(){
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const showModal = () => {
        setOpen(true);
    };
    const handleCancel = () => {
        setOpen(false);
    };

    return (
        <>
          <div className='review-container' id='review'>
                <div className="content">
                    <div className="flex-text">
                        <div></div>
                        <h3>Google Review</h3>
                    </div>
                    <div className="data">
                        <h4>Write a Re</h4>
                        <h4 className='view'>view</h4>
                    </div>
                </div>    
                <div className='review'>
                        <Image src="/assets/review.png" alt="Internet Connection problem" width="400" height="220" />
                </div>
                <div className="review-button">
                    <a href="javascript:void(0)" onClick={showModal}>Write a Review</a>
                </div>
                <Modal
                    open={open}
                    onCancel={handleCancel}
                    footer={false}
                >
                    <form className="reviewform" >
                        <div className="flex-input">
                            <input type="text" name="name" placeholder='Your Name'  />
                        </div>
                        <div className="textarea">
                            <textarea name="message" placeholder='Write your Review'></textarea>
                        </div>
                        <div className="send-button">
                            <button type='submit'>Send Message</button>
                        </div>
                    </form>
                </Modal>
                <div className="content" style={{ marginTop: "3rem" }}>
                    <div className="flex-text">
                        <div></div>
                        <h3>What Client Says</h3>
                    </div>
                    <div className="data">
                        <h4>Testimo</h4>
                        <h4 className='view'>nials</h4>
                    </div>
                </div>
                <Testimonials />
            </div>
        </>
    )
}
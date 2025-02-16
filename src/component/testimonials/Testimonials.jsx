
// CSS FOR TESTIMONIAL FILE
import "@/style/Testimonial-Style.scss"

import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import { ImQuotesLeft } from 'react-icons/im';
import { ImQuotesRight } from 'react-icons/im';
import Image from "next/image";

const testimonialData = [
  {
    id: 0,
    phara : "I am grateful to RIW for providing me with an amazing job opportunity. They were helpful, supportive, and kept me informed throughout the process. Thanks to their efforts, I now have a job that I love!",
    heading : "Ghazanfar Mehmood",
  },
  {
    id: 1,
    phara : "Thank you for creating my website! It looks fantastic and works perfectly. I really appreciate your hard work and attention to detail.",
    heading : "Junaid Latif",
  },
  {
    id: 2,
    phara : "The whole crew was very respectful and courteous during the job, and the quality of our remodel was great.",
    heading : "Zahid Ghafoor",
  },
  {
    id: 3,
    phara : "Your staff is amazing! They made me feel welcome, demonstrated the excellent communication skills, and showed a commitment to excellence in everything they did.",
    heading : "Tayyab Ashraf",
  },
  {
    id: 4,
    phara : "Thank you for my amazing website! You made the process easy, and I am so happy with the final result. You're the best!",
    heading : "Shahzaib",
  },
]



export default function Testimonials (){

    var settings = {
        dots: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        centerPadding: "0",
        infinite: true,
    
        responsive: [
          {
            breakpoint: 990,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
    
            },
          },
          {
            breakpoint: 770,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 0,
            },
          },
        ],
      };

      
    return (
        <>
         <div className="tContianer">
        <div className="slider__container" >
          <Slider {...settings}>
            {testimonialData.map((data, i) => {
              return (
                <div key={i}>
                  <div className="tcards" >
                    <div className="card">
                      <ImQuotesLeft className='icon' />
                      <p className="text">{data.phara}</p>
                      <div className='border'></div>
                      <div className="bio">
                        <div className='img-color'>
                          <Image src="/assets/customer.svg" alt="customer profile" width="50" height="60" className="fill" />
                        </div>
                        <div className="data">
                          <h5>{data.heading}</h5>
                          <p>customer</p>
                        </div>
                      </div>
                      <ImQuotesRight className='icon' />
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
      <div id='contact'></div>
        </>
    )
}
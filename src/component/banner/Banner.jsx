"use client"

import React from 'react'
import { useState } from 'react'

import { AiOutlineCaretRight } from 'react-icons/ai';
import ModalVideo from 'react-modal-video'

import '@/style/Banner-Style.scss'



export default function Banner(){
    const [isOpen, setOpen] = useState(false)

    // ********* Filter ID from Dynamic Url**********
    var urls = [
        "watch?v=Rl37o-4Y-NA" || "https://youtu.be/0-S5a0eXPoc"
    ];

    var i, r, rx = /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/|shorts\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/;

    for (i = 0; i < urls.length; ++i) {
        r = urls[i].match(rx);
    }

    return (
        <>
          <div className='home-container'>
            <div className="left-container" key={i}>
                <div className="content">Rafiq Interview Wala</div>
                <div className="para">Now We Have A Start Up</div>
                <div className="btn">
                  <a href="#">Call Now</a>
                </div>
            </div>
            <div className="right-container" >
              <React.Fragment>
                <ModalVideo
                  channel='youtube'
                  autoplay="1" isOpen={isOpen} videoId={r[1]} onClose={() => setOpen(false)} />
                <div className="startContainer">
                    <button className="button pulseBox" onClick={() => setOpen(true)}>
                        <AiOutlineCaretRight className='icon' />
                    </button>
                </div>
              </React.Fragment>
            </div>
              <div id="about"></div>
          </div>
        </>
    )
}
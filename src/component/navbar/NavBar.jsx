"use client"

import { useEffect, useState } from 'react'


import { IoMenu } from "react-icons/io5";
import { MdClose } from "react-icons/md";

// CSS :
import '@/style/NavBar-Style.scss'

import React from 'react';
import Image from 'next/image';


export default function NavBar() {
    const [className, setClassName] = useState("");
    const [background, setBackground] = useState(false);
    const [fixedNav, setFixedNav] = useState(false)

    const openMenu = () =>{
        setClassName("block");
        setBackground(true);
    }
    const closeMenu = () =>{
        setClassName("none");
        setBackground(false);
    }
    
    useEffect(() =>{
        const changeNavBar = () => {
         if (window.scrollY >= 210) {
            setFixedNav(true)
         } else {
            setFixedNav(false)
         }
     }
     window.addEventListener("scroll", changeNavBar);

     return () => {
        window.removeEventListener("scroll", changeNavBar);
    };
    }, [])

    return (
        <>
        <div className={`${fixedNav ? "fixed-nav" : ""}`}>
            <div className="nav-container">
                <a href="#">
                    <div className="logo">
                        <Image src="/assets/logo.jpg" alt="ERROR" width="100" height="42" />
                    </div>
                </a>
                <div className={`menu ${className}`}>
                    <div className='close'>
                        <button aria-label='close button' onClick={closeMenu}>
                            <MdClose />
                        </button>
                    </div>
                    <div className="web-menu">
                        <div className='left'>
                            <a href="#home">Home</a>
                            <a href="#about">About Us</a>
                            <a href="#services">Services</a>
                            <a href="#gallery">Gallery</a>
                            <a href="#review">Reviews</a>
                            <a href="#contact">Contact Us</a>
                        </div>
                    </div>
                    <div className='right'>
                        <a href="#">Contact Us</a>
                    </div>
                </div>
                <div className='hamburger'>
                    <button aria-label='for menu open' onClick={openMenu}>
                        <IoMenu />
                    </button>
                </div>
            </div>
        </div>
            {
                background &&
                <div className='black-bg' onClick={closeMenu}></div>
            }
        </>
    )
}
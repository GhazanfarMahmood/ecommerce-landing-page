"use client"

import { useState } from 'react'

// ANT-D || MUI :
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';

// Icons :
// import logo from '@public/assets/logo.jpg';

// CSS :
import '@/style/NavBar-Style.scss'

import React from 'react';
import Image from 'next/image';


export default function NavBar() {
    const [background, setBackground] = useState(false);

    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };
    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 265 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <div className='main'>
                <a href='#'>
                    <div className="logo">
                        <Image src="/assets/logo.jpg" alt="ERROR" width="100" height="50" />
                    </div>
                </a>
                <div className="nav">
                        <a href="#home">Home</a>
                        <a href="#about">About Us</a>
                        <a href="#services">Services</a>
                        <a href="#gallery">Gallery</a>
                        <a href="#review">Reviews</a>
                        <a href="#contact">Contact Us</a>
                        <div className='right'>
                            <a href="#">Contact Us</a>
                        </div>
                </div>
            </div>
        </Box>
    );
    const changeNavBar = () => {
        if (window.scrollY >= 210) {
            setBackground(true)
        } else {
            setBackground(false)
        }
    }
    window.addEventListener("scroll", changeNavBar);

    return (
        <>
        <div className={background ? 'nav-container color' : 'nav-container'}>
            <a href="#">
                <div className="logo">
                    <Image src="/assets/logo.jpg" alt="ERROR" width="100" height="42" />
                </div>
            </a>
            <div className="menu">
                <div className="web-menu">
                    <div className='left'>
                        <a href="#home">Home</a>
                        <a href="#about">About Us</a>
                        <a href="#services">Services</a>
                        <a href="#gallery">Gallery</a>
                        <a href="#review">Reviews</a>
                        <a href="#contact">Contact Us</a>
                    </div>
                    <div className='right'>
                        <a href="#">Contact Us</a>
                    </div>
                </div>
                <div className="mobile_menu">
                    <div className='ham_none'>
                        {['top'].map((anchor) => (
                            <React.Fragment key={anchor}>
                                <div className="menu">
                                    <MenuIcon onClick={toggleDrawer(anchor, true)} style={{ fontSize: "30px" }} />
                                </div>
                                <SwipeableDrawer
                                    anchor={anchor}
                                    open={state[anchor]}
                                    onClose={toggleDrawer(anchor, false)}
                                    onOpen={toggleDrawer(anchor, true)}
                                >
                                    {list(anchor)}
                                </SwipeableDrawer>
                            </React.Fragment>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    </>
    )
}
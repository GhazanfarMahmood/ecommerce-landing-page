
// Icons :
import { MdLocationPin } from 'react-icons/md';
import { IoIosMail } from 'react-icons/io';
import { FaPhoneAlt } from 'react-icons/fa';
import { AiFillYoutube } from 'react-icons/ai';
import { BsGlobe } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';

// CSS :
import '@/style/Header-Style.scss'

export default function Header(){
    return (
        <>
        <div className='header-container' id='home'>
                <div className="left-section">
                    <a href="#" className="locatin">
                        <MdLocationPin className='icon' style={{ fontSize: "30px" }} />
                        <div>Lahore, Pakistan</div>
                    </a>
                    <a href="#" className="email">
                        <IoIosMail className='icon' style={{ fontSize: "30px" }} />
                        <div>rafiqinterviewwala@gmail.com</div>
                    </a>
                </div>
                <div className="right-section">
                    <a href="#" className="phone">
                        <FaPhoneAlt className='icon' />
                        <div>03074758481</div>
                    </a>
                    <div className="social">
                        <a href="#">
                            <AiFillYoutube className='icon' style={{ fontSize: "32px" }} />
                        </a>
                        <a href="#">
                            <AiFillInstagram className='icon' style={{ fontSize: "30px" }} />
                        </a>
                        <a href="#">
                                <BsTwitter className='icon' />
                        </a>
                        <a href="#">
                                <FaFacebookF className='icon' />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};
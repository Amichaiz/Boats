import { FaFacebookSquare } from 'react-icons/fa';
import { IoLogoYoutube } from 'react-icons/io';
import { SiInstagram } from 'react-icons/si';
import logo from '../../logo.png'

import React from "react";
import './Footer.css'

const Footer = () => {

    return (
        <>
            <div className='len footer'>
                <div className='flex'>
                    <div className='pad'>
                        <img src={logo} alt="Logo" width='75px'/>
                    </div>
                    <div className='pad'>
                        <p className='link'>Sell A Boat</p>
                        <p className='link'>Buy A Boat</p>
                    </div>
                    <div className='pad'>
                        <p className='link'>About Us</p>
                        <p className='link'>Contact Us</p>
                    </div>
                    <div className='pad'>
                        <p className='link'>Privacy Policy</p>
                        <p className='link'>Terms of Use</p>
                        <p className='link'>Service Providers</p>
                    </div>
                    <div className='pad '>
                        <p className='point link'>Follow us!</p>
                        <span className='red social'><IoLogoYoutube /></span><span className='social insta'><SiInstagram /></span><span className='blue social'><FaFacebookSquare /></span>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Footer;
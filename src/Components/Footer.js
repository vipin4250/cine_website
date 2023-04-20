import React from 'react'
import { FaFacebook,FaTwitter,FaDiscord,FaInstagram } from "react-icons/fa";
import './Footer.css';


export default function Footer() {
  return (
       <>
    <div className='footer'>
        
        <ul className='footer_1'>
          <li className='footer_1_1'>
            Follow us: 
          </li>
          <li className='footer_1_2' >
            <a className='icons_1' href="/" style={{color:"white"}}><FaFacebook/></a>
            <a className='icons_1' href="/" style={{color:"white"}}><FaTwitter/></a>
            <a className='icons_1' href="/" style={{color:"white"}}><FaDiscord/></a>
            <a className='icons_1' href="/" style={{color:"white"}}><FaInstagram/></a>
          </li>
          
        </ul>
        <div className="footer_2"></div>
        
        <div className="footer_3">
          <ul className="footer_3_1">
            <li className="footer_3_1_1">
                <a className="footer_3_1_1_1" href="/" role="button">HOME</a>
            </li>
            <li className="footer_3_1_1">
                <a className="footer_3_1_1_1" href="/" role="button">ABOUT</a>
            </li>
            <li className="footer_3_1_1">
                <a className="footer_3_1_1_1" href="/" role="button">SUPPORT</a>
            </li>
            <li className="footer_3_1_1">
                <a className="footer_3_1_1_1" href="/" role="button">FAQ</a>
            </li>
            <li className="footer_3_1_1">
                <a className="footer_3_1_1_1" href="/" role="button">TERMS</a>
            </li>
            <li className="footer_3_1_1">
                <a className="footer_3_1_1_1" href="/" role="button">PRIVACY</a>
            </li>
            <li className="footer_3_1_1">
                <a className="footer_3_1_1_1" href="/" role="button">ADVERTISING</a>
            </li>
            <li className="footer_3_1_1">
                <a className="footer_3_1_1_1" href="/" role="button">COOKIE</a>
            </li>
          </ul>
        </div>

        <div className="footer_4">
          <p className='footer_4_1'>CineCouncellor is a property of CineCouncellor Co.,Ltd. ©2023 All Rights Reserved.</p>
          <p className='footer_4_2'>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
        </div>

    </div>
      </>
  )
}


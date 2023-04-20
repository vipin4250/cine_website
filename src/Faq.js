import React from 'react';
import Accordian from './Components/Accordian';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import './Faq.css';

export default function Faq() {
  return (
    <div className='_4'>
        <Navbar/>
        <p className="_4_1">FAQ</p>

        <Accordian/>
        <Footer/>
      
    </div>
  )
}

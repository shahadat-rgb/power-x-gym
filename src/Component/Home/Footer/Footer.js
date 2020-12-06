import React from 'react';
import './Footer.css'
import youtube from '../../../Image & Icon/bxl-youtube.png'
import facebook from '../../../Image & Icon/bxl-facebook.png'
import instragam from '../../../Image & Icon/bxl-instagram.png'
import tweiter from '../../../Image & Icon/bxl-twitter.png'
import watsapp from '../../../Image & Icon/bxl-whatsapp.png'

const Footer = () => {
    return (
    <div className="footerBg">
         <div className='container'>
         <div className="row">
            <div className="col-md-3">
                <h1 className='text-white'>POWER <span className='text-warning'> X</span></h1>
            </div>
                <div className="col-md-2">
                 <p className='text-white'><b>Help need</b></p>
                 <p className='text-white'>help center</p>
                 <p className='text-white'>email support</p>
                 <p className='text-white'>live chat</p>
                 <p className='text-white'>Gift certificate</p>
                 <p className='text-white'>send us feedback</p>
                </div>
                <div className="col-md-2">
                <p className='text-white'><b>Digital Resourse</b></p>
                <p className='text-white'>Articles</p>
                <p className='text-white'>E-book</p>
                </div>
                <div className="col-md-3">
                <p className='text-white'><b>Connect with us</b></p>
                 <img  className='pr-3' src={youtube} alt=""/>
                 <img  className='pr-3' src={facebook} alt=""/>
                 <img  className='pr-3' src={instragam} alt=""/>
                 <img  className='pr-3' src={tweiter} alt=""/>
                 <img  className='pr-3' src={watsapp} alt=""/>
              </div>
              <div className="col-md-2">
                <p className='text-white'><b>Join our Newsletter</b></p>
                <p className='text-white'> Get exclusive feature and update from the shredder weight loss academy </p>
                
              </div>
            </div>
            <p className='text-white text-center pt-4'>copyright by shahadat hossain.all reight reserve</p>
        </div>
    </div>
    );
};

export default Footer;
import React from 'react';
import { Link } from 'react-router-dom';
import powerX1 from '../../Image & Icon/headerBackgroundc.jpg'
import pricing1 from '../../Image & Icon/hipcravo-5UbIqV58CW8-unsplash.jpg'
import pricing2 from '../../Image & Icon/penguinuhh-8VI6WwEEEHw-unsplash.jpg'
import pricing3 from '../../Image & Icon/daniel-apodaca-WdoQio6HPVA-unsplash.jpg'

import './Pricing.css'
import {AiOutlineCheck } from "react-icons/ai";

const Pricing = () => {
    return (
    <>
        <div style={{backgroundImage:`linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${powerX1})`}} className="mainHeader mb-5">
        <div className='container'>
         <nav class="navbar navbar-expand-lg">
               <h1 className='text-white'>POWER <span className='text-warning'> X</span></h1>
            <button class="navbar-toggler bg-white" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end " id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <Link to="/home" class="nav-link text-white" href="#">Home<span class="sr-only">(current)</span></Link>
                    </li>
                    <li class="nav-item">
                        <Link  class="nav-link text-white" href="#">Service</Link>
                    </li>
                    <li class="nav-item">
                        <Link to='/our-class' class="nav-link text-white" href="#">Our Class</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link text-white" href="#" >About us</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link text-white" href="#" >Pricing</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link text-white" href="#" >Blog</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link text-white" href="#" >Contact us</Link>
                    </li>
                   
                </ul>
            </div>
        </nav>
            
            <h1  className='text-white text-center pt-5'> PRICING PLANS </h1>
           
        </div>
        </div>

        <div className="container">
            <h3 class='text-center '><span class='text-warning'>CHOOSE THE OFFER</span>THATS THE SUITS YOU</h3>
            <p class='text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est laudantium </p>
            <p className='text-center '>dicta assumenda sint</p>
         <div className="card-deck">
             <div className="card pricing-card"  style={{backgroundImage:`linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${pricing1})`,marginBottom:'100px'}}>
               <h3 className='text-warning pt-5'> BILED MONTHLY </h3>
               <h1 className='text-white pb-2'>ADBANCE PLAN</h1>
               <h1 className='text-warning mb-4'>$140</h1>
                <p className='text-white'><AiOutlineCheck></AiOutlineCheck> <b>Mobile Opatimize</b></p>
                < p className='text-white'><AiOutlineCheck></AiOutlineCheck> <b>Best Hosting</b></p>
                <p className='text-white'><AiOutlineCheck></AiOutlineCheck> <b>Free Custom</b></p>
                <p className='text-white'><AiOutlineCheck></AiOutlineCheck> <b>Outstanding </b></p>
                <p className='text-white'><AiOutlineCheck></AiOutlineCheck> <b>Free Customers</b></p>
                <Link to='/registration-form'> <button className='pricing-btn'>PURCHASE</button></Link>
             </div>
             <div className="card pricing-card" style={{backgroundImage:`linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${pricing3})`,marginBottom:'100px'}}>
             <h3 className='text-warning pt-5'> BILED MONTHLY </h3>
               <h1 className='text-white pb-2'>BASIC PLAN</h1>
               <h1 className='text-warning mb-4'>$120</h1>
                <p className='text-white'><AiOutlineCheck></AiOutlineCheck> <b>Mobile Opatimize</b></p>
                < p className='text-white'><AiOutlineCheck></AiOutlineCheck> <b>Best Hosting</b></p>
                <p className='text-white'><AiOutlineCheck></AiOutlineCheck> <b>Free Custom</b></p>
                <p className='text-white'><AiOutlineCheck></AiOutlineCheck> <b>Outstanding </b></p>
                <p className='text-white'><AiOutlineCheck></AiOutlineCheck> <b>Free Customers</b></p>
                <Link to='/registration-form'> <button className='pricing-btn'>PURCHASE</button></Link>
             </div>
             <div className="card pricing-card" style={{backgroundImage:`linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${pricing2})`,marginBottom:'100px'}} >
             <h3 className='text-warning pt-5'> BILED MONTHLY </h3>
               <h1 className='text-white pb-2'>BEGINERS PLAN </h1>
               <h1 className='text-warning mb-4'>$90</h1>
                <p className='text-white'><AiOutlineCheck></AiOutlineCheck> <b>Mobile Opatimize</b></p>
                < p className='text-white'><AiOutlineCheck></AiOutlineCheck> <b>Best Hosting</b></p>
                <p className='text-white'><AiOutlineCheck></AiOutlineCheck> <b>Free Custom</b></p>
                <p className='text-white'><AiOutlineCheck></AiOutlineCheck> <b>Outstanding </b></p>
                <p className='text-white'><AiOutlineCheck></AiOutlineCheck> <b>Free Customers</b></p>
                <Link to='/registration-form'> <button className='pricing-btn'>PURCHASE</button></Link>
             </div>
         </div>
  
        </div>
        </>
    );
};

export default Pricing;
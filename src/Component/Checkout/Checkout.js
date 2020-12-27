import { Link } from '@material-ui/core';
import React from 'react';
import powerX1 from '../../Image & Icon/headerBackgroundc.jpg'
import thank from '../../Image & Icon/thank.jpeg'
const Checkout = () => {
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
                        <Link class="nav-link text-white" href="/home">Home<span class="sr-only">(current)</span></Link>
                    </li>
                    <li class="nav-item">
                        <Link  class="nav-link text-white" href="#">Service</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link text-white" href="/our-class">Our Class</Link>
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
            
            <h1  className='text-white text-center pt-5'> YOUR GYM MEMBERSHIP </h1>
           
        </div>
        </div>
        <div className="container">
              <div className="number row">
              <div className="col-md-4">
              <a style={{color:'white',textDecoration:'none'}} href="/registration-form"><span>1</span></a> <br/> <br/>
               <p><b>personal Details</b></p>
              </div>

              <div className="col-md-4">
            <a style={{color:'white',textDecoration:'none'}} href="/payment"><span>2</span></a><br/> <br/>
                 <p><b>Bank Payment</b></p>
              </div>

              <div className="col-md-4">
                 <span>3</span> <br/> <br/>
                 <p><b>Membership created</b>
                 </p>
              </div>
              </div>

              <img  style={{width:'50%',display:'block',marginTop:'8%',marginBottom:'10%' ,marginLeft:'auto',marginRight:'auto'}} src={thank} alt=""/>

              </div>
        </>
    );
};

export default Checkout;
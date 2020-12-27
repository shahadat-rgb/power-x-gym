import { Link } from '@material-ui/core';
import React from 'react';
import { useForm } from 'react-hook-form';
import powerX1 from '../../Image & Icon/headerBackgroundc.jpg' 
import './PaymentMathod.css'
import ame from '../../Image & Icon/credit-cards_amex.png'
import master from '../../Image & Icon/credit-cards_mastercard.png'
import visa from '../../Image & Icon/credit-cards_visa.png'
import bitmap from '../../Image & Icon/Bitmap.png'
const PaymentMathod = () => {
    const { register, handleSubmit, errors } = useForm();
    
    const onSubmit = data => {
        console.log(data);
    }
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
                  <span>2</span>  <br/> <br/>
                 <p><b>Bank Payment</b></p>
              </div>

              <div className="col-md-4">
              <a style={{color:'white',textDecoration:'none'}} href="/checkout"><small>3</small></a> <br/> <br/>
                 <p className='text-secondary'>Membership created</p>
              </div>
              </div>
              <form style={{border:'1px solid black'}} className="p-5" onSubmit={handleSubmit(onSubmit)}>
             
                    <div className="form-group row">
                   
                   <div className="col-md-8">
                   <label class="containers mb-5">
                      <input type="radio" checked="checked" name="radio"/>
                      <span style={{fontSize:'30px'}} class="checkmark pl-2"> Credit Card</span>       
                    </label>
                   
                  </div>
                  <div className="col-md-4">
                    <img style={{height:'60px'}} src={ame} alt=""/>
                    <img style={{height:'60px',paddingLeft:'10px'}} src={master} alt=""/>
                    <img style={{height:'60px',paddingLeft:'10px'}} src={visa}alt=""/>
                  </div>
               </div>
                   
                    <div className="form-group row">
                   
                        <div className="col-md-12">
                        <h5 className='text-secondary pb-2'>CARD NUMBER</h5>
                        <input type="text" ref={register({ required: true })} style={{border:'1px solid lightGray',padding:'25px'}} name="cardNumber" placeholder='0000 0000 0000 0000' className="form-control" />
                        {errors.firstName && <span className="text-danger">first name is required</span>}
                        </div>
                    </div>
                   
                
                    <div className="form-group row pt-5">
                        
                        <div className="col-md-6">
                        <h5 className='text-secondary pb-2'>NAME ON CARD</h5>
                        <input type="text" ref={register({ required: true })} style={{border:'1px solid lightGray',padding:'25px'}} name="cardNumber"  className="form-control" />
                        {errors.firstName && <span className="text-danger">first name is required</span>}
                        </div>

                        <div className="col-md-3">
                        <h5 className='text-secondary pb-2'>EXPIRY DATE</h5>
                        <input type="text" ref={register({ required: true })} style={{border:'1px solid lightGray',padding:'25px'}} placeholder='MM/YY' name="cardNumber"  className="form-control" />
                        {errors.firstName && <span className="text-danger">first name is required</span>}
                        </div>
                    
                       <div className="col-md-3">
                       <h5 className='text-secondary pb-2'>CVV CODE</h5>
                        <input type="text" ref={register({ required: true })}  style={{border:'1px solid lightGray',padding:'25px'}} placeholder='?' name="cardNumber"  className="form-control" />
                        {errors.firstName && <span className="text-danger">first name is required</span>}
                      </div>

                    </div>
                </form>
              <div style={{border:'1px solid black',paddingBottom:'50px',paddingTop:'15px',paddingLeft:'20px',marginTop:'20px'}}>
                <div  className="row">
                    <div className="col-md-9">
                      <h2>payPal</h2>
                      <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, unde.</p>
                    </div>
                    <div className="col-md-3">
                        <img style={{height:'50px'}} src={bitmap} alt=""/>
                    </div>
                </div>
            </div>
                <div className="form-group text-right">
                      <button type="submit" className="btn btn-brand pricing-btn"><a style={{color:'black',textDecoration:'none'}} href="/checkout">Next</a></button>
                    </div>

              
        </div>

        </>
    );
};

export default PaymentMathod;
import { Link } from '@material-ui/core';
import React from 'react';
import { useForm } from 'react-hook-form';
import powerX1 from '../../Image & Icon/headerBackgroundc.jpg' 

import './RegistrationForm.css'
const RegistrationForm = () => {
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
              <span>1</span> <br/> <br/>
               <p><b>personal Details</b></p>
              </div>

              <div className="col-md-4">
                  <small>2</small>  <br/> <br/>
                 <p className='text-secondary'>Bank Payment</p>
              </div>

              <div className="col-md-4">
                 <small>3</small> <br/> <br/>
                 <p className='text-secondary'>Membership created</p>
              </div>
              </div>
              <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group row ">
                        <div className="col-md-6">
                        <p><b>First Name</b></p>
                        <input type="text" ref={register({ required: true })} name=" first name" className="form-control" />
                        {errors.name && <span className="text-danger">This field is required</span>}
                        </div>
                        
                       <div className="col-md-6">
                       <p><b>Last Name</b></p>
                       <input type="text" ref={register({ required: true })} name="last name"  className="form-control" />
                        {errors.name && <span className="text-danger">This field is required</span>}
                       </div>

                    </div>
                    <div className="form-group row">
                       <div className="col-md-6">
                           <p><b>Email</b> </p>
                           
                       <input type="email" ref={register({ required: true })} name="email"  className="form-control" />
                        {errors.email && <span className="text-danger">This field is required</span>}
                       </div>

                        <div className="col-md-6">
                        <p><b>Phone Number</b></p>
                        <input type="text" ref={register({ required: true })} name="phone"  className='form-control'/>
                        {errors.phone && <span className="text-danger">This field is required</span>}
                        </div>
                    </div>
                
                    <div className="form-group row ">
                        
                        <div className="col-md-2">
                            <p><b> Day </b></p>
                            <select className="form-control" name="Day"  ref={register({ required: true })} >
                                <option disabled={true} value="Not set">Select Day</option>
                                <option value="Sturday">Sturday</option>
                                <option value="Sunday">Sunday</option>
                                <option value="Monday">Monday</option>
                                <option value="Tuesday">Tuesday</option>
                                <option value="Wednesday">Wednesday</option>
                                <option value="Thursday">Thursday</option>
                                <option value="Friday">Friday</option>
                            </select>
                            {errors.Day && <span className="text-danger">This field is required</span>}

                        </div>
                        <div className="col-md-2">
                            <p><b>Month</b></p>
                        <select className="form-control" name="Month"  ref={register({ required: true })} >
                                <option disabled={true} value="Not set">Select Month</option>
                                <option value="january">january</option>
                                <option value="February">February</option>
                                <option value="March">March</option>
                                <option value="April">April</option>
                                <option value="May">May</option>
                                <option value="June">June</option>
                                <option value="July">July</option>
                                <option value="August">August</option>
                                <option value="September">September</option>
                                <option value="October">October</option>
                                <option value="November">November</option>
                                <option value="December">December</option>
                            </select>
                            {errors.Day && <span className="text-danger">This field is required</span>}

                        </div>
                        <div className="col-md-2">
                          <p><b>Year</b></p>
                        <select className="form-control" name="Year"  ref={register({ required: true })} >
                                <option disabled={true} value="Not set">Year</option>
                                <option value="1991">1991</option>
                                <option value="1992">1992</option>
                                <option value="1993">1993</option>
                                <option value="1994">1994</option>
                                <option value="1995">1995</option>
                                <option value="1996">1996</option>
                                <option value="1997">1997</option>
                                <option value="1998">1998</option>
                                <option value="1999">1999</option>
                                <option value="2000">2000</option>

                                <option value="2001">2001</option>
                                <option value="2002">2002</option>
                                <option value="2003">2003</option>
                                <option value="2004">2004</option>
                                <option value="2005">2005</option>
                                <option value="2006">2006</option>
                                <option value="2007">2007</option>
                                <option value="2008">2008</option>
                                <option value="2009">2009</option>
                                <option value="2010">2010</option>

                              
                                <option value="2011">2011</option>
                                <option value="2012">2012</option>
                                <option value="2013">2013</option>
                                <option value="2014">2014</option>
                                <option value="2015">2015</option>
                                <option value="2016">2016</option>
                                <option value="2017">2017</option>
                                <option value="2018">2018</option>
                                <option value="2019">2019</option>
                                <option value="2020">2020</option>
                      
                              
                                
                                 

                                
                            </select>
                            {errors.Day && <span className="text-danger">This field is required</span>}
                        </div>
                    
                    <div className="col-md-6">
                        <p><b>Gender</b></p>
                    <select className="form-control" name="gender" ref={register({ required: true })} >
                                <option disabled={true} value="Not set">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Not set">Other</option>
                            </select>
                            {errors.gender && <span className="text-danger">This field is required</span>}
                     </div>
                     </div>

                     <div className="form-group row">
                       <div className="col-md-6">
                           <p><b>Address</b></p>
                           
                       <input type="text" ref={register({ required: true })} name='Address' className="form-control" />
                        {errors.address && <span className="text-danger">This field is required</span>}
                       </div>

                        <div className="col-md-6">
                        <p><b>country</b></p>
                        <input type='text' ref={register({ required: true })} name="Country"  className='form-control'/>
                        {errors.country && <span className="text-danger">This field is required</span>}
                        </div>
                    </div>
                    <div className="form-group row">
                       <div className="col-md-6">
                           <p><b>City</b></p>
                           
                       <input type="text" ref={register({ required: true })} name='city'        className="form-control" />
                        {errors.city && <span className="text-danger">This field is required</span>}
                       </div>

                        <div className="col-md-6">
                        <p><b>post code</b></p>
                        <input type="text" ref={register({ required: true })} name="post code"  className='form-control'/>
                        {errors.postCode && <span className="text-danger">This field is required </span>}
                        </div>
                    </div>

                    <div className="form-group text-right">
                      <button type="submit" className="btn btn-brand pricing-btn">Next</button>
                    </div>
                </form>

              
        </div>

        </>
    );
};

export default RegistrationForm;
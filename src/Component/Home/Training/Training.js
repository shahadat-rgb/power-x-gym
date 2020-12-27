import React from 'react';
import traning1 from '../../../Image & Icon/bruce-mars-gJtDg6WfMlQ-unsplash.png'
import traning2 from '../../../Image & Icon/arthur-edelman-qfjuh4OLdxw-unsplash.jpg'
import './Training.css'
import {AiOutlineArrowRight } from "react-icons/ai"
const Training = () => {
    return (
      <div className="container">
          <h3 className='text-center'>TRAINING <span className='text-warning'>PROGRAMS</span></h3>
          <div className="card-deck pt-4 pb-5 ">
              
              <div   style={{backgroundImage:`linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${traning1})`}} className="card training-img">
                 
                       <h5>YUGA TRAINNIG SESSION   <AiOutlineArrowRight className='arrowBtn'/> </h5>
              
              </div>
              <div  style={{backgroundImage:`linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${traning2})`}} className="card training-img">
                   
                      <h5>CARDIO TRAINNIG SESSION  <AiOutlineArrowRight className='arrowBtn'/></h5>
               
              </div>
          </div>
      </div>
    );
};

export default Training;
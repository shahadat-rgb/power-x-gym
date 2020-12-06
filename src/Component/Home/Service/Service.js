import React from 'react';
import './Service.css'
import service from "../../../Image & Icon/daniel-apodaca-WdoQio6HPVA-unsplash.jpg"
import service1 from "../../../Image & Icon/hipcravo-5UbIqV58CW8-unsplash.jpg"  
import service2 from "../../../Image & Icon/penguinuhh-8VI6WwEEEHw-unsplash.jpg"
import logo1 from '../../../Image & Icon/Group 80.png'
import logo2 from '../../../Image & Icon/Group 81.png'
import logo3 from '../../../Image & Icon/Group 82.png'

const Service = () => {
    return (
       <div className="container">
          <div class="card-deck">
        <div class="card card-service"  style={{backgroundImage:`linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${service})`}}>
          <img style={{height:'50px',margin:'1px auto',marginTop:'15px'}} src={logo1} alt=""/>
          <h2 class='text-white pt-3 pb-3'>PROGRESSION</h2>
          <p class='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, similique ipsum voluptatum enim iusto illum magni, repellendus molestias, fugiat error aut libero aliquid atque quibusdam.</p>
        </div>
        <div class="card card-service"  style={{backgroundImage:`linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${service1})`}}>
        <img style={{height:'50px',margin:'1px auto',marginTop:'15px'}} src={logo2} alt=""/>
          <h2 class='text-warning pt-3 pb-3'>WORKOUT</h2>
          <p class='text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores velit cum ad possimus aliquid explicabo corrupti mollitia iusto cupiditate. Porro necessitatibus asperiores quibusdam nam neque.</p>
        </div>
        <div class="card card-service"  style={{backgroundImage:`linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${service2})`}}>
        <img src={logo3} style={{height:'50px',margin:'1px auto',marginTop:'15px'}} alt=""/>
          <h2 class='text-white pt-3 pb-3'>NUTRITIOWN</h2>
         <p className='text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae repellat dolore sunt quibusdam impedit tempore quis, at consectetur facilis iusto, excepturi cumque esse vero dolorem.</p>
        </div>
      </div>
       </div>
    );
};

export default Service;
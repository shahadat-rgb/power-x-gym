import React from 'react';
import group1 from "../../../Image & Icon/Group 87.png"
import group2 from "../../../Image & Icon/Group 88.png"
import group3 from "../../../Image & Icon/gift-2.png"
import './ChooseUs.css'
const ChooseUs = () => {
    return (
      <div className="container">
          < h1 className='text-center mt-3 pb-5'><span className='text-warning'>WHY </span> CHOOSE US</h1>
        <div className="card-deck pb-5">
          <div className="card card-contact">
              <img  src={group1} alt=""/>
              <h3>FREE FITNESS TRAINING</h3>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi laborum facilis dolore culpa quos exercitationem quisquam tempora ipsam? Quidem, sapiente?</p>
          </div>
          <div className="card card-contact">
              <img  src={group2} alt=""/>
              <h3>TONS OF CARDIO STRINGTH</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quia corporis voluptates voluptatibus sunt sit iure atque mollitia laborum numquam?</p>
          </div>
          <div className="card card-contact">
              <img src={group3} alt=""/>
              <h3>NO COMMETMENT MEMBERSHIP</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quia corporis voluptates voluptatibus sunt sit iure atque mollitia laborum numquam?</p>
          </div>
        </div>
      </div>
    );
};

export default ChooseUs;
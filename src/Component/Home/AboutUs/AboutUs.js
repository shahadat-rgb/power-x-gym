import React from 'react';
import aboutUs from "../../../Image & Icon/wells-chan-H-vAxuWxmi8-unsplash.jpg"
const AboutUs = () => {
    return (
      <div className="container">
          <div className="row pb-5 pt-5">
              <div className="col-md-5">
               <img style={{width:'100%',height:'450px'}} src={aboutUs} alt=""/>
              </div>
              <div className="col-md-1"></div>
              <div className="col-md-6">
                <h1 style={{color:'lightgray'}}>ABOUT US</h1>
                <h1 className='text-warning'>WE ARE HERE TO DREAM</h1>
                <h2 class='pb-3'>OUR TEAM IS HERE SURVE YOU</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est beatae non voluptates corrupti, aliquam corporis aperiam, consectetur illum nobis facere error culpa fugiat, ad dicta enim unde ea placeat ex vitae quisquam repellat inventore omnis recusandae. Ratione animi delectus alias.</p>
              </div>
          </div>
      </div>
    );
};

export default AboutUs;
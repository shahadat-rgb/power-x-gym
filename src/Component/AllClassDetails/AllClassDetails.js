import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { TrainingContext } from '../../App';
import FakeData from '../FakeData/FakeData'
import powerX1 from '../../Image & Icon/headerBackgroundc.jpg'
import checkmaker from '../../Image & Icon/checkmark-square-2.png'
import './AllClassDetails.css'
const AllClassDetails = () => {
    
    const { trainingId } = useParams();
    const [training,setTraining] = useContext(TrainingContext);
    setTraining(trainingId);
  
    const [trainings,setTrainings] =useState({});
    const {title,img} = trainings;

       useEffect(() => {
        const selectedClass = FakeData.find((classDetails) => classDetails.id == trainingId );
        setTrainings(selectedClass);
      }, [trainingId]);

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
          
          <h1  className='text-white text-center pt-5'> {title} </h1>
         
      </div>
      </div>
          
        <div className="container">
            <div className="row">
              <div className="col-md-6">
               <img style={{width:'100%',height:'460px'}} src={img} alt=""/>
               <p className='text-secondary pb-3 pt-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, velit voluptatem eos, excepturi consequatur fugiat numquam, architecto neque culpa alias sequi earum ab. Reprehenderit perspiciatis aspernatur minima, fugiat beatae voluptates quos voluptatum mollitia impedit vel at, tempore nobis debitis ratione numquam accusamus quasi aliquam cumque repellat praesentium. Harum fugiat unde doloremque debitis quaerat, veniam minus voluptate obcaecati nihil quas esse nesciunt facere perferendis maxime perspiciatis fuga animi? Quasi at fugit molestias, .</p>
                <img style={{height:'25px',float:'left',paddingRight:'15px'}} src={checkmaker} alt=""/> <h5> <b>Having Slimmer Shapely Thigs</b></h5> <br/>
                <img style={{height:'25px',float:'left',paddingRight:'15px'}} src={checkmaker} alt=""/> <h5> <b>Getting Stronger Body</b></h5> <br/>
                <img style={{height:'25px',float:'left',paddingRight:'15px'}} src={checkmaker} alt=""/> <h5> <b>Increased Motabolism</b></h5>  <br/>
                <img style={{height:'25px',float:'left',paddingRight:'15px'}} src={checkmaker} alt=""/> <h5> <b>Increased Masculer Endurance</b></h5> <br/>
                <img style={{height:'25px',float:'left',paddingRight:'15px'}} src={checkmaker} alt=""/> <h5> <b>Maximum Results In Less Time</b></h5> <br/>
                <img style={{height:'25px',float:'left',paddingRight:'15px'}} src={checkmaker} alt=""/> <h5> <b>Firm Hips and Tummy</b></h5> <br/>
                <Link to='/pricing'><button class='joinUs-btn float-right'> <b>JOIN US</b> </button></Link>
              </div>
              <div className="col-md-6">
                <h1 className='text-center'> <span className='text-warning'> CLASS</span> SCHEDULE</h1>
                  <div className="row">
                    <div className="col-md-6">
                    <div className="card card-date">
                     <div className="card-body">
                        <h3>Monday</h3>
                       <p>8.00 AM - 9.00 AM</p>
                     </div>
                    </div>

                    <div className="card card-date">
                      <div className="card-body">
                      <h3>Wednesday</h3>
                       <p>7.00 AM - 8.00 AM</p>
                      </div>
                    </div>

                    <div className="card card-date">
                    <div className="card-body">
                         <h3>Friday</h3>
                         <p>6.00 AM - 7.00 AM</p>
                    </div>
                    </div>
                    </div>

                    <div className="col-md-6">
                    <div className="card card-date">
                      <div className="card-body">
                      <h3>Tuesday</h3>
                       <p>10.00 AM - 11.00 AM</p>
                      </div>
                    </div>

                    <div className="card card-date">
                       <div className="card-body">
                       <h3>Thrusday</h3>
                       <p>5.00 PM - 6.00 PM</p>
                       </div>
                    </div>

                    <div className="card card-date">
                      <div className="card-body">
                          <h3>Saturday</h3>
                          <p>7.00 PM - 8.00 PM</p>
                       </div>
                     </div>
                  
                    </div>
                  </div>
              </div>
            </div>
          
        </div>
     
      
</>
    );
};

export default AllClassDetails;
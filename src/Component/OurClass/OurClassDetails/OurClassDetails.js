import React from 'react';
import { Card, Col } from   'react-bootstrap';
import { useHistory } from  'react-router-dom';
import './OurClassDetails.css'
const OurClassDetails = ({classDetails}) => {
    const history =useHistory();
    const classHandler=()=>{

          history.push(`/allClassDetails/${classDetails.id}`)
    }
    return (
            <Col xs={12} sm={6} md={4} className='text-center'>
            <Card onClick={classHandler} style={{backgroundImage:`linear-gradient(rgba(0,0,0,0.0),rgba(0,0,0,0.0)), url(${classDetails.img})`,cursor:'pointer'}}  className="card-title">
              <Card.Body>
                 <h5> {classDetails.title} </h5>                    
              </Card.Body>
                </Card>
            </Col> 
        
    );
};

export default OurClassDetails;
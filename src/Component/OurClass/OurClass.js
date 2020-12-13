import React, { useState } from 'react';
import ClassNavbar from './ClassNavbar/ClassNavbar';
import FakeData from "../FakeData/FakeData"
import OurClassDetails from './OurClassDetails/OurClassDetails';
import { Row } from 'react-bootstrap';
const OurClass = () => {
    const [training,setTraining]=useState(FakeData)
    return (
        <div>
            <ClassNavbar></ClassNavbar>
            <div className="container">
            <Row xs={12}>
                { training.map(ourClass => {
                 return  <OurClassDetails classDetails={ourClass} key={ourClass.id}> </OurClassDetails>
                  })
                }
                </Row>
            </div>
        </div>
    );
};

export default OurClass;
import React from 'react';
import powerX1 from '../../../Image & Icon/headerBackgroundc.jpg'
import './MainHeader.css'
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';

const MainHeader = () => { 
    return (
        <div style={{backgroundImage:`linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${powerX1})`}} className="mainHeader">
           <div className="container">
           <Navbar></Navbar>
            <Header></Header>
           
           </div>
        </div>
    );
};

export default MainHeader;
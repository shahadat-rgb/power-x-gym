import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
    return (
        
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
                        <Link class="nav-link text-white" href="#">Our Class</Link>
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
 
    );
};

export default Navbar;
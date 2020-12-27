import React from 'react';
import { useHistory } from 'react-router-dom';
import {AiOutlinePlayCircle } from "react-icons/ai"
import './Header.css'

const Header = () => {
    const history = useHistory();
  

    return (
 
            <div className="row">
                <div className="col-md-6 text-white header-section">
                 <h1><b>THE BEST FITNESS</b></h1>
                 <h1><b>STUDIO IN TOWN</b></h1>
                 <p className='pt-3 pb-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id aut, earum molestias fugiat fugit sunt illum doloremque. Repudiandae aliquam, minima, facere totam a reprehenderit pariatur voluptate, temporibus expedita soluta consectetur!</p>
            <button onClick={() => history.push('/our-class') } style={{cursor:'pointer'}}> Join Us</button>
                </div>
            <div className="col-md-6 " >
                   
        <a style={{width:'50%'}} href="https://www.youtube.com/embed/fvFQU6NvJo8"> <AiOutlinePlayCircle className=' play-btn mt-5'></AiOutlinePlayCircle></a>
      
            </div>
        </div>
    );
};

export default Header;
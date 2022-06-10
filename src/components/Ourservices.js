import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
const Service =() => {

    const cont = 
    useEffect(() => {
        AOS.init({ duration: 2000 });


    }, []);
	return (

        <div className='service'>
            <h1 className='h1class h1bg'>OUR SERVICES</h1>
            <div className='subservice'>
                <div className='servicediv servicedivision' data-aos="slide-right">
                    <div className='borderbreakimg'>
                <img src='./images/example-img.png'/>
                </div>
                <h2>Funding Efforts</h2>

                <p>
                Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. 
                </p>    
                </div>

                <div className='servicediv servicedivision' data-aos="slide-down">
                    
                <div className='borderbreakimg'>
                <img src='./images/example-img.png'/>
                </div>
                <h2>Funding Efforts</h2>

                <p>
                Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. 
                </p>    
                </div>

                <div className='servicediv servicedivision' data-aos="slide-left">
                    
                <div className='borderbreakimg'>
                <img src='./images/example-img.png'/>
                </div>
                <h2>Funding Efforts</h2>

                <p>
                Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. 
                </p>    
                </div>
            </div>



        <div>
            <h1 id='servhed' className='h1class'>WE PROVIDE SERVICE FOR</h1>
            <div className='addproperty' data-aos="slide-left">
                <div className='servicecontent'>
                    <h2 className='servhead'>PROPERTY OWNERS</h2>
                    <p>can add property and manage their properties with a number of facilities </p>
                    <button className='servicebtn'><Link to="/AddProperty" className='textdec'>Add-property</Link></button>
                </div>
                <div>
                    <img className='serviceimage' src='https://woobro.design/thumbnails/38/website-support-vector-illustration-5de193d48a370.png'/>
                </div>

            </div>

       
            <div className='searchproperty' data-aos="slide-right">
                <div>
                    <img className='serviceimage2' src='https://woobro.design/thumbnails/38/website-support-vector-illustration-5de193d48a370.png'/>
                </div>
                <div className='servicecontent'>
                    <h2>Search Property</h2>
                    <p>can add property and manage their properties with a number of facilities </p>
                    <button className='servicebtn'><Link to="/AddProperty" className='textdec'>Add-property</Link></button>
                </div>

            </div>
            
        </div>




        
        </div>





    		);
}

export default Service;
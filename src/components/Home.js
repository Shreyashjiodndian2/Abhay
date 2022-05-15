
import React, { Component, useEffect } from 'react';
import Menu from './Menu';
import Footer from './Footer';
import Carousel from './Carousel';
import About from './About';
import Service from './Ourservices';
import { Link,Switch,Router,Route } from 'react-router-dom';



const Home =(props)=>{

    

    return(

        <div>

            	
<Menu/>
<Carousel/>
<About/>
<Service/>
<Footer/>
        </div>
    );
}
export default Home;
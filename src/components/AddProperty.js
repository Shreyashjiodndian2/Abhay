import react from 'react';
import Menu from './Menu';
import PostProperty from './PostProperty';
import Dashboard from './Dashboard';
import { Navbar,Nav,NavDropdown,Container,Card,Button,InputGroup,FormControl,Form,Table } from 'react-bootstrap';
import { Link,Switch,Router,Route } from 'react-router-dom';
import Type from './Type';
import AddImages from './AddImages';
import '../css/main2.css'
import FeaturedProject from './FeaturedProject';

import RentProperty from './RentProperty';
import { useContext, useState, } from "react";
import {UserContext} from '../Context/UserContext'
import '../css/main.css'



const AddProperty =() => {

  

	return (

    

        <div className="App">
        <Menu/>
        <PostProperty/>
        <Dashboard/>
          <Type/>
           <FeaturedProject />  
        
        
        
        </div>
        );
}

export default AddProperty;
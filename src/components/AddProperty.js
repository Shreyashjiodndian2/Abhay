import react from 'react';
import Menu from './Menu';
import PostProperty from './PostProperty';
import Dashboard from './Dashboard';
import { Navbar,Nav,NavDropdown,Container,Card,Button,InputGroup,FormControl,Form,Table } from 'react-bootstrap';
import { Link,Switch,Router,Route } from 'react-router-dom';
import Type from './Type';
import AddImages from './AddImages';
import '../css/main2.css'

import '../css/main.css'


const AddProperty =() => {
	return (

        <div className="App">
        <Menu/>
        <PostProperty/>
        <Dashboard/>
          <Type/>
       
        
        
        </div>
        );
}

export default AddProperty;
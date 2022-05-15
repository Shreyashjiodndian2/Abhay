import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import About from './components/About';
import Service from './components/Ourservices';
import { Link,Switch,Router,Route } from 'react-router-dom';
import { Navbar,Nav,NavDropdown,Container,Card,Button,InputGroup,FormControl,Form,Table } from 'react-bootstrap';


class App extends React.Component {
render(){
  return (

  	 <div className="App">
  	
<Menu/>
<Carousel/>
<About/>
<Service/>
<Footer/>
</div>
  );
 }
}

export default App;

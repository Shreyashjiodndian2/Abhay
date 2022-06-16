import react from 'react';
import '../css/Form1.css'
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';



<style>
    
</style>

const Menu2 =() => {
	return (

    
         <nav>
            <div class="logo"><img src={'images/lit logo.png'}/>
            </div>
            <label for="btn" class="icon">
                <span class="fa fa-bars"></span>
            </label>
            <input className='hide' type="checkbox" id="btn"/>
    
            <ul className='ulclass'>
            <li ><Link to="/AddProperty" className='postpropertyheading'>Dashboard</Link></li>
            <li ><Link to="/" className='postpropertyheading'>Listings</Link></li>
            <li><div className='dropdown'  style={{width: "5px"}}>
            <select>
              <option value="0">Upload</option>
              <option value="1">Audi</option>
              <option value="2">BMW</option>
              <option value="3">Citroen</option>
              <option value="4">Ford</option>
            </select>
            </div></li>
            
            <li><img className='usericon' src='https://static.vecteezy.com/system/resources/previews/000/550/731/original/user-icon-vector.jpg'/>
            </li>
    
            </ul>
        </nav>
		);
}

export default Menu2;
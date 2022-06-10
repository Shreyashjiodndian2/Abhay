import react from 'react';
import { Navbar,Nav,NavDropdown,Container,Card,Button,InputGroup,FormControl,Form,Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Type =() => {
    return (
      <>
        <div className='proptype'>
            

                <div className='service'>
            <h1 className='h1class h1bg'>Post New Listing</h1>
           
            <div className='subservice'>
                <div className='servicediv servicedivision' data-aos="slide-right">
                    <div className='borderbreakimg'>
                <img src='./images/example-img.png'/>
                </div>
                <h2>Funding Efforts</h2>

                <p>
                Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. 
                </p>    
                <button className='servicebtn'><Link to="/HostelForm" className='textdec'>Hostel</Link></button>
               
                </div>

                <div className='servicediv servicedivision' data-aos="slide-down">
                    
                <div className='borderbreakimg'>
                <img src='./images/example-img.png'/>
                </div>
                <h2>Funding Efforts</h2>

                <p>
                Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. 
                </p>    
                <button className='servicebtn'><Link to="/PGForm" className='textdec'>PG</Link></button>
               
                </div>

                <div className='servicediv servicedivision' data-aos="slide-left">
                    
                <div className='borderbreakimg'>
                <img src='./images/example-img.png'/>
                </div>
                <h2>Funding Efforts</h2>

                <p>
                Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. 
                </p>    
                <button className='servicebtn'><Link to="/RentForm" className='textdec'>Rent</Link></button>
               
               </div>
               </div></div>
           

        </div>
        
        </>
    );

}


export default Type;
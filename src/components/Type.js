import react from 'react';
import { Navbar,Nav,NavDropdown,Container,Card,Button,InputGroup,FormControl,Form,Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Type =() => {
    return (
        <div className='proptype'>
            <h1>Post New Listing</h1>
            <h2>Choose the type of property
                you want to list.</h2>

            <div className='subtype'>
                <div className='servicediv'>
                    <div className='borderbreakimg'>
                <img src='./images/example-img.png'/>
                </div>
                <h2>Funding Efforts</h2>

                <p>
                Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. 
                </p> 
                <div className='btnalign'>
                <button className='typebutton'>
                <Link to="/HostelForm" className='textdec'>
                    Hostel/PG
                    </Link>
                    </button>   
                    </div>
                </div>

                <div className='servicediv'>
                    
                <div className='borderbreakimg'>
                <img src='./images/example-img.png'/>
                </div>
                <h2>Funding Efforts</h2>

                <p>
                Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. 
                </p>  
                <div className='btnalign'>
                <button className='typebutton '>
                <Link to="/RentForm" className='textdec'>
                Rent Property
                    </Link>
                   
                    </button>  
                    </div>
                </div>


            </div>

        </div>
        

    );

}


export default Type;
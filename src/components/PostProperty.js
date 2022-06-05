import react from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import { Navbar,Nav,NavDropdown,Container,Card,Button,InputGroup,FormControl,Form,Table } from 'react-bootstrap';


const PostProperty =() => {

	

	return (

		

		<div className='postproperty'>
			<div className='postpropertyImg'>
			
				<img src='./images/hostel.png'/>
				
				<div className='postpropertyImgBox'>
				<div className='postpropertyImg3'>
				<img src='./images/add 3.png'/>
				</div>
				<div className='postpropertyImg3'>
				<img src='./images/luggage 1.png'/>
				</div>
				<div className='postpropertyImg4'>
				<img src='./images/add 5.png'/>
				</div>
				
				</div>
				

			</div>
			
			<div className='postpropertyText'>
				<h1>Add Property</h1>
				<h5>PROJECT FOR MAXWELL INC</h5>
				<p>lorem ipsum dolor sit amet lorem ipsum lorem ipsum 
				</p>
				<button className='servicebtn' >
				<Link to="/Type">Add Property</Link>
					</button>
				<button className='servicebtn' >
				<Link to="/pageofuser">Show hostel property</Link>
					</button>
				
			</div>

			
			
			<div className='postpropertyImg2'>
				<img src='./images/hostel2.png'/>

				<div className='postpropertyImgBox'>
				<div className='postpropertyImg2'>
				<img src='./images/luggage 2.png'/>
			    </div>

				
				
				<div className='postpropertyImg3'>
				<img src='./images/find.png'/>
				</div>
				</div>
			
			</div>


			
		</div>
		

	);
}




export default PostProperty;

import react from 'react';




import { Navbar,Nav,NavDropdown,Container,Card,Button,InputGroup,FormControl,Form,Table } from 'react-bootstrap';

const Dashboard =() => {

	return (
		<div className='dashboard'>
				<h1>DASBOARD</h1>

				<div className='container'>
					<div className='box'>
                        <h1>3</h1>
                        <h2>Hostels</h2>
                    </div>

                    <div className='box'>
                        <p><h1>3</h1>
                        <h2>Property</h2></p>
                    </div>

                    <div className='box'>
                        <h1>3</h1>
                        <h2>Rooms in Hostel</h2>
                    </div>

				</div>

			</div>



	);
}

export default Dashboard;
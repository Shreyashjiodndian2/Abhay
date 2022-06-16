import react from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Carousel,Card } from 'react-bootstrap';

const Carousell =() => {
	return (
	
		<Carousel >
		<Carousel.Item className='carouselclass'>
		<div className='carousel'>
			<div className='carouselText'>
				<h1>LITRENTAL</h1>
				<h5>LIVE IN TEMPORARY RENTAL</h5>
				<p>lorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor sit amet</p>
				<button className='servicebtn '>Start</button>
			</div>
			<div className='carouselImg'>
				<img src='https://media.istockphoto.com/vectors/smart-city-landscape-city-center-with-many-building-airplane-is-in-vector-id1152829376'/>
			</div>
		</div>

		  
		</Carousel.Item>
		<Carousel.Item className='carouselclass'>
		<div className='carousel'>
			<div className='carouselText'>
				<h1>LITRENTAL</h1>
				<h5>LIVE IN TEMPORARY RENTAL</h5>
				<p>lorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor sit amet</p>
				<button className='servicebtn '>Start</button>
			</div>
			<div className='carouselImg'>
				<img src='https://media.istockphoto.com/vectors/smart-city-landscape-city-center-with-many-building-airplane-is-in-vector-id1152829376'/>
			</div>
		</div>

		  
		</Carousel.Item>

		</Carousel>

		);
}

export default Carousell;
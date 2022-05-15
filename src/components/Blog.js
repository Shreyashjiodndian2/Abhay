import React, { useContext, useEffect,useState } from 'react';

import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

class Blog extends React.Component {  
render() {  
return (
         <ul >
           <li>
             <Link to="/">Home</Link>
           </li>
           <li>
             <Link to="/about">About Us</Link>
           </li>
           <li>
             <Link to="/contact">Contact Us</Link>
           </li>
         </ul>
        
);

}  
}  
export default Blog;
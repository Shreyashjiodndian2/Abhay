import React from 'react';
import Blog from './Blog';
import Services from './Services';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';


const Routes = (props) => (
    <Router {...props}>
        <Switch>
            <Route exact path="/" component ={Blog} />
            <Route path="/Services" component ={Services} />
        </Switch>
    </Router>
);
export default Routes;

import React, { Component } from 'react';
// import { BrowserRouter ,Routes, Route, Link } from 'react-router-dom';
import { BrowserRouter as Router,  Switch,  Route} from "react-router-dom";


import RentProperty from './components/RentProperty';
import Form1 from './components/Form1';
import Services from './components/Services';

import AddImages from './components/AddImages';
import Blog from './components/Blog';
import Home from './components/Home';
import AddProperty from './components/AddProperty';
import Type from './components/Type';
import LoginWithEmail from './components/LoginWithEmail';
import Register from './components/Register';
import {UserState} from './Context/UserContext'
import {AuthState} from './Context/AuthContext'
 
class App extends Component {
  render() {
    return (
    
<UserState>
<AuthState>
      <Router>
      <Switch>
      
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path='/AddProperty' >
        < AddProperty />
      </Route>
      <Route exact path='/HostelForm' >
        < Form1 />
      </Route>
      <Route exact path='/RentForm' >
      < RentProperty />
      </Route>
      <Route exact path='/Type' >
      < Type />
      </Route>
      <Route exact path='/AddImages' >
      < AddImages />
      </Route>
      <Route exact path='/Login'>
      <LoginWithEmail/>
      </Route>
      <Route exact path='/Register' >
      <Register/>
      </Route>
      </Switch>
      </Router>
      </AuthState>
      </UserState>
   );
  }
}
 
export default App;
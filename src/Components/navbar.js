import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav } from 'reactstrap';
  import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


import Login from './login.js';
import Find from './find.js';
import Create from './register.js';

export default class Example extends React.Component {

     render() {
    return (
      <div>
          <Router> 
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">User Login</NavbarBrand>
             <Nav className="ml-auto" navbar>
                <Link to="/find">Find Users</Link>
                 <Link to="/register">Register</Link>
                 <Link to="/">Login</Link> 

                 </Nav>
        </Navbar>
      
        <Route exact path="/" component={Login} />
        <Route  exact path="/register" component={Create} />
        <Route path="/find" component={Find} />

     
        </Router> 
    
      </div>
    );
  }
}
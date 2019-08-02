import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { NavLink as RRNavLink } from 'react-router-dom';
import {library} from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faUserEdit, faUserCircle } from '@fortawesome/free-solid-svg-icons';


import Login from './login.js';
import Find from './find.js';
import Create from './register.js';

export default class Example extends React.Component {

  render() {
    return (
      <div>
        <Router>
          <Navbar color="dark" dark expand="md">
            <NavbarBrand tag={RRNavLink} to="/">User Login Site</NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                  <FontAwesomeIcon icon={faUsers} />
                <Link style={{ color: '#87898C' }} tag={RRNavLink}  to="/find">Find Users</Link>
              </NavItem>
              <NavItem>
                 <FontAwesomeIcon icon={faUserEdit} />
                <Link style={{ color: '#87898C' }} tag={RRNavLink}  to="/register">Register</Link>
              </NavItem>
              <NavItem>
                 <FontAwesomeIcon icon={faUserCircle} />
                <Link style={{ color: '#87898C' }} tag={RRNavLink} to="/">Login</Link>
              </NavItem>


            </Nav>
          </Navbar>

          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Create} />
          <Route path="/find" component={Find} />


        </Router>

      </div>
    );
  }
}
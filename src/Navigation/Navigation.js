import React, {Component} from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import FA from 'react-fontawesome';

import './Navigation.css';

import logo from './logo-plexpy@2x.png';

class Navigation extends Component {
  render() {
    return (
      <Navbar inverse fixedTop fluid>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/"><img src={logo} alt="Logo" height="40"/></a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>

        <Nav pullRight>
          <NavItem href="#"><FA name="home" size="lg"/></NavItem>
          <NavItem href="#">Libraries</NavItem>
          <NavItem href="#">Users</NavItem>
          <NavItem href="#">History</NavItem>
          <NavItem href="#">Graphs</NavItem>
          <NavItem href="#">Synced Items</NavItem>
          <NavDropdown title={<span><FA name="cogs" size="lg"/> <span class="caret"></span></span>}>
            <MenuItem><FA name="cogs" fixedWidth="true"/> Settings</MenuItem>
            <MenuItem divider/>
            <MenuItem><FA name="list-alt" fixedWidth="true"/> View Logs</MenuItem>
            <MenuItem><FA name="question-circle" fixedWidth="true"/> FAQ</MenuItem>
            <MenuItem><FA name="comment" fixedWidth="true"/> Support</MenuItem>
            <MenuItem divider/>
            <MenuItem><FA name="paypal" fixedWidth="true"/> Paypal</MenuItem>
            <MenuItem><FA name="bitcoin" fixedWidth="true"/> Bitcoin</MenuItem>
            <MenuItem divider/>
            <MenuItem><FA name="arrow-circle-up" fixedWidth="true"/> Check for Updates</MenuItem>
            <MenuItem><FA name="refresh" fixedWidth="true"/> Restart</MenuItem>
            <MenuItem><FA name="power-off" fixedWidth="true"/> Shutdown</MenuItem>
            <MenuItem><FA name="lock" fixedWidth="true"/> Admin Login</MenuItem>
            <MenuItem><FA name="sign-out" fixedWidth="true"/> Sign Out</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>
    );
  }
}

export default Navigation;








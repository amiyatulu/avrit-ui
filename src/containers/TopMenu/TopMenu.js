import React, { Component } from 'react';
import {Navbar, Nav}  from 'react-bootstrap';
import MegaMenu from './MegaMenu/MegaMenu';
import BrandImage from './images/brand.svg';
import { Link, NavLink } from "react-router-dom";

class TopMenu extends Component {

  state = {
    section:[]
  }

  render() {
    const {user} = this.props;
    return (
  <React.Fragment>
  <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
  <Link className="navbar-brand" to="/"><img src={BrandImage} height="50" alt="Brand" />Avrit</Link>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
    <li className="nav-item"><Link className="nav-link" to="/">Features</Link></li>
    {!user && 
    (<React.Fragment>
    <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
    <li className="nav-item"><Link className="nav-link" to="/register">Register</Link></li>
    </React.Fragment>)
    }
    {user && (
    <React.Fragment>
    <li className="nav-item"><Link className="nav-link" to="/profile">{user.email}</Link></li>
    <li className="nav-item"><Link className="nav-link" to="/logout">Logout</Link></li>
    </React.Fragment>)
    }
    <MegaMenu/>
    </Nav>
    

    
    </Navbar.Collapse>
  </Navbar>
    </React.Fragment>  
    );
}
}
 
export default TopMenu;
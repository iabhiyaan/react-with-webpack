import React, { Component } from 'react'
import { render } from 'react-dom'
import { Link, Outlet } from 'react-router-dom'
import logo from './logo.svg'
require('bootstrap')
import './App.css'
import { Button } from '@mui/material'

class App extends Component {
   state = {
      logo: logo,
      count: 44,
      imageUrl: 'https://picsum.photos/200',
   }

   render() {
      // var isActive = this.context.router.route.location.pathname === this.props.to;
      // var className = isActive ? 'active' : '';
      // let isActive = this.context.router.isActive(this.props.to, true);
      // let className = isActive ? "active" : "";dfsdfsd

      return (
         <React.Fragment>
            <Button variant="contained">Help</Button>
            <ul className="container flex d-flex justify-item-center">
               <Link to="/" variant="contained">
                  <li>
                     <img src={this.state.logo} alt="" width="100" />
                  </li>
               </Link>
               <Link to="/home" className="btn btn-sm btn-flat btn-info">
                  <li>Home</li>
               </Link>
               <Link className="btn btn-sm btn-flat btn-info" to="/about-us">
                  <li>About us</li>
               </Link>
               <Link to="/login" className="btn btn-info btn-sm">
                  <li>Login</li>
               </Link>
               <Link className="btn btn-sm btn-flat btn-info" to="/register">
                  <li>Register</li>
               </Link>
               <Link className="btn btn-sm btn-flat btn-info" to="/contact-us">
                  <li>Contact us</li>
               </Link>
               <Link className="btn btn-sm btn-flat btn-info" to="/blogs">
                  <li>Blogs</li>
               </Link>
               <li>
                  <Link to="/tests" className="btn btn-info btn-sm ">
                     Tests
                  </Link>
               </li>
               <li>
                  <Link to="/admin-login" className="btn btn-info btn-sm ">
                     Admin Login
                  </Link>
               </li>
            </ul>
         </React.Fragment>
      )
   }
}

export default App

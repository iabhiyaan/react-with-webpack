import React, { Component } from 'react'

import { Outlet, Link } from 'react-router-dom'
import logo from '../logo.svg'

class Layout extends Component {
   state = {
      logo,
      count: 44,
      imageUrl: 'https://picsum.photos/200',
   }

   render() {
      // var isActive = this.context.router.route.location.pathname === this.props.to;
      // var className = isActive ? 'active' : '';
      // let isActive = this.context.router.isActive(this.props.to, true);
      // let className = isActive ? "active" : "";
      return (
         <React.Fragment>
            <h1>Layout</h1>
         </React.Fragment>
      )
   }
}

export default Layout

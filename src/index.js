// require('file-loader?name=[name].[ext]!./index.html');
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/front/home'
import About from './components/front/about'
import NotFound from './components/error/404'

const appElement = document.getElementById('app')

ReactDOM.render(
   <BrowserRouter>
      <Routes>
         <Route path="/" element={<App />}></Route>
         <Route path="/home" element={<Home />}></Route>
         <Route path="/about-us" element={<About />}></Route>
         <Route path="*" element={<NotFound />}></Route>
      </Routes>
   </BrowserRouter>,
   appElement
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

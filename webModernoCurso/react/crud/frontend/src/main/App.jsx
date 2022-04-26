import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import React from 'react'
import Routes from './Routes'
import { BrowserRouter } from 'react-router-dom'

import Logo from '../components/template/Logo'
import Footer from '../components/template/Footer'
import Nav from '../components/template/Nav'


const App =  props =>
    (<div className="app">
        <BrowserRouter>
            <Logo />
            <Nav />
            <Routes />
            <Footer />
        </BrowserRouter>
    </div>)

export default App
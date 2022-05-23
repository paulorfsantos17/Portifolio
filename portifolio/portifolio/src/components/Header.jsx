import React from "react";
import './Header.css'
import Nav from "./Nav";
import Logo from "./Logo";


const Header = props => 
    <header className="header">
        <Logo></Logo>
        <Nav></Nav>
    </header>


export default Header

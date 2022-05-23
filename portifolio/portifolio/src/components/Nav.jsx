import React from "react";
import './Nav.css'
import Logo from "./Logo"

const Nav = props => 
    <aside className="menu-area">
        <nav className="menu">
            <a href="#">Início</a>
            <a href="#">Sobre Mim</a>
            <a href="#">Projetos</a>
            <a href="#">Habilidades</a>
        </nav>
    </aside>



export default Nav
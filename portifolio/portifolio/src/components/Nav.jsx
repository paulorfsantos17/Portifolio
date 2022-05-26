import React from "react";
import './Nav.css'
import NavLink from "./NavLink";


const Nav = props => 
    <aside className="menu-area">
        <nav className="menu">
            <NavLink name="Inicio" rota="#"></NavLink>
            <NavLink name="Sobre Mim" rota="#"></NavLink>
            <NavLink name="Projetos" rota="#"></NavLink>
            <NavLink name="Habilidades" rota="#"></NavLink>
        </nav>
    </aside>



export default Nav
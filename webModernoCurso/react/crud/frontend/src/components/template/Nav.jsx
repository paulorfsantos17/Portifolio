import React from 'react'
import './Nav.css'
import MenuLink from '../../assets/utils/MenuLink'

const Nav = props => 
    <aside className="menu-area">
        <nav className="menu">
           <MenuLink route="/" icon="fa fa-home" name="Início"/>
           <MenuLink route="/users" icon="fa fa-users" name="Usuários"/>
        </nav>
    </aside>

export default Nav
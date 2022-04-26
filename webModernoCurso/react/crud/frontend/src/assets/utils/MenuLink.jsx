import React from "react";
import './MenuLink.css' 
import { Link } from 'react-router-dom'


const link = props => 
    <Link to={props.route} className='linkNav'>
        <i className={props.icon}></i> {props.name}
    </Link>

export default link

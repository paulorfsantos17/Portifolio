import React  from "react";
import Ability from "./Ability";
import AboutMe from "./AboutMe";
import  './Main.css'
import Projects from './Projects'

const Main = props => (
    <main className="container">
        <AboutMe></AboutMe>
        <Projects></Projects>
        <Ability></Ability>
    </main>
)


export default Main
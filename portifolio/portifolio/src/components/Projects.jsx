import CardProjects from './CardProjects'
import './Projects.css'

const Projects = props => {
    return (
        <section className='projects'>
            <h1> Projetos </h1>
            <div className='container-cards'>
                <CardProjects></CardProjects>
                <CardProjects></CardProjects>
                <CardProjects></CardProjects>
            </div>
        </section>
    )
}

export default Projects
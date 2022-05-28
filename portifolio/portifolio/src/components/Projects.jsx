import CardProjects from './CardProjects'
import './Projects.css'
import Button from '../utils/Buttons'

const Projects = props => {
    return (
        <section className='projects'>
            <h1> Projetos </h1>
            <div className='container-cards'>
                <CardProjects></CardProjects>
                <CardProjects></CardProjects>
                <CardProjects></CardProjects>
            </div>
            <Button>
            </Button>
        </section>
    )
}

export default Projects
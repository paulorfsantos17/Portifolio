import './AboutMe.css'
import aboutmeimg from '../assets/img/image-sobremim.png'

const AboutMe = props => 
    <aside className='aboutme'>
        <div className='aboutme-imagem'>
            <h1>Olá, me chamo Paulo!</h1>
            <h2>Bem-vindo ao meu portifólio!</h2>
            <img src={aboutmeimg} alt="Imagem não encontrada!" className='aboutmeimg'/>
        </div>
        <div className='aboutme-text'>
            <h1>Sobre mim</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricies dapibus nunc, a laoreet purus accumsan quis. Nam maximus scelerisque efficitur. Donec consequat sed lorem vel imperdiet. Mauris metus nisi, hendrerit facilisis odio et, facilisis molestie sapien. Sed aliquam arcu sem. Donec ut faucibus lorem, at bibendum turpis. Integer fermentum vulputate bibendum. Nulla facilisi. Curabitur eget turpis quis augue fringilla dignissim ac ac lectus. Sed justo lacus, tincidunt at sollicitudin finibus, rhoncus in est. Praesent lobortis sem ut venenatis venenatis. Vivamus porttitor ut ipsum sit amet facilisis. Praesent sit amet dictum tellus. Phasellus vulputate tincidunt lectus.
            </p>
        </div>
    </aside>



export default AboutMe
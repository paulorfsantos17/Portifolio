import './Icons.css'
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'

const Icons = props =>
    <div className='icons'>
        <a href="https://github.com/paulorfsantos17">
            <span >
                <AiFillGithub className='iconsformat'></AiFillGithub>
            </span>
        </a>
        <a href="https://www.linkedin.com/in/paulo-ricardo-faria-santos-541aa01a5/">
            <span>
                <AiFillLinkedin  className='iconsformat'></AiFillLinkedin>
            </span>
        </a>
    </div>

export default Icons
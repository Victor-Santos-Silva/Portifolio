import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='containerHeader'>
            <h1 className='nome-logo'>VS</h1>
            <div className='menu'>
                <h1 className='menu-palavras'><Link to="/">Home</Link></h1>
                <h1 className='menu-palavras'><Link to="/aboutme">Sobre mim</Link></h1>
                <h1 className='menu-palavras'><Link to="/projects">Projetos</Link></h1>
            </div>
        </header>
    );
}

export default Header;

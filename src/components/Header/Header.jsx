import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='containerHeader'>
            <h1 className='nome-logo'><Link to="/" className='buttonHeader'>VS</Link></h1>
            <div className='menu'>
                <h1 className='menu-palavras'>
                    <Link to="/" className='buttonHeader'>Home</Link>
                </h1>
                <h1 className='menu-palavras'>
                    <Link to="/aboutme" className='buttonHeader'>Sobre mim</Link>
                </h1>
                <h1 className='menu-palavras'>
                    <Link to="/projects" className='buttonHeader'>Projetos</Link>
                </h1>
            </div>
        </header>
    );
}

export default Header;

import './header.css';

const Header = () => {
    return (
        <header className='containerHeader'>
            <h1 className='nome-logo'>VS</h1>
            <div className='menu'>
                <h1 className='menu-palavras'><a href="#">Home</a></h1>
                <h1 className='menu-palavras'><a href="#">About me</a></h1>
                <h1 className='menu-palavras'><a href="#">Projects</a></h1>
            </div>
        </header>
    );
}

export default Header;

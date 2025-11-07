import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <header className="containerHeader">
      <div className="logo">
        <Link to="/" className="buttonHeader">
          VS
        </Link>
      </div>

      <nav className="menu-principal">
        <ul>
          <li>
            <Link to="/" className="buttonHeader">
              Home
            </Link>
          </li>
          <li>
            <Link to="/aboutme" className="buttonHeader">
              Sobre mim
            </Link>
          </li>
          <li>
            <Link to="/projects" className="buttonHeader">
              Projetos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

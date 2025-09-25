import { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css"; // Supondo que o CSS esteja nesse arquivo

function Header() {
  // Estado para controlar se o menu mobile está aberto ou fechado
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className="containerHeader">
      <div className="logo">
        <Link to="/" className="buttonHeader">
          VS
        </Link>
      </div>

      {/* O botão hambúrguer só aparece no mobile */}
      <button
        className="menu-hamburguer"
        onClick={() => setMenuAberto(!menuAberto)}
      >
        {/* Lógica simples para mostrar ☰ ou X */}
        {menuAberto ? "X" : "☰"}
      </button>

      {/* Adiciona a classe 'menu-aberto' quando o estado for true */}
      <nav className={`menu-principal ${menuAberto ? "menu-aberto" : ""}`}>
        <ul>
          <li>
            <Link
              to="/"
              className="buttonHeader"
              onClick={() => setMenuAberto(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/aboutme"
              className="buttonHeader"
              onClick={() => setMenuAberto(false)}
            >
              Sobre mim
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="buttonHeader"
              onClick={() => setMenuAberto(false)}
            >
              Projetos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

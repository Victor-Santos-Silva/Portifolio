// Introducao.jsx
import "./Introducao.css";
import perfil from "../../assets/Foto De Perfil.jpg";
import seta from "../../assets/seta.png";
import { Link } from "react-router-dom"; // Supondo que você use react-router

function Introducao() {
  return (
    // Usando a metodologia BEM para as classes (ex: bloco__elemento)
    <section className="intro">
      {/* <header className="intro__header">
        <img src={seta} alt="Seta decorativa" className="intro__header-seta" />
        <p className="intro__header-greeting">
          Olá! Eu sou <b className="cor-roxa">Victor dos Santos.</b>
        </p>
      </header> */}

      <div className="intro__main">
        <img
          src={perfil}
          alt="Foto de perfil de Victor dos Santos"
          className="intro__main-photo"
        />
        <div className="intro__main-text">
          {/* O texto principal foi agrupado em um único parágrafo para melhor semântica */}
          <p className="intro__tagline">
            Explorando o limite
            <span>Entre o possível e o extraordinário</span>
            <span>
              Na <b className="cor-roxa">tecnologia.</b>
            </span>
          </p>
          <p className="intro__subtitle">
            Criando o futuro, uma linha de código por vez.
          </p>
        </div>
      </div>

      <footer className="intro__footer">
        {/* Este deve ser o ÚNICO H1 desta seção, o título principal */}
        <h1 className="intro__footer-title">Sou Desenvolvedor Web</h1>
        <h2 className="intro__footer-subtitle">
          Atualmente sou desenvolvedor autônomo.
        </h2>
        <p className="intro__footer-bio">
          Desenvolvedor front-end autodidata, atuando no setor há mais de 2
          anos. Crio aplicações web e mobile funcionais e elegantes, focadas na
          experiência do usuário e na entrega de soluções que atendem tanto às
          necessidades dos clientes quanto aos objetivos do negócio.
        </p>

        {/* Adicionando botões de Call to Action (CTA) */}
        <div className="intro__footer-cta">
          <Link to="/projects" className="botaoIntroducao">
            Meus Projetos
          </Link>
          <a href="https://www.instagram.com/visantos_dev/" target="_blank" className="botaoIntroducao">
            Entrar em Contato
          </a>
        </div>
      </footer>
    </section>
  );
}

export default Introducao;

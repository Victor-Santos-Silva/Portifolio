import "./Introducao.css";
import perfil from "../../assets/Foto Perfil.jpg";
import seta from "../../assets/seta.png";
import { Link } from "react-router-dom";

function Introducao() {
  return (
    <section className="container-introducao-master">
      <div className="containerNome">
        <img src={seta} alt="seta" className="seta" />
        <h3>
          Olá! Eu sou <b className="cor-roxa">Victor dos Santos.</b>
        </h3>
      </div>

      <div className="container-introducao">
        <img src={perfil} alt="" className="perfil" />

        <div className="frase">
          <h2 className="fraseInspiradora1">Explorando o limite</h2>
          <h1 className="fraseInspiradora">Entre o possível</h1>
          <h1 className="fraseInspiradora">E o extraordinário</h1>
          <h1 className="fraseInspiradora">
            Na <b className="cor-roxa">tecnologia.</b>
          </h1>
          <h5 className="">Criando o futuro, uma linha de código por vez.</h5>
        </div>
      </div>

      <div className="container-profissao">
        <h1>Sou Desenvolvedor Web</h1>
        <h3>Atualmente sou desenvolvedor autônomo.</h3>
        <br />
        <p>
          Desenvolvedor front-end autodidata, atuando no setor há mais de 2
          anos. Crio aplicações web e mobile funcionais e elegantes, focadas na
          experiência do usuário e na entrega de soluções que atendem tanto às
          necessidades dos clientes quanto aos objetivos do negócio.
        </p>
      </div>
    </section>
  );
}

export default Introducao;

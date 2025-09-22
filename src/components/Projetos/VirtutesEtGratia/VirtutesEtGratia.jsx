import "./VirtutesEtGratia.css";

import html from "../../../assets/Html.png";
import css from "../../../assets/Css.png";
import typeScript from "../../../assets/Typescript.png";
import postgress from "../../../assets/Postgress SQL.png";
import node from "../../../assets/NodeJs.png";
import Next from "../../../assets/Next.png";
import azure from "../../../assets/Microsoft_Azure.png";

import imgVirtutesetGratia from "../../../assets/Virtutes et Gratia.png";
import { Link } from "react-router-dom";

const VirtutesetGratia = () => {
  return (
    <>
      <section className="container-VirtutesetGratia">
        <h1>E-commerce Virtutes et Gratia</h1>
        <img src={imgVirtutesetGratia} alt="" className="imgVirtutesetGratia" />

        <h2>Tecnologias usadas:</h2>
        <img src={html} alt="icone JavaScript" className="imagem" />
        <img src={css} alt="icone JavaScript" className="imagem" />
        <img src={typeScript} alt="icone JavaScript" className="imagem" />
        <img src={Next} alt="icone JavaScript" className="imagem" />
        {/* <img src={node} alt="icone JavaScript" className='imagem' />
                <img src={postgress} alt="icone JavaScript" className='imagem' />
                <img src={azure} alt="icone JavaScript" className='imagem' /> */}

        <h2>Descrição:</h2>
        <p>
          Landing page de um mini e-commerce de artigos religiosos, com design
          moderno e responsivo, destacando produtos, promoções e informações de
          contato para facilitar a navegação e a experiência do usuário.
        </p>
        <Link
          to="https://virtutes-et-gratia.vercel.app/"
          target="_blank"
          className="buttonVejaMais"
        >
          <b>Veja mais</b>
        </Link>
      </section>
    </>
  );
};

export default VirtutesetGratia;

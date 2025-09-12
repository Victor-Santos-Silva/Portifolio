import "./eletroNet.css";
import html from "../../../assets/Html.png";
import css from "../../../assets/Css.png";
import javaScript from "../../../assets/JavaScript.png";
import imgEletroNet from "../../../assets/HomePagEeletroNet.png";
import { Link } from "react-router-dom";

const EletroNet = () => {
  return (
    <>
      <section className="container-eletro-net">
        <h1>EletroNet</h1>
        <img src={imgEletroNet} alt="imgEletroNet" className="imgEletroNet" />
        <h2>Tecnologias usadas:</h2>
        <img src={html} alt="" className="imagem" />
        <img src={css} alt="" className="imagem" />
        <img src={javaScript} alt="" className="imagem" />
        <h2>Descrição:</h2>
        <p>E-commerce simples (Em Manutenção)</p>
        <Link
          to="https://projeto-eletronet.vercel.app/"
          target="_blank"
          className="buttonVejaMais"
        >
          <b>Veja mais</b>
        </Link>
      </section>
    </>
  );
};

export default EletroNet;

import "./tenisGo.css";

import imgTenisGo from "../../../assets/barbearia site teste.png";
import reactNative from "../../../assets/react-Native (1).png";
import java from "../../../assets/java.png";
import typescript from "../../../assets/Typescript.png";
import { Link } from "react-router-dom";

const TenisGo = () => {
  return (
    <>
      <section className="container-TenisGo">
        <h1>TenisGo Mobile</h1>
        <img src={imgTenisGo} alt="" className="imgTenisGo" />

        <h2>Tecnologias usadas:</h2>
        <img src={typescript} alt="" className="imagem" />
        <img src={reactNative} alt="" className="imagem" />
        <img src={java} alt="" className="imagem" />

        <h2>Descrição:</h2>
        <p>Em breve...</p>
        <Link to="#" target="_blank" className="buttonVejaMais">
          <b>Veja mais</b>
        </Link>
      </section>
    </>
  );
};

export default TenisGo;

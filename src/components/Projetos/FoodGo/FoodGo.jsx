import "./foodGo.css";

import imgFoodGo from "../../../assets/barbearia site teste.png";
import flutter from "../../../assets/flutter.png";
import dart from "../../../assets/dart.png";
import java from "../../../assets/java.png";
import { Link } from "react-router-dom";

const FoodGo = () => {
  return (
    <>
      <section className="container-FoodGo">
        <h1>FoodGo Mobile</h1>
        <img src={imgFoodGo} alt="" className="imgFoodGo" />

        <h2>Tecnologias usadas:</h2>
        <img src={dart} alt="" className="imagem" />
        <img src={flutter} alt="" className="imagem" />
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

export default FoodGo;

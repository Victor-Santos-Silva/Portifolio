import "./foodGo.css";

import imgFoodGo from "../../../assets/FoodGoBackGround.png";
import reactNative from "../../../assets/react-Native (1).png";
import node from "../../../assets/NodeJs.png";
import javascript from "../../../assets/JavaScript.png";
import postgres from "../../../assets/Postgress SQL.png";
import { Link } from "react-router-dom";

const FoodGo = () => {
  return (
    <>
      <section className="container-FoodGo">
        <h1>FoodGo Mobile</h1>
        <img src={imgFoodGo} alt="" className="imgFoodGo" />

        <h2>Tecnologias usadas:</h2>
        <img src={javascript} alt="" className="imagem" />
        <img src={reactNative} alt="" className="imagem" />
        <img src={node} alt="" className="imagem" />
        <img src={postgres} alt="" className="imagem" />

        <h2>Descrição:</h2>
        <p>Em breve...</p>
        <Link to="https://github.com/Victor-Santos-Silva/FoodGoMobile" target="_blank" className="buttonVejaMais">
          <b>Veja mais</b>
        </Link>
      </section>
    </>
  );
};

export default FoodGo;

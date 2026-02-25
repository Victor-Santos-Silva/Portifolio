import "./coffeeExpress.css";

import imgCoffeeExpress from "../../../assets/CoffeeExpress.png";
import javascript from "../../../assets/JavaScript.png";
import reactNative from "../../../assets/react-Native (1).png";
import mysql from "../../../assets/MySQL.png";
import azure from "../../../assets/Microsoft_Azure.png";
import { Link } from "react-router-dom";

const CoffeeExpress = () => {
  return (
    <>
      <section className="container-CoffeeExpress">
        <h1>CoffeeExpress Mobile</h1>
        <img src={imgCoffeeExpress} alt="" className="imgCoffeeExpress" />

        <h2>Tecnologias usadas:</h2>
        <img src={javascript} alt="" className="imagem" />
        <img src={reactNative} alt="" className="imagem" />
        <img src={mysql} alt="" className="imagem" />
        <img src={azure} alt="" className="imagem" />

        <h2>Descrição:</h2>
        <p>CoffeeExpress é um aplicativo que auxilia garçons a registrar pedidos de clientes de forma rápida e prática, otimizando o atendimento e reduzindo erros.</p>
        <Link to="https://github.com/Victor-Santos-Silva/Coffee-Express-2" target="_blank" className="buttonVejaMais">
          <b>Veja mais</b>
        </Link>
      </section>
    </>
  );
};

export default CoffeeExpress;

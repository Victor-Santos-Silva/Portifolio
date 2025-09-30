import React from "react";
import "./tecnologias.css";

import html from "../../assets/Html.png";
import css from "../../assets/Css.png";
import javaScript from "../../assets/JavaScript.png";
import react from "../../assets/React.png";
import Next from "../../assets/Next.png";
import flutter from "../../assets/flutter.png";
import reactNative from "../../assets/react-Native (1).png";
import node from "../../assets/NodeJs.png";
import mysql from "../../assets/MySQL.png";
import postgress from "../../assets/Postgress SQL.png";
import typescript from "../../assets/Typescript.png";
import azure from "../../assets/Microsoft_Azure.png";

export default function Tecnologias() {
  return (
    <section className="testeSection">
      <h1 className="testeasdasd">
        Atualmente, estou em busca de integrar uma equipe inovadora que valorize
        a criação de soluções digitais acessíveis e impactantes, unindo
        tecnologia e experiência do usuário.
      </h1>
      <br />
      <div className="container-icones">
        <img src={html} alt="html" className="imgHtml" />
        <img src={css} alt="html" className="imgHtml" />
        <img src={javaScript} alt="html" className="imgHtml" />
        <img src={typescript} alt="html" className="imgHtml" />
        <img src={react} alt="html" className="imgHtml" />
        <img src={Next} alt="html" className="imgHtml" />
        <img src={flutter} alt="html" className="imgHtml" />
        <img src={reactNative} alt="html" className="imgHtml" />
        <img src={node} alt="html" className="imgHtml" />
        <img src={mysql} alt="html" className="imgHtml" />
        <img src={postgress} alt="html" className="imgHtml" />
        <img src={azure} alt="html" className="imgHtml" />
      </div>
    </section>
  );
}

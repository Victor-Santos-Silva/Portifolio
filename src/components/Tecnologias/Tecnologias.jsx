// tecnologias.jsx
import React from "react";
import "./tecnologias.css";

// Importações das imagens
import htmlIcon from "../../assets/Html.png";
import cssIcon from "../../assets/Css.png";
import jsIcon from "../../assets/JavaScript.png";
import reactIcon from "../../assets/React.png";
import nextIcon from "../../assets/Next.png";
import flutterIcon from "../../assets/flutter.png";
import reactNativeIcon from "../../assets/react-Native (1).png";
import nodeIcon from "../../assets/NodeJs.png";
import mysqlIcon from "../../assets/MySQL.png";
import postgresIcon from "../../assets/Postgress SQL.png";
import tsIcon from "../../assets/Typescript.png";
import azureIcon from "../../assets/Microsoft_Azure.png";

// 1. Criamos um array com os dados das tecnologias
const tecnologias = [
  { nome: "HTML", icone: htmlIcon },
  { nome: "CSS", icone: cssIcon },
  { nome: "JavaScript", icone: jsIcon },
  { nome: "TypeScript", icone: tsIcon },
  { nome: "React", icone: reactIcon },
  { nome: "Next.js", icone: nextIcon },
  { nome: "Flutter", icone: flutterIcon },
  { nome: "React Native", icone: reactNativeIcon },
  { nome: "Node.js", icone: nodeIcon },
  { nome: "MySQL", icone: mysqlIcon },
  { nome: "PostgreSQL", icone: postgresIcon },
  { nome: "Azure", icone: azureIcon },
];

export default function Tecnologias() {
  return (
    <section className="tecnologias-section">
      <h2 className="tecnologias-titulo">Tecnologias & Ferramentas</h2>
      <p className="section-descricao">
        Atualmente, estou em busca de integrar uma equipe inovadora que valorize
        a criação de soluções digitais acessíveis e impactantes, unindo
        tecnologia e experiência do usuário.
      </p>
      
      {/* 2. Usamos .map() para renderizar os ícones dinamicamente */}
      <div className="icones-container">
        {tecnologias.map((tech) => (
          <div key={tech.nome} className="icone-wrapper">
            <img 
              src={tech.icone} 
              alt={`Ícone do ${tech.nome}`} 
              className="icone-img" 
            />
            <span>{tech.nome}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
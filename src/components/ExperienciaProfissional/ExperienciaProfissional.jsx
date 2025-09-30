import React from "react";
import "./experienciaProfissional.css";
import database from "../../data/database.json";
import { Link } from "react-router-dom";

export default function ExperienciaProfissional() {
  return (
    <section className="projetos-section">
      <h1 className="projetos-titulo">Alguns Projetos Pessoais</h1>
      <div className="cards-wrapper">
        {database.map((card) => (
          <article key={card.id} className="card-container">
            <img src={card.foto} alt={card.nome} className="card-img" />
            <div className="card-body">
              <h2 className="card-titulo">{card.nome}</h2>
              <p className="card-descricao">{card.descricao}</p>
              <Link to={card.link} target="_blank" className="card-botao">
                Veja mais
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

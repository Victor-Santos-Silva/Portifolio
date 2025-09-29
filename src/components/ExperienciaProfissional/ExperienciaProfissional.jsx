import React from "react";
import "./experienciaProfissional.css";
import database from "../../data/database.json";
import { Link } from "react-router-dom";

export default function ExperienciaProfissional() {
  return (
    <section className="section-card">
      <h1 className="titulo-card">Experiência Profissional</h1>
      <div className="cards-wrapper">
        {database.map((card, index) => (
          <div key={`${card.id}-${index}`} className="container-card">
            <div>
              <img src={card.foto} alt="" className="img-card" />
            </div>

            <div>
              <h1>{card.nome}</h1>
              <p className="descricao-card">{card.descricao}</p>
              <Link to={card.link} target="_blank" className="botaoExperiencia buttonVejaMais">
                Veja mais.
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

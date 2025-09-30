import React from "react";
import Header from "../../components/Header/Header";
import Introducao from "../../components/Introducao/Introducao";
import ExperienciaProfissional from "../../components/ExperienciaProfissional/ExperienciaProfissional";
import Tecnologias from "../../components/Tecnologias/Tecnologias";

function Home() {
  return (
    <>
      <Header />
      <Introducao />
      <ExperienciaProfissional />
      <Tecnologias />
    </>
  );
}

export default Home;
